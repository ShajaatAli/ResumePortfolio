import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faHammer, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import initials from '../../assets/images/logo-s.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navIcon = "text-xl mx-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-200/50 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-300";
    const activeStyle = { color: 'green', backgroundColor: 'rgba(255, 255, 255, 0.5)' };

    return (
        <>
            <div 
                className="fixed top-0 left-0 w-full h-1 bg-green-500 z-50 transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
            />
            <nav className="bg-white/80 dark:bg-gray-100/80 backdrop-blur-md fixed w-full z-20 top-0 start-0 border-b border-gray-200/20 dark:border-gray-600/20">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    <div className="flex items-center md:justify-start">
                        <button 
                            className="mobile-menu-button md:hidden mr-3 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-200/50 transition-all duration-300" 
                            onClick={toggleMenu}
                        >
                            <FontAwesomeIcon icon={faBars} size="2x" />
                        </button>
                        <a href="/" className="flex items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse w-full group">
                            <img 
                                className="object-scale-down h-12 w-12 mx-auto md:mx-0 transition-transform duration-300 group-hover:rotate-12" 
                                src={initials} 
                                alt="initials" 
                            />
                        </a>
                    </div>

                    <div className={`${
                        isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    } fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white/95 dark:bg-gray-100/95 backdrop-blur-md transition-all duration-300 md:hidden`}>
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            {[
                                { path: "/", icon: faHome, label: "HOME" },
                                { path: "/About", icon: faUser, label: "ABOUT" },
                                { path: "/Contact", icon: faEnvelope, label: "CONTACT" },
                                { path: "/projects", icon: faHammer, label: "PROJECTS" }
                            ].map((item) => (
                                <NavLink 
                                    key={item.label} 
                                    to={item.path} 
                                    className={({ isActive }) => 
                                        `relative text-2xl ${navIcon} p-4 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-200/50 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''}`
                                    }
                                    style={({ isActive }) => isActive ? activeStyle : undefined}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span className="ml-2">{item.label}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex md:flex-row md:items-center md:space-x-4">
                        {[
                            { path: "/", icon: faHome, label: "HOME" },
                            { path: "/About", icon: faUser, label: "ABOUT" },
                            { path: "/Contact", icon: faEnvelope, label: "CONTACT" },
                            { path: "/projects", icon: faHammer, label: "PROJECTS" }
                        ].map((item) => (
                            <li key={item.label} className="group relative">
                                <NavLink 
                                    to={item.path} 
                                    className={({ isActive }) => 
                                        `relative ${navIcon} p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-200/50 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full' : ''}`
                                    }
                                    style={({ isActive }) => isActive ? activeStyle : undefined}
                                >
                                    <FontAwesomeIcon icon={item.icon} />
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                                            {item.label}
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <a 
                            href="https://github.com/shajaatali?tab=repositories" 
                            className={`${navIcon} p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-200/50 transition-all duration-300`}
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/shajaatali/" 
                            className={`${navIcon} p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-200/50 transition-all duration-300`}
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
