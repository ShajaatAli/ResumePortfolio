import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser, faHammer} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    const [showNav, setShowNav ] = useState(false);

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'
            onClick={() => setShowNav(false)}>
            <img src={LogoS} alt="logo" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                to="/"  
                onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4de" />
            </NavLink>

            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="about-link" 
                to="/about"
                onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4de" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="contact-link" 
            to="/contact"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4de" />
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="project-link" 
            to="/projects"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHammer} color="#4d4de" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/shajaatali/">
                    <FontAwesomeIcon icon={faLinkedin} color="black" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/shajaatali?tab=repositories">
                    <FontAwesomeIcon icon={faGithub} color="black" />
                </a>
            </li>
        </ul>

    </div>
    )
}

export default Sidebar