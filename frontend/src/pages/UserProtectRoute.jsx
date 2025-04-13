import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const UserProtectRoute = ({children}) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log("token !!", token);
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }
    , [token, navigate]);
    
  return (
    <div>
      {children}
    </div>
  )
}

export default UserProtectRoute
