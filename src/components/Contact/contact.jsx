import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_6678j8v', // Replace with your EmailJS service ID
                'template_sx38cvc', // Replace with your EmailJS template ID
                form.current,
                '6iFsLxS8QGClNrbep' // Replace with your EmailJS public key
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    form.current.reset();
                },
                (error) => {
                    alert('Failed to send the message, please try again');
                    console.log(error.text);
                }
            );
    };

    return (
    <div className="h-screen flex z-10">
        <div className="m-auto w-11/12 md:w-full max-w-xl bg-neutral-700 rounded-2xl shadow-xl z-10 h-auto md:h-[300px] py-5 md:py-0">
            <div className="space-x-1 h-8 flex justify-start bg-zinc-600 rounded-2xl pt-3 pl-5">
                    <span className="block w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="block w-2 h-2 bg-yellow-300 rounded-full"></span>
                    <span className="block w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center mt-5 mb-5 mx-4 md:ml-9">
                <div className="text-left mb-5 md:mb-0">
                    <h1 className="text-lg md:text-xl text-stone-900 font-bold mb-1 underline">CONTACT ME</h1>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-3">
                    <input 
                        type="text"
                        name="user_name"
                        className="bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 w-full" 
                        placeholder="NAME" 
                        required
                    />
                    <input 
                        type="email"
                        name="user_email"
                        className="bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 w-full" 
                        placeholder="EMAIL" 
                        required
                    />
                    <textarea 
                        name="message"
                        className="bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 w-full resize-none" 
                        placeholder="MESSAGE" 
                        required
                    />
                    <button 
                        type="submit" 
                        className="px-4 py-2 text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-200"
                    >
                        SEND
                    </button>
                </form>
            </div>
        </div>
    </div>
);
};

export default Contact;
