import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo';

const Home = () => {
    const [letterClass] = useState('text-animate')

  const nameArray = [' ','S', 'h', 'a', 'j', 'a', 'a', 't',' ', 'A','l','i']

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={letterClass}>e</span>
                <span className={letterClass}>l</span>
                <span className={letterClass}>l</span>
                <span className={`${letterClass} _13`}>o,</span>
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'m   </span>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
            </h1>
            <h2>Computer Science Major / Gym & Health Advocate</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
        <Logo />

        <Loader type="pacman" />
        </>
    )
}

export default Home