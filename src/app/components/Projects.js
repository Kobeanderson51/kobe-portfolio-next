import React from 'react';
import Image from 'next/image';

export default function Projects() {
    return (
        <div>
            <section id="projects" className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-16">
                        My Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        
                        <a 
                            href="https://mtechcapstone.onrender.com/" 
                            className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 group" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className="relative w-full h-64">
                                <Image 
                                    src="/images/Capstone.PNG" 
                                    alt="Capstone Project" 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="rounded-t-lg transition-transform duration-150"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-t-lg">
                                    <p className="text-white text-lg font-semibold text-center px-4">
                                        Developed using React.js to manage student registrations.
                                    </p>
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-150">
                                Capstone Project
                            </h3>
                            <p className="text-base md:text-lg text-gray-600">
                                An application designed for student registration and management.
                            </p>
                        </a>

                        <a 
                            href="https://golf-page-redesign.vercel.app/" 
                            className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 group" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className="relative w-full h-64">
                                <Image 
                                    src="/images/Golf-app.jpg" 
                                    alt="Golf Tracker" 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="rounded-t-lg transition-transform duration-150"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-t-lg">
                                    <p className="text-white text-lg font-semibold text-center px-4">
                                        Built with Sass and JavaScript for tracking golf scores.
                                    </p>
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-150">
                                Golf Tracker
                            </h3>
                            <p className="text-base md:text-lg text-gray-600">
                                A web app for tracking golf scores and analyzing performance.
                            </p>
                        </a>

                        <a 
                            href="https://to-do-app-seven-ebon.vercel.app/" 
                            className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 group" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className="relative w-full h-64">
                                <Image 
                                    src="/images/todo-app.PNG" 
                                    alt="Todo App" 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="rounded-t-lg transition-transform duration-150"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-t-lg">
                                    <p className="text-white text-lg font-semibold text-center px-4">
                                        Created with JavaScript to manage daily tasks.
                                    </p>
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-150">
                                Todo App
                            </h3>
                            <p className="text-base md:text-lg text-gray-600">
                                A task management app with features for creating, updating, and deleting tasks.
                            </p>
                        </a>

                        <a 
                            href="https://react-project-one-indol.vercel.app/" 
                            className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 group" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className="relative w-full h-64">
                                <Image 
                                    src="/images/Balance-tracker.jpg" 
                                    alt="Balance Tracker" 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="rounded-t-lg transition-transform duration-150"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-t-lg">
                                    <p className="text-white text-lg font-semibold text-center px-4">
                                        Created with React.js to manage your expenses.
                                    </p>
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-150">
                                Balance Tracker
                            </h3>
                            <p className="text-base md:text-lg text-gray-600">
                                A web app for tracking your expenses and income.
                            </p>
                        </a>

                        <a 
                            href="https://kobeanderson51.github.io/RY-Paris/" 
                            className="bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 group" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <div className="relative w-full h-64">
                                <Image 
                                    src="/images/ryparis.jpg" 
                                    alt="RY Paris" 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="rounded-t-lg transition-transform duration-150"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-t-lg">
                                    <p className="text-white text-lg font-semibold text-center px-4">
                                        Created with Plain HTML, CSS, and JavaScript.
                                    </p>
                                </div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mt-4 mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-150">
                                RY Paris
                            </h3>
                            <p className="text-base md:text-lg text-gray-600">
                                A web page for a fictional food webpage.
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
