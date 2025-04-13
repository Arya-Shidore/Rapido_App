import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("token !!", token);

        axios.post(
            `${import.meta.env.VITE_BASE_URL}/user/logout`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            console.log("Logout successful:", response.data);
            localStorage.removeItem("token");
            navigate("/login");
        })
        .catch((error) => {
            console.error("Error during logout:", error);
            localStorage.removeItem("token");
            navigate("/login");
        });
    }, [navigate]);

    return <div>Logging out...</div>;
};

export default UserLogout;
