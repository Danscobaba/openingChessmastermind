import React from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-light-blue">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
                <img onClick={() => navigate("/")} src="/logo.png" alt="" />

                <h2 className="text-xl font-bold text-center text-black mb-6">
                    Welcome Back, Please <span className="text-pink">Login</span>
                </h2>
                <form className="space-y-4">
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
                            placeholder="Enter your password"
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-blue"
                        />
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-pink text-white font-bold py-2 rounded hover:bg-pink-dark transition"
                    >
                        Login
                    </button>
                </form>
                {/* Additional Links */}
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="/auth/register" className="text-pink font-bold hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
