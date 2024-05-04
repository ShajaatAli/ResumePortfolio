import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            );
    };

    return (
        <div className="h-screen flex z-10">
            <div className="m-auto w-full max-w-xl bg-neutral-700 rounded-2xl shadow-xl z-10 h-[300px] ">
                <div className="space-x-1 h-8 flex justify-start bg-zinc-600 rounded-2xl pt-3 pl-5">
                        <span className="block w-2 h-2 bg-red-500 rounded-full"></span>
                        <span className="block w-2 h-2 bg-yellow-300 rounded-full"></span>
                        <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <div className="grid grid-cols-2 justify-between items-center mt-5 mb-5 ml-9">
                    <div className="text-left">
                        <h1 className="text-xl text-stone-900 font-bold mb-1 underline">CONTACT ME</h1>
                        <p className="text-gray-400 mt-11 text-xs">Contact Number : 916-519-6783</p>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="space-y-5">
                    <input className="bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500" placeholder="NAME"  />
                    <input className="bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500" placeholder="EMAIL" />
                    <input className="bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500" placeholder="CONTACT NO" />
                    <input className="bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500" placeholder="MESSAGE" />
                    <input className="bg-transparent" placeholder='' disabled/>
                    <button type="submit" className="px-4 py-2  text-green-500 hover:bg-green-500 hover:text-white">SEND</button>
                    </form>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Contact;
