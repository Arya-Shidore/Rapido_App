import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const captainLogout = () => {
  const navigate=useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("captainToken");
        console.log("token !!", token);
        axios.post(
            `${import.meta.env.VITE_BASE_URL}/captain/logout`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            console.log("Logout successful:", response.data);
            localStorage.removeItem("captainToken");
            navigate("/captain-login");
        })
        .catch((error) => {
            console.error("Error during logout:", error);
            localStorage.removeItem("captainToken");
            navigate("/captain-login");
        });
    }
    , [navigate]);
    return (
        <div>
            Logging out...
        </div>
    )

}
export default captainLogout