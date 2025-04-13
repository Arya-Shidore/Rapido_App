
import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectRoute from './pages/CaptainProtextRoute'
import { UserDataContext } from './context/userContext'
import BookRide from './pages/BookRide'
import UserProtectRoute from './pages/UserProtectRoute'
import UserLogout from './pages/UserLogout'
import CaptainStartNewRide from './pages/CaptainStartNewRide'

const App = () => {
  const ans=useContext(UserDataContext)
  console.log("ans",ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/home" element={
          <UserProtectRoute>
            <Home />
          </UserProtectRoute>
        } />
        <Route path="/logout" element={
          <UserProtectRoute>
            <UserLogout />
          </UserProtectRoute>
        } />
        <Route path="/captain-home" element={
          <CaptainProtectRoute>
            <CaptainHome />
          </CaptainProtectRoute>
        } />
        <Route path="/captain-logout" element={
          <CaptainProtectRoute>
            <UserLogout />
          </CaptainProtectRoute>
        } />
        <Route path="/captain-start-new-ride" element={
          <CaptainProtectRoute>
            <CaptainStartNewRide />
          </CaptainProtectRoute>
        } />
        <Route path="/book-ride" element={<BookRide />} />
      </Routes>
    </div>
  )
}

export default App
