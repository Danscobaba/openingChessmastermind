import React from "react";

const HomeScreen = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-400 min-h-screen flex flex-col items-center text-white">
            {/* Header Section */}
            <header className="w-full p-6 flex justify-center items-center">
                <img
                    src={'/logo.png'}
                    alt="Opening Mastermind Logo"
                    className="object-contain w-1/2 sm:w-1/4 lg:w-1/6"
                />
            </header>

            {/* Main Section */}
            <section className="w-full flex flex-col items-center justify-center text-center py-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                    Master Chess Openings with Real-Time Feedback
                </h1>
                <p className="text-xl sm:text-2xl mb-6">
                    Study, practice, and improve your chess skills with dynamic lessons, real-time feedback, and practice mode.
                </p>
                <div className="flex justify-center space-x-6">
                    <button className="bg-indigo-600 px-8 py-3 rounded-lg text-xl font-semibold hover:bg-indigo-500 transition duration-300">
                        Start Learning
                    </button>
                    <button className="bg-gray-800 px-8 py-3 rounded-lg text-xl font-semibold text-white hover:bg-gray-700 transition duration-300">
                        Join Now
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="w-full bg-gray-800 py-16">
                <h2 className="text-3xl text-center text-indigo-400 font-semibold mb-8">
                    Features of Opening Mastermind
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {/* Feature 1 */}
                    <div className="bg-gray-700 p-6 rounded-lg text-gray-100 text-center">
                        <span className="text-5xl text-indigo-400 block mb-4">♖</span> {/* Example Chess Piece */}
                        <h3 className="text-xl font-semibold mb-2">Study Chess Openings</h3>
                        <p>
                            Learn and practice opening strategies with real-time move suggestions.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="bg-gray-700 p-6 rounded-lg text-gray-100 text-center">
                        <span className="text-5xl text-indigo-400 block mb-4">♘</span> {/* Example Chess Piece */}
                        <h3 className="text-xl font-semibold mb-2">Practice Mode</h3>
                        <p>
                            Challenge yourself by correcting the computer's mistakes in practice mode.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="bg-gray-700 p-6 rounded-lg text-gray-100 text-center">
                        <span className="text-5xl text-indigo-400 block mb-4">♔</span> {/* Example Chess Piece */}
                        <h3 className="text-xl font-semibold mb-2">Real-Time Feedback</h3>
                        <p>
                            Receive immediate feedback when you make mistakes, helping you improve.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-16 bg-gradient-to-r from-indigo-600 to-indigo-500">
                <h2 className="text-3xl text-center text-gray-100 font-semibold mb-8">
                    Frequently Asked Questions (FAQ)
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <h3 className="text-2xl text-gray-100 font-semibold mb-2">What is Opening Mastermind?</h3>
                        <p className="text-lg text-gray-300">
                            Opening Mastermind is an online chess platform that helps players study and practice chess openings with integrated AI feedback. The platform allows you to practice openings, explore different variations, and improve your game.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl text-gray-100 font-semibold mb-2">How does Practice Mode work?</h3>
                        <p className="text-lg text-gray-300">
                            In Practice Mode, the computer intentionally makes mistakes in the opening moves. Your task is to spot and punish those mistakes by playing the correct moves. If you make a mistake, the system will provide feedback and show you the correct move.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl text-gray-100 font-semibold mb-2">Do I need an account to use the platform?</h3>
                        <p className="text-lg text-gray-300">
                            You can access most of the content without an account, but to save your progress, join the leaderboard, and access premium features, you will need to sign up.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl text-gray-100 font-semibold mb-2">Is there a leaderboard?</h3>
                        <p className="text-lg text-gray-300">
                            Yes! We have a leaderboard that tracks top players based on their progress and practice. Compete with others and see how you rank in mastering chess openings.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leaderboard Section */}
            <section className="w-full py-16 bg-gray-800">
                <h2 className="text-3xl text-center text-indigo-400 font-semibold mb-8">
                    Top Players
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    <div className="bg-gray-700 p-6 rounded-lg text-gray-100 text-center">
                        <h3 className="text-2xl font-semibold mb-2">Player 1</h3>
                        <p className="text-xl">Rank #1 - 1500 points</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded-lg text-gray-100 text-center">
                        <h3 className="text-2xl font-semibold mb-2">Player 2</h3>
                        <p className="text-xl">Rank #2 - 1450 points</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded-lg text-gray-100 text-center">
                        <h3 className="text-2xl font-semibold mb-2">Player 3</h3>
                        <p className="text-xl">Rank #3 - 1400 points</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="w-full bg-gray-900 py-8 text-center text-gray-300">
                <p>&copy; 2024 Opening Mastermind. All rights reserved.</p>
                <div className="mt-4">
                    <a href="/about" className="text-gray-300 hover:text-indigo-400 mx-4">About</a>
                    <a href="/faq" className="text-gray-300 hover:text-indigo-400 mx-4">FAQ</a>
                    <a href="/contact" className="text-gray-300 hover:text-indigo-400 mx-4">Contact</a>
                </div>
            </footer>
        </div>
    );
};

export default HomeScreen;
