import React from 'react'

const UserLayout = () => {
    return (
        <div className="min-h-screen bg-light-blue flex">
            {/* Sidebar */}
            <aside className="bg-black text-white w-64 p-6 hidden md:block">
                <h2 className="text-2xl font-bold mb-6">
                    Opening<span className="text-pink"> Mastermind</span>
                </h2>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <a href="/dashboard" className="hover:text-pink transition">
                                🏠 Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/openings" className="hover:text-pink transition">
                                ♟ Openings Practice
                            </a>
                        </li>
                        <li>
                            <a href="/progress" className="hover:text-pink transition">
                                📈 My Progress
                            </a>
                        </li>
                        <li>
                            <a href="/leaderboard" className="hover:text-pink transition">
                                🏆 Leaderboard
                            </a>
                        </li>
                        <li>
                            <a href="/settings" className="hover:text-pink transition">
                                ⚙ Settings
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <header className="bg-white shadow p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div>
                        <a
                            href="/profile"
                            className="text-black hover:text-pink font-semibold transition"
                        >
                            👤 Profile
                        </a>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-6">
                    <section className="mb-6">
                        <h2 className="text-xl font-bold mb-4">Welcome Back, [User Name]!</h2>
                        <p className="text-gray-600">
                            Continue your journey to mastering chess openings.
                        </p>
                    </section>

                    {/* Grid Content */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Opening Practice */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-bold mb-4">Opening Practice</h3>
                            <p className="text-gray-600">
                                Practice openings with interactive guidance and challenges.
                            </p>
                            <a
                                href="/openings"
                                className="text-pink hover:underline transition mt-4 inline-block"
                            >
                                Start Practicing →
                            </a>
                        </div>

                        {/* My Progress */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-bold mb-4">My Progress</h3>
                            <p className="text-gray-600">
                                Track your improvement and milestones.
                            </p>
                            <a
                                href="/progress"
                                className="text-pink hover:underline transition mt-4 inline-block"
                            >
                                View Progress →
                            </a>
                        </div>

                        {/* Leaderboard */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-bold mb-4">Leaderboard</h3>
                            <p className="text-gray-600">
                                See where you rank among other players.
                            </p>
                            <a
                                href="/leaderboard"
                                className="text-pink hover:underline transition mt-4 inline-block"
                            >
                                View Leaderboard →
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default UserLayout
