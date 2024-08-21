import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                        <Image 
                            src="/images/IMG_1458.JPG" 
                            alt="Kobe Anderson" 
                            layout="fill" 
                            objectFit="cover" 
                            className="transition-opacity duration-300 ease-in-out hover:opacity-80"
                        />
                    </div>
                    <div className="max-w-xl">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Hi, I’m Kobe Anderson, a passionate web development student at Mountainland Technical College.
                            <br /><br />
                            My journey in web development is driven by a deep-seated enthusiasm for creating innovative, user-friendly websites and applications. I’m currently honing my skills in both front-end and back-end technologies.
                            <br /><br />
                            On the front end, I’m proficient in HTML, CSS, JavaScript, and modern frameworks like React.js. On the back end, I’ve worked with Node.js, Express.js, and databases such as MongoDB and PostgreSQL. Additionally, I excel in responsive design and styling, using tools like Tailwind CSS and SASS to ensure my projects are visually appealing and functional across all devices.
                            <br /><br />
                            Before embarking on my web development career, I spent 14 years in gymnastics, where I developed a strong sense of discipline, commitment, and perseverance. Winning the state championship in 2015 was a testament to the hard work and dedication I bring to every endeavor. These qualities have seamlessly translated into my approach to web development, where I tackle challenges with a methodical and solution-oriented mindset.
                            <br /><br />
                            I’m eager to apply my skills in a real-world setting, contributing to impactful projects and collaborating with a dynamic team. My goal is to leverage my technical expertise and drive for excellence to create exceptional web experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
