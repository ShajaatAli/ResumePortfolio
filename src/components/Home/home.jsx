import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import './home.scss';
import anime from 'animejs';
import shajaat from '../../assets/images/shajaatsuit.jpg'

const StarrySky = () => {
    const numStars = 60;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const starryNight = () => {
        anime({
            targets: "#sky .star",
            opacity: [{ duration: 700, value: "0" }, { duration: 700, value: "1" }],
            easing: "linear",
            loop: true,
            delay: (el, i) => 50 * i
        });
    };

    const shootingStars = () => {
        anime({
            targets: "#shootingstars .wish",
            easing: "linear",
            loop: true,
            delay: (el, i) => 1000 * i,
            opacity: [{ duration: 700, value: "1" }],
            width: [{ value: "150px" }, { value: "0px" }],
            translateX: 350
        });
    };

    const randomRadius = () => Math.random() * 0.7 + 0.6;
    const getRandomX = () => Math.floor(Math.random() * Math.floor(vw)).toString();
    const getRandomY = () => Math.floor(Math.random() * Math.floor(vh)).toString();

    React.useEffect(() => {
        starryNight();
        shootingStars();
    }, []);

    return (
        <div id="App">
            <svg id="sky">
                {Array.from({ length: numStars }, (_, index) => (
                    <circle
                        cx={getRandomX()}
                        cy={getRandomY()}
                        r={randomRadius()}
                        stroke="none"
                        strokeWidth="0"
                        fill="white"
                        key={index}
                        className="star"
                    />
                ))}
            </svg>
            <div id="shootingstars">
                {Array.from({ length: numStars }, (_, index) => (
                    <div
                        key={index}
                        className="wish"
                        style={{
                            left: `${getRandomY()}px`,
                            top: `${getRandomX()}px`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const Home = () => {
    const [letterClass] = useState('text-animate');
    const nameArray = [' ', 'S', 'h', 'a', 'j', 'a', 'a', 't', ' ', 'A', 'l', 'i'];

    return (
        <>
            <StarrySky /> {/* This component renders the stars and should be behind the text */}
            <div className="container">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={letterClass}>e</span>
                        <span className={letterClass}>l</span>
                        <span className={letterClass}>l</span>
                        <span className={`${letterClass} _13`}>o,</span>
                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'m </span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                    </h1>
                    <h2>Computer Science Major / Gym & Health Advocate
                        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    </h2>

                </div>
                <div className="image-zone"> <img className="shajaat" src={shajaat}alt="Shajaat in suit"/></div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Home;
