import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faHammer } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import initials from '../../assets/images/logo-s.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navIcon = "text-xl mx-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
    const activeStyle = { color: 'green', backgroundColor: 'white' };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <nav className="bg-white dark:bg-gray-100 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <div className="flex items-center md:justify-start">
                    <button className="mobile-menu-button md:hidden mr-3" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </button>
                    <a href="/" className="flex items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse w-full">
                        <img className="object-scale-down h-12 w-12 mx-auto md:mx-0" src={initials} alt="initials" />
                    </a>
                </div>
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute flex-col bg-white top-full w-full md:static md:flex md:flex-row md:bg-transparent md:w-auto list-none`}>
                    {[
                        { path: "/", icon: faHome, label: "HOME" },
                        { path: "/About", icon: faUser, label: "ABOUT" },
                        { path: "/Contact", icon: faEnvelope, label: "CONTACT" },
                        { path: "/projects", icon: faHammer, label: "PROJECTS" }
                    ].map((item) => (
                        <li key={item.label} className="group relative md:mx-4">
                            <NavLink to={item.path} className={navIcon} style={({ isActive }) => isActive ? activeStyle : undefined}>
                                <FontAwesomeIcon icon={item.icon} />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-green text-sm bg-white p-2 rounded">{item.label}</span>
                                </div>
                            </NavLink>
                        </li>
                    ))}

                </div>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-end w-full md:w-auto">
                    <a href="https://github.com/shajaatali?tab=repositories" className={navIcon}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/shajaatali/" className={navIcon}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
