import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const logoutClick = () => {
        navigate('/login')
    }
    return (
        <header className="bg-gray-100 py-4 rounded-lg">
            <div className="container mx-auto flex items-center justify-between">

                {/* Navigation Links */}
                <nav className="flex w-full justify-between items-center">
                    <Link
                        to="/profile"
                        className="px-3 py-1 border-3 border-green-600 rounded-full text-sm flex items-center"
                    >
                        Profile
                    </Link>
                    <button
                        onClick={logoutClick}
                        className="px-3 py-1 border-3 border-green-600 rounded-full text-sm flex items-center"
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;