import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const CaptainProtextRoute = ({children}) => {
    const token = localStorage.getItem("captainToken");
    const navigate = useNavigate();
    console.log("token !!", token);
    useEffect(() => {
        if (!token) {
            navigate("/captain-login");
        }
    }
    , [token, navigate]);
  return (
    <div>
      {children}
    </div>
  )
}

export default CaptainProtextRoute


// const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     console.log("token !!", token);
//     useEffect(() => {
//         if (!token) {
//             navigate("/login");
//         }
//     }
//     , [token, navigate]);
    
//   return (
//     <div>
//       {children}
//     </div>
//   )