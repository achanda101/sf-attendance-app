import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <Header currentRoute="/" />
            <h1>Welcome {user.name}!</h1>
            <p>This is your DASHBOARD</p>
            <Link to="/history">
                <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition-colors">
                    Attendance History
                </button>
            </Link>
        </div>
    )
}

export default Home
