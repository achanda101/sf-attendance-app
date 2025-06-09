import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Header = () => {
    const { logoutUser } = useAuth()
    const navigate = useNavigate();

    const logoutClick = () => {
        logoutUser()
        navigate('/login');
    };

    return (
        <header className="bg-gray-100 py-4 rounded-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* Navigation Links */}
                <nav className="flex items-center justify-between w-full">
                    {/* Home and Profile Links */}
                    <div className="flex items-center space-x-6">
                        {/* Home Link */}
                        <a
                            href="/"
                            className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-200 transition-colors"
                            aria-label="Home"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-500 stroke-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11 2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Logout Button */}
                    <button
                        onClick={logoutClick}
                        className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-200 transition-colors"
                        aria-label="Logout"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-500 stroke-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;