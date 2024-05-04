import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';

import shajaat from '../../assets/images/shajaatsuit.jpg'

const Home = () => {
    const [letterClass] = useState('text-animate');
    const nameArray = ['S', 'h', 'a', 'j', 'a', 'a', 't', ' ', 'A', 'l', 'i'];

    return (
        <div className="flex justify-around items-center p-[3vw] h-screen ml-10">
            <div className="relative w-2/5 max-h-[90%] z-10 p-5">
                <h1 className="text-black text-7xl m-0 font-[Coolvetica] font-bold">
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
                <h2 className="text-black mt-2.5 text-4xl font-[Coolvetica] tracking-wide font-bold">
                    Computer Science Major / Exercise & Health Advocate
                </h2>
                <h3>
                    <Link to="/contact" className='inline-block text-black text-lg font-[Coolvetica] font-semibold tracking-wider no-underline px-1 py-0.5 my-auto mx-auto border border-solid border-[rgb(37,33,33)] hover:bg-[#5c5a53] hover:text-[#333] relative top-2.5 whitespace-nowrap'>
                        CONTACT ME
                    </Link>
                </h3>
            </div>
            <div className="self-center w-1/2 h-[100%] relative z-10">
                <img className="block ml-10 transform scale-75" src={shajaat} alt="Shajaat in suit"/>
            </div>
            <Loader type="pacman" />
        </div>
    );
};

export default Home;

