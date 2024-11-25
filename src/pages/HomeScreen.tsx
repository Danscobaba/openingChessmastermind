import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Chessboard } from "react-chessboard";
import Header from "./layouts/Header";

const HomeScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-light-blue text-black flex flex-col">
            {/* Header Section */}

            <Header />
            {/* Hero Section */}
            <section className="flex-1 container mx-auto flex flex-col lg:flex-row items-center justify-between p-8">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-4xl font-bold mb-4">
                        Master Chess Openings with <span className="text-pink">AI</span>
                    </h2>
                    <p className="text-lg mb-6">
                        Learn, practice, and perfect your chess openings with our integrated Stockfish engine.
                        Whether you're a beginner or a pro, Opening Mastermind is your ultimate guide to mastering chess.
                    </p>
                    <Link
                        to="/auth/register"
                        className="px-6 py-3 bg-pink text-white rounded font-bold text-lg hover:bg-pink-dark transition"
                    >
                        Get Started
                    </Link>
                </div>
                <div className="lg:w-1/2">
                    <Chessboard boardWidth={400} />
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                            <div className="bg-light-blue p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-bold mb-2">Learn Openings</h4>
                                <p>Follow guided steps to master popular chess openings.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                            <div className="bg-light-blue p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-bold mb-2">Practice Mode</h4>
                                <p>Play against AI that makes intentional mistakes for learning.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                            <div className="bg-light-blue p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-bold mb-2">Progress Tracking</h4>
                                <p>Track your improvement and climb the leaderboard.</p>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                            <div className="bg-light-blue p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-bold mb-2">Integrated Stockfish</h4>
                                <p>Learn from the world's strongest chess engine.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQs Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Frequently Asked Questions</h3>
                    <div className="flex flex-col lg:flex-row justify-center">
                        <div className="lg:w-1/2 p-4">
                            <div className="bg-light-blue p-6 rounded-lg shadow-md mb-4">
                                <h4 className="text-xl font-bold mb-2">What is Opening<span className="text-pink">&#9815;</span>Mastermind?</h4>
                                <p>
                                    Opening Mastermind is a chess training platform designed to help players master chess openings using an integrated Stockfish engine.
                                </p>
                            </div>
                            <div className="bg-light-blue p-6 rounded-lg shadow-md mb-4">
                                <h4 className="text-xl font-bold mb-2">What is Practice Mode?</h4>
                                <p>
                                    In Practice Mode, the computer intentionally makes mistakes, and you must find the best moves to punish those mistakes. It's an interactive way to improve your skills.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-4">
                            <div className="bg-light-blue p-6 rounded-lg shadow-md mb-4">
                                <h4 className="text-xl font-bold mb-2">Is my progress tracked?</h4>
                                <p>
                                    Yes! Your progress is saved in your account, allowing you to see your improvement over time and compete on the leaderboard.
                                </p>
                            </div>
                            <div className="bg-light-blue p-6 rounded-lg shadow-md mb-4">
                                <h4 className="text-xl font-bold mb-2">Can I select specific openings?</h4>
                                <p>
                                    Absolutely. You can preload the board with specific opening positions to practice and learn them in detail.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials Section */}
            <section className="bg-light-blue py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">What Our Users Say</h3>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="italic">"This platform has transformed my chess game. The practice mode is brilliant!"</p>
                                <h5 className="mt-4 font-bold">- Alex G.</h5>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <p className="italic">"Learning chess openings has never been this easy. Highly recommend it!"</p>
                                <h5 className="mt-4 font-bold">- Jamie L.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leaderboard Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Leaderboard</h3>
                    <p className="mb-4">See how you rank against other chess enthusiasts!</p>
                    <table className="w-full bg-light-blue rounded-lg shadow-md">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 text-left">Rank</th>
                                <th className="py-2 px-4 text-left">Player</th>
                                <th className="py-2 px-4 text-left">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">1</td>
                                <td className="py-2 px-4">Alex G.</td>
                                <td className="py-2 px-4">1200</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">2</td>
                                <td className="py-2 px-4">Jamie L.</td>
                                <td className="py-2 px-4">1150</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-pink text-white py-12">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Ready to Master Chess?</h3>
                    <Link
                        to="/auth/register"
                        className="px-6 py-3 bg-black text-white rounded font-bold text-lg hover:bg-gray-800 transition"
                    >
                        Start Learning Now
                    </Link>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-black text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Opening<span className="text-pink">&#9815;</span>Mastermind. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomeScreen;
