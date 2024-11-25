import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-transparent text-white p-6">
            <div className="container mx-auto flex gap-3 justify-between items-center">
                <div onClick={()=>navigate("/")} className="w-auto cursor-pointer h-auto md:max-w-[30%]">
                    <img src="/logo.png" className="h-full w-full" alt="" />
                </div>
                {/* <h1 className="text-3xl font-bold">
                        Opening<span className="text-pink"> Mastermind</span>
                    </h1> */}
                <nav>
                    <ul className="flex gap-x-4 items-center">
                        <li onClick={() => navigate("/about")} className="text-pink hover:underline cursor-pointer font-bold text-xl">About</li>
                        <Link
                            to="/auth/login"
                            className="px-4 py-2 bg-pink text-white rounded hover:bg-pink-dark transition"
                        >
                            Login
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header