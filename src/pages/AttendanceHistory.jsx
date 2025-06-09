import React from 'react'
import Header from '../components/Header'
import { useAuth } from '../utils/AuthContext'

const History = () => {
    const { user } = useAuth()
    return (
        <>
            <Header currentRoute="/history" />
            <div className="container">
                <h1>{user.name}, this is your Attendance History.</h1>
            </div>
        </>
    )
}

export default History
