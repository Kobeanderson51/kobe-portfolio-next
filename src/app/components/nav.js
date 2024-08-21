import React, { useState } from "react";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <a href="#" className="text-3xl font-bold hover:text-gray-300 transition-colors duration-300">
                    Kobe Anderson
                </a>
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none transition-transform duration-300 hover:scale-110"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`fixed inset-0 z-50 bg-blue-600 bg-opacity-80 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
                >
                    <div className="flex flex-col items-center justify-between h-full">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-4 right-4 text-white text-3xl focus:outline-none transition-transform duration-300 hover:scale-110"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col items-center justify-center h-full">
                            <ul className="space-y-6">
                                <li>
                                    <a
                                        href="#projects"
                                        className="text-2xl text-white hover:text-blue-300 transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#skills"
                                        className="text-2xl text-white hover:text-blue-300 transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="text-2xl text-white hover:text-blue-300 transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul className={`hidden lg:flex lg:space-x-6`}>
                    <li>
                        <a
                            href="#projects"
                            className="text-lg hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300 px-3 py-2 rounded-lg hover:shadow-lg"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="text-lg hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300 px-3 py-2 rounded-lg hover:shadow-lg"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-lg hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300 px-3 py-2 rounded-lg hover:shadow-lg"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
