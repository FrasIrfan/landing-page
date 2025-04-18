import React from 'react';

const ContactUs = () => {
    return (
        <section className="w-full bg-black text-white relative overflow-visible">
            <div className="max-w-[1590px] mx-auto flex flex-col lg:flex-row relative">
                <div className="w-full lg:w-3/5 p-8 lg:p-16 relative z-10">
                    <h2 className="text-2xl lg:text-2xl font-extrabold uppercase mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-base lg:text-md leading-relaxed mb-10">
                        Welcome to Aglivo, a community strength and conditioning facility
                        that began in 2019.
                    </p>
                    <ul className="space-y-8">
                        <li className="flex items-start">
                            <div className="flex-shrink-0 bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-4">
                                <img
                                    src="/assets/Icons/locationicon.png/"
                                    alt="Location Icon"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-sm">Our Location</p>
                                <p className="text-sm font-semibold">Johar Town, Lahore, Pakistan</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0 bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-4">
                                <img
                                    src="/assets/Icons/phoneicon.png/"
                                    alt="Location Icon"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-sm">Phone Number</p>
                                <p className="text-lg font-semibold">(540) 842-1855</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0 bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-4">
                                <img
                                    src="/assets/Icons/mailicon.png/"
                                    alt="Location Icon"
                                    className="w-4 h-4 object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-sm">Email Us</p>
                                <p className="text-lg font-semibold">Info@agljivo.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div
                    className="w-full lg:w-2/5 bg-white text-black p-2 lg:p-5 relative z-20 lg:-mt-20 mr-24 mb-20" >
                    <h2 className="text-2xl lg:text-2xl font-extrabold uppercase mb-6 text-center ">
                        Contact Us
                    </h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full text-black placeholder-gray-400 px-3 py-3 border border-black radius-black " />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full bg-white text-black placeholder-gray-400 px-3 py-3 border border-black" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Typing..."
                                className="w-full bg-white text-black placeholder-gray-400 px-3 py-3 border border-black " />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 uppercase" >
                            Join Us
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
