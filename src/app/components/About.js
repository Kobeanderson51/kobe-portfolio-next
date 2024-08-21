import Image from 'next/image';

export default function About() {
    return (
        <div>
            <section id="about" className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg">
                            <Image 
                                src="/images/IMG_1458.JPG" 
                                alt="Kobe Anderson" 
                                layout="fill" 
                                objectFit="cover" 
                            />
                        </div>
                        <div className="max-w-md">
                            <p className="text-lg md:text-xl text-gray-700">
                                I’m a web developer with a passion for creating beautiful and functional websites. I’m currently pursuing a degree in web development at Mountainland Technical College. I have experience with HTML, CSS, JavaScript, React, and Node.js. I’m always looking for new opportunities to learn and grow as a developer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
