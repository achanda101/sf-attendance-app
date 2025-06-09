import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home'
import Account from './pages/Account'
import Login from './pages/Login'
import Register from './pages/Register'
import History from './pages/AttendanceHistory';
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="container mx-auto mt-4 max-w-md">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/account" element={<Account />} />
              <Route path="/history" element={<History />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router >
  )
}

export default App
