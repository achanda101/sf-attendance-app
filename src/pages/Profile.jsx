import Header from '../components/Header'
import { useAuth } from '../utils/AuthContext'

const Profile = () => {
    const { user } = useAuth()
    return (
        <div>
            <Header currentRoute="/profile" />
            <div className="container">
                <h1>{user.name}, this is your Profile.</h1>
            </div>
        </div>
    )
}

export default Profile
