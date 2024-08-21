import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm('kobeanderson_51', 'template_glyugbj', e.currentTarget, 'XwETgVoAQma5eyFrh')
            .then(() => {
                setStateMessage('Message sent!');
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000); // hide message after 5 seconds
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setStateMessage('Something went wrong, please try again later');
                setIsSubmitting(false);
                setTimeout(() => {
                    setStateMessage(null);
                }, 5000); // hide message after 5 seconds
            });

        // Clears the form after sending the email
        e.currentTarget.reset();
    };

    return (
        <div id='contact' className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg mt-20 text-black">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Me</h1>
            <form className="flex flex-col space-y-6" onSubmit={sendEmail}>
                <div className="w-full">
                    <label className="block text-gray-700 mb-2 text-lg" htmlFor="name">Name</label>
                    <input
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="w-full">
                    <label className="block text-gray-700 mb-2 text-lg" htmlFor="email">Email</label>
                    <input
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        type="email"
                        id="email"
                        name="user_email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="w-full">
                    <label className="block text-gray-700 mb-2 text-lg" htmlFor="message">Message</label>
                    <textarea
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        rows={6}
                        required
                    ></textarea>
                </div>
                <button
                    className="bg-blue-600 text-white rounded-lg px-8 py-3 font-semibold hover:bg-blue-700 transition duration-300"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
                {stateMessage && (
                    <p className={`mt-4 text-center ${stateMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                        {stateMessage}
                    </p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
