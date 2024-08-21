import React from 'react';

export default function Hero() {
    return (
        <div>
            <section 
                className="text-white text-center py-32 md:py-40 bg-cover bg-start bg-no-repeat" 
                style={{ backgroundImage: `url('/images/bg-image.jpg')` }}
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Hello, Im Kobe Anderson
                    </h2>
                    <p className="text-base md:text-xl mb-6">
                        Web Developer | Currently Pursuing Web Development at Mountainland Technical College
                    </p>
                    <a 
                        href="https://www.linkedin.com/in/kobe-anderson/" 
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>
        </div>
    );
}
