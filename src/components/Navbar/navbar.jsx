import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faHammer } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import initials from '../../assets/images/logo-s.png'

const Sidebar = () => {
    const navIcon = "block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
    const activeStyle = { color: 'green', backgroundColor: 'white' };

    return (
        <nav className="bg-white dark:bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img className="object-scale-down h-12 w-12"src={initials} alt="initials"/>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-end w-full md:w-auto">
                    <ul className="flex items-center justify-end md:space-x-7 rtl:space-x-reverse">
                        <li>
                            <a href="https://github.com/shajaatali?tab=repositories"><FontAwesomeIcon icon={faGithub} color="black" /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/shajaatali/"><FontAwesomeIcon icon={faLinkedin} color="black" /></a>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex md:w-auto md:order-1 items-center justify-between w-full" id="navbar-sticky">
                    <ul className="flex flex-col md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-white md:dark:bg-white dark:border-gray-700">
                        {[
                            { path: "/", icon: faHome, label: "HOME" },
                            { path: "/About", icon: faUser, label: "ABOUT" },
                            { path: "/Contact", icon: faEnvelope, label: "CONTACT" },
                            { path: "/projects", icon: faHammer, label: "PROJECTS" }
                        ].map((item) => (
                            <li key={item.label} className="group relative">
                                <NavLink to={item.path} className={navIcon} style={({ isActive }) => isActive ? activeStyle : undefined}>
                                    <FontAwesomeIcon icon={item.icon} />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-green text-sm bg-white p-2 rounded">{item.label}</span>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
