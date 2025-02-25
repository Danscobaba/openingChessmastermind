import React, { useState } from 'react';
import { Book, Trophy, ChevronRight, Brain, Search, Menu, Play, BookOpen, Target, Star, Users, MessageSquare } from 'lucide-react';

const HomeScreen = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Navigation */}
            <nav className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl md:text-2xl font-bold text-white">OPENING</span>
                            {/* Chess Piece would be an SVG here */}
                            <span className="text-xl md:text-2xl font-bold text-white">MASTERMIND</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Openings</a>
                            <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Training</a>
                            <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Community</a>
                            <a href="#" className="text-gray-400 hover:text-white font-medium transition-colors">Pricing</a>
                            <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                                Sign In
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-400 hover:text-white"
                            >
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-gray-800 border-b border-gray-700">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 rounded-md">
                                Openings
                            </a>
                            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 rounded-md">
                                Training
                            </a>
                            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 rounded-md">
                                Community
                            </a>
                            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 rounded-md">
                                Pricing
                            </a>
                            <a href="#" className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md">
                                Sign In
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 relative">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Master Chess Openings
                            <span className="block mt-2 text-gray-400">Like Never Before</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto px-4">
                            Advanced opening repertoire training with personalized analysis and interactive learning
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                            <button className="bg-indigo-600 px-8 py-3 rounded-lg text-xl font-semibold hover:bg-indigo-500 transition duration-300">
                                Start Learning
                            </button>
                            <button className="bg-gray-800 px-8 py-3 rounded-lg text-xl font-semibold text-white hover:bg-gray-700 transition duration-300">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Openings - Now responsive */}
            <div className="bg-gray-800 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">
                        Popular Opening Lines
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {['Sicilian Defense', 'Queen\'s Gambit', 'Ruy Lopez', 'King\'s Indian'].map((opening) => (
                            <div key={opening} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
                                <h3 className="text-xl font-semibold text-white mb-2">{opening}</h3>
                                <p className="text-gray-400 mb-4">Master the key variations and strategies</p>
                                <div className="flex items-center text-gray-500">
                                    <Star className="w-4 h-4 mr-1" />
                                    <span>4.9</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Openings Section */}
            <div className="bg-gray-800 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Popular Opening Lines</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {['Sicilian Defense', 'Queen\'s Gambit', 'Ruy Lopez', 'King\'s Indian'].map((opening) => (
                            <div key={opening} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer">
                                <h3 className="text-xl font-semibold text-white mb-2">{opening}</h3>
                                <p className="text-gray-400 mb-4">Master the key variations and strategies</p>
                                <div className="flex items-center text-gray-500">
                                    <Star className="w-4 h-4 mr-1" />
                                    <span>4.9</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose OpeningMastermind</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Interactive Training */}
                        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-white transition-all duration-300">
                            <div className="mb-4">
                                <Target className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">Interactive Training</h3>
                            <p className="text-gray-400">
                                Practice against AI that adapts to your skill level and learning progress
                            </p>
                        </div>

                        {/* GM Analysis */}
                        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-white transition-all duration-300">
                            <div className="mb-4">
                                <Brain className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">GM Analysis</h3>
                            <p className="text-gray-400">
                                Access detailed annotations and insights from top grandmasters
                            </p>
                        </div>

                        {/* Progress Tracking */}
                        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-white transition-all duration-300">
                            <div className="mb-4">
                                <BookOpen className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">Progress Tracking</h3>
                            <p className="text-gray-400">
                                Track your improvement with detailed statistics and performance metrics
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community Section */}
            <div className="bg-gray-800 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Join Our Community</h2>
                            <p className="text-gray-400 mb-8">
                                Connect with fellow chess enthusiasts, share your insights, and participate in discussions about opening theory and strategies.
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <Users className="h-6 w-6 text-white mb-2" />
                                    <div className="text-2xl font-bold text-white">10K+</div>
                                    <div className="text-gray-400">Active Members</div>
                                </div>
                                <div className="bg-gray-900 p-4 rounded-lg">
                                    <MessageSquare className="h-6 w-6 text-white mb-2" />
                                    <div className="text-2xl font-bold text-white">50K+</div>
                                    <div className="text-gray-400">Daily Messages</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-4">Latest Discussions</h3>
                            {['Sicilian Najdorf Variations', 'Modern Defense Theory', 'Queen\'s Gambit Trends'].map((topic) => (
                                <div key={topic} className="py-4 border-b border-gray-800 last:border-0">
                                    <h4 className="text-white font-medium mb-1">{topic}</h4>
                                    <p className="text-gray-400 text-sm">Latest activity 2h ago</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-white font-bold mb-4">OpeningMastermind</h3>
                            <p className="text-gray-400 text-sm">
                                Your ultimate chess opening training platform
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-4">Features</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Opening Database</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Training Mode</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Analysis Board</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Statistics</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8">
                        <p className="text-center text-gray-400">
                            © 2024 OpeningMastermind. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomeScreen;