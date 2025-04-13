import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContextProvider;
