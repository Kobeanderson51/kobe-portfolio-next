export default function Skills() {
    return (
        <div>
            <section id="skills" className="py-20 bg-gray-50">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        {['HTML', 'CSS', 'Tailwind', 'Sass', 'JavaScript', 'React', 'Node.js', 'PostgreSQL'].map((skill) => (
                            <div
                                key={skill}
                                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
