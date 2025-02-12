import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <div className="">
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

    )
}

export default Dashboard