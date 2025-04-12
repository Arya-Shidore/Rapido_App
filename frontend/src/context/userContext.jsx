import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createContext } from 'react';
import { useContext } from 'react';

export const UserDataContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const submitHandler = (e) => {
        console.log("submit 123");
        setUser({
            email: user.email,
            password: user.password
        })
        console.log(user);
        e.preventDefault();
        setUser("");
    }

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContextProvider;