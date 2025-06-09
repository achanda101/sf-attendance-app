import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <Header currentRoute="/" />
            <div className="px-3">
                <h1>Welcome {user.name}!</h1>
                <p>This is your DASHBOARD</p>
                <div
                    className="flex gap-4 mt-4 justify-center border border-gray-200 p-1 w-fit mx-auto"
                >
                    <Link to="/account">
                        <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition-colors">
                            Account Details
                        </button>
                    </Link>
                    <Link to="/history">
                        <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition-colors">
                            Attendance History
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
