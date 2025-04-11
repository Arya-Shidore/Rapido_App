
import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import { UserDataContext } from './context/userContext'

const App = () => {
  const ans=useContext(UserDataContext)
  console.log("ans",ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  )
}

export default App
