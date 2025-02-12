import React from 'react'
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <div className="min-h-screen bg-light-blue flex">
            {/* Sidebar */}
            <aside className="bg-black text-white w-64  hidden md:block">
                <h2 className="text-xl bg-white text-black underline p-5 font-bold mb-6">
                   <img src="/logo.png" alt="" />
                </h2>
                <nav>
                    <ul className="space-y-6">
                        <li>
                          <span>Dashboard</span>
                        </li>
                        <li>
                            <span>Openings Practice</span>
                            
                        </li>
                        <li>
                            <span> My Progress
                            </span>
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
                <div className="">
                    <Outlet/>
</div>
             
            </div>
        </div>
    );
}

export default UserLayout
