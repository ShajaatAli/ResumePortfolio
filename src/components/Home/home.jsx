import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';

import shajaat from '../../assets/images/shajaatsuit.jpg'

const Home = () => {
    const [letterClass] = useState('text-animate');
    const nameArray = ['S', 'h', 'a', 'j', 'a', 'a', 't', ' ', 'A', 'l', 'i'];

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <div className="flex-1 text-center">
                        <h1 className="text-5xl md:text-7xl font-[Coolvetica] font-bold mb-4 text-black">
                            <span className={letterClass}>H</span>
                            <span className={letterClass}>e</span>
                            <span className={letterClass}>l</span>
                            <span className={letterClass}>l</span>
                            <span className={`${letterClass} _13`}>o,</span>
                            <span className={`${letterClass} _14`}> I</span>
                            <span className={`${letterClass} _15`}>'m </span>
                            <br />
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-[Coolvetica] text-black mb-8">
                            Computer Science Major / Exercise & Health Advocate
                        </h2>
                        <div className="flex justify-center">
                            <Link 
                                to="/contact" 
                                className='inline-flex items-center justify-center px-6 py-3 text-lg font-[Coolvetica] font-semibold text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-300'
                            >
                                CONTACT ME
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div className="relative w-64 md:w-80 lg:w-96">
                            <div className="absolute inset-0 bg-green-500 rounded-full filter blur-3xl opacity-20"></div>
                            <img 
                                className="relative w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" 
                                src={shajaat} 
                                alt="Shajaat in suit"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
    );
};

export default Home;

