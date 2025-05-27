import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                {/* Header */}
                <div className="flex items-center justify-center mb-4">
                    <img src="/sf-logo.png" alt="SF Logo" className="h-16 inline" />
                    <span className="text-2xl font-bold text-gray-900 ml-4">
                        SF Attendance App
                    </span>
                </div>
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Login
                </h1>

                {/* Form */}
                <form className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                    <button
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline"
                    >
                        Don't have an account? Sign up
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Login
