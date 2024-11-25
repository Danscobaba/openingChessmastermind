import React, { useState } from "react";

const PasswordResetScreen = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleReset = (e) => {
        e.preventDefault();
        // Mock action for password reset (replace with your API logic)
        setMessage(
            "If an account with this email exists, a password reset link has been sent to your email."
        );
    };

    return (
        <div className="min-h-screen bg-light-blue flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center mb-6">
                    Reset Your Password
                </h2>
                <p className="text-center text-gray-600 mb-4">
                    Enter your email address to receive a password reset link.
                </p>

                {/* Form */}
                <form onSubmit={handleReset}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-transparent"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
                    >
                        Send Reset Link
                    </button>
                </form>

                {/* Success Message */}
                {message && (
                    <p className="text-green-600 mt-4 text-center">{message}</p>
                )}

                {/* Footer Links */}
                <div className="mt-6 text-center">
                    <a
                        href="/login"
                        className="text-pink hover:underline transition"
                    >
                        Back to Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PasswordResetScreen;
