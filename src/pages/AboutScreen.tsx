import React from "react";

const AboutScreen = () => {
    return (
        <div className="min-h-screen bg-light-blue text-black">
            {/* Header Section */}
            <header className="bg-black text-white p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-3xl font-bold">
                        Opening<span className="text-pink">&#9815;</span>Mastermind
                    </h1>
                </div>
            </header>

            {/* About Section */}
            <section className="container mx-auto py-12 px-6">
                <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mission */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-lg">
                            At Opening Mastermind, our goal is to help chess enthusiasts of all levels improve their understanding and mastery of chess openings. By integrating the powerful Stockfish engine, we provide an interactive platform where users can learn, practice, and perfect their skills.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-lg">
                            We envision a world where every chess player has the tools to achieve their full potential. Whether you’re a beginner or a seasoned professional, Opening Mastermind aims to be your trusted partner in the journey of chess mastery.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">Meet Our Team</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Team Member 1 */}
                        <div className="shadow-lg p-6 rounded-lg">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member 1"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h4 className="text-xl font-bold">Jane Doe</h4>
                            <p className="text-pink">Founder & CEO</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="shadow-lg p-6 rounded-lg">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member 2"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h4 className="text-xl font-bold">John Smith</h4>
                            <p className="text-pink">Lead Developer</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="shadow-lg p-6 rounded-lg">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member 3"
                                className="w-32 h-32 mx-auto rounded-full mb-4"
                            />
                            <h4 className="text-xl font-bold">Emily Johnson</h4>
                            <p className="text-pink">Chess Strategist</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stockfish Integration Section */}
            <section className="container mx-auto py-12 px-6">
                <h3 className="text-3xl font-bold text-center mb-8">Powered by Stockfish</h3>
                <p className="text-lg text-center">
                    Opening Mastermind is built around Stockfish, the world’s most powerful chess engine. This integration allows us to provide accurate move recommendations, simulate competitive play, and guide users through chess openings with precision.
                </p>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-pink text-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Join Our Community</h3>
                    <p className="text-lg mb-6">
                        Become part of a growing community of chess enthusiasts and elevate your game to the next level.
                    </p>
                    <a
                        href="/register"
                        className="px-6 py-3 bg-black text-white rounded font-bold text-lg hover:bg-gray-800 transition"
                    >
                        Get Started Now
                    </a>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-black text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Opening Mastermind. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default AboutScreen;
