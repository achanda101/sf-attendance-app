import Header from '../components/Header'
import { useAuth } from '../utils/AuthContext'

const Account = () => {
    const { user } = useAuth()
    return (

        <div>
            <Header currentRoute="/account" />
            <div className="px-3">
                <h1>{user.name}, this is your ACCOUNT Details.</h1>
                <form className="account-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" defaultValue={user.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" defaultValue={user.email} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Reset Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter new password" />
                    </div>
                    <button type="submit">Update Account</button>
                </form>
            </div>
        </div>

    )
}

export default Account
