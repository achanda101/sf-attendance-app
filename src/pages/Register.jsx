import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useAuth } from '../utils/AuthContext'
import DOMPurify from 'dompurify'
import { toast } from 'react-toastify'

const Register = () => {
    const navigate = useNavigate()
    const { user, registerUser, loginUser } = useAuth()
    const registerForm = useRef(null)

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = DOMPurify.sanitize(registerForm.current.name.value)
        const email = DOMPurify.sanitize(registerForm.current.email.value)
        const password1 = DOMPurify.sanitize(registerForm.current.password1.value)
        const password2 = DOMPurify.sanitize(registerForm.current.password2.value)

        if (password1 !== password2) {
            toast.error('Passwords do not match', { position: "bottom-right" })
            return
        }

        const userInfo = {
            name,
            email,
            password1,
            password2
        }
        registerUser(userInfo)
    }

    const loginClick = () => {
        loginUser()
        navigate('/login');
    };

    return (
        <div className="bg-gray-50 flex justify-center px-4 py-6">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-10 min-h-fit pt-10 pb-7">
                {/* Header */}
                <div className="flex items-center justify-center mb-4">
                    <img src="/sf-logo.png" alt="SF Logo" className="h-16 inline" />
                    <span className="text-xl font-medium text-gray-900 ml-4">
                        Solidarity Foundation<br />Attendance Tracker
                    </span>
                </div>
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Register
                </h1>

                {/* Form */}
                <form className="space-y-6" ref={registerForm} onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                    </div>

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
                            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password1" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password1"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                        <p className="text-green-600 text-xs mt-1">
                            Password must be at least 8 characters (no white spaces)
                        </p>
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <label htmlFor="password2" className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="password2"
                            placeholder="Re-enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Register Button */}
                    <input
                        type="submit"
                        value="Register"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200"
                    />
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center">
                    <button
                        onClick={loginClick}
                        className="text-green-600 hover:text-green-700 text-sm font-medium underline-offset-2 hover:underline"
                    >
                        Login using an existing account.
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register
