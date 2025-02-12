import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-light-blue">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                <img onClick={()=>navigate("/")} src="/logo.png" alt="" />
                <h2 className="text-xl font-bold text-center text-black mb-6">
                    Create an <span className="text-pink">account</span>
                </h2>
                <form className="space-y-4">
                    {/* Full Name Field */}
                    <div>
                        <label className="block text-black font-medium mb-1" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your full name"
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-blue"
                        />
                    </div>
                    <div>
                        <label className="block text-black font-medium mb-1" htmlFor="name">
                            Username
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your username"
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-blue"
                        />
                    </div>
                    {/* Email Field */}
                    <div>
                        <label className="block text-black font-medium mb-1" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-blue"
                        />
                    </div>
                    {/* Password Field */}
                    <div>
                        <label className="block text-black font-medium mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Create a password"
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-blue"
                        />
                    </div>
                    {/* Confirm Password Field */}
                    <div>
                        <label className="block text-black font-medium mb-1" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Confirm your password"
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-blue"
                        />
                    </div>
                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-pink text-white font-bold py-2 rounded hover:bg-pink-dark transition"
                    >
                        Register
                    </button>
                </form>
                {/* Additional Links */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <a href="/auth/login" className="text-pink font-bold hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterScreen;
