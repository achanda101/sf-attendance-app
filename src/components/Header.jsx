import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Header = ({ currentRoute }) => {
    const { logoutUser } = useAuth()
    const navigate = useNavigate();

    const logoutClick = () => {
        logoutUser()
        navigate('/login');
    };

    let pageTitle = "";
    switch (currentRoute) {
        case "/":
            pageTitle = "Home";
            break;
        case "/account":
            pageTitle = "Account";
            break;
        case "/history":
            pageTitle = "Attendance History";
            break;
        default:
            pageTitle = "";
            break;
    }

    return (
        <header className="bg-white border-2 border-gray-100 rounded-lg p-2 mx-0 my-2">
            <div className="flex items-center justify-between">
                {/* Home Icon - Left */}
                <Link to="/" className="flex-shrink-0">
                    <div className="w-8 h-8 border-2 border-gray-100 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </div>
                </Link>

                {/* Page Title - Center */}
                <div className="flex-1 flex justify-center">
                    <span className="text-lg font-semibold text-gray-500">{pageTitle}</span>
                </div>

                {/* Logout Icon - Right */}
                <button onClick={logoutClick} className="flex-shrink-0" aria-label="Logout">
                    <div className="w-8 h-8 border-2 border-gray-100 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>
                    </div>
                </button>
            </div>

            {/* Status Section - Center */}
            <div className="flex items-center mt-2">
                <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-1.5">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                    <span className="text-s font-medium text-gray-700">STATUS:</span>
                                    <span className="text-s font-bold text-red-500">CHECKED OUT</span>
                                </div>
                                <div className="text-xs text-gray-600 space-y-0">
                                    <div>Last Check-In: June 6 2025 10am</div>
                                    <div>Last Check-Out: June 6 2025 7pm</div>
                                </div>
                            </div>

                            {/* Check-In Button */}
                            <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-medium transition-colors">
                                Check-In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;