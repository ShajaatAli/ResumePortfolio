import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';

import shajaat from '../../assets/images/shajaatsuit.jpg'

const Home = () => {
    const [letterClass] = useState('text-animate');
    const nameArray = ['S', 'h', 'a', 'j', 'a', 'a', 't', ' ', 'A', 'l', 'i'];

    return (
        <div className="flex flex-col md:flex-row justify-around items-center p-[3vw] h-screen ml-10">
            <div className="flex flex-col justify-center items-start md:items-center text-center md:text-left">
                <h1 className="text-black md:text-7xl text-5xl m-0 font-[Coolvetica] font-bold">
                    <span className={letterClass}>H</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>l</span>
                    <span className={letterClass}>l</span>
                    <span className={`${letterClass} _13`}>o,</span>
                    <span className={`${letterClass} _14`}> I</span>
                    <span className={`${letterClass} _15`}>'m </span>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                </h1>
                <h2 className="text-black mt-2.5 md:text-4xl text-2xl font-[Coolvetica] tracking-wide font-bold">
                    Computer Science Major / Exercise & Health Advocate
                </h2>
                <h3>
                    <Link to="/contact" className='inline-block text-black text-lg font-[Coolvetica] font-semibold tracking-wider no-underline px-1 py-0.5 my-auto mx-auto border border-solid border-[rgb(37,33,33)] hover:bg-[#5c5a53] hover:text-[#333] relative top-2.5 whitespace-nowrap'>
                        CONTACT ME
                    </Link>
                </h3>
            </div>
            <div className="ml-10 flex justify-center items-center max-w-xs md:max-w-sm lg:max-w-md">
                <img className="w-full transform scale-75 md:scale-90 lg:scale-100" src={shajaat} alt="Shajaat in suit"/>
            </div>
            <Loader type="pacman" />
        </div>
    );
};

export default Home;

