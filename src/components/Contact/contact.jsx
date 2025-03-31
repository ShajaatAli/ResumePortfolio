import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({ show: false, type: '', message: '' });

    const showNotification = (type, message) => {
        setNotification({ show: true, type, message });
        setTimeout(() => setNotification({ show: false, type: '', message: '' }), 3000);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                'service_6678j8v',
                'template_sx38cvc',
                form.current,
                '6iFsLxS8QGClNrbep'
            )
            .then(
                () => {
                    showNotification('success', 'Message successfully sent!');
                    form.current.reset();
                },
                (error) => {
                    showNotification('error', 'Failed to send the message, please try again');
                    console.log(error.text);
                }
            )
            .finally(() => setIsSubmitting(false));
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 ">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-gray-800 dark:bg-gray-900 p-4">
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h1>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-green-500 text-xl" />
                                    <a href="mailto:shajaatali@csus.edu" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                                        shajaatali@csus.edu
                                    </a>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-green-500 text-xl" />
                                    <span className="text-gray-600 dark:text-gray-300">Sacramento, California</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h2>
                                <div className="flex space-x-4">
                                    <a 
                                        href="https://github.com/shajaatali" 
                                        className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                    <a 
                                        href="https://www.linkedin.com/in/shajaatali/" 
                                        className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 transition-colors" 
                                    placeholder="Your name" 
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 transition-colors" 
                                    placeholder="your.email@example.com" 
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 transition-colors resize-none" 
                                    placeholder="Your message..." 
                                    required
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors ${
                                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Notification */}
            {notification.show && (
                <div className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ${
                    notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                } text-white`}>
                    {notification.message}
                </div>
            )}
        </div>
    );
};

export default Contact;
