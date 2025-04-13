import React from 'react'
import { createContext, useState } from 'react'

export const captainDataContext = createContext();
const CaptainContextProvider = ({children}) => {
  const [captain, setCaptain] = useState({
          email: "",
          password: ""
      });
  
  
      return (
          <captainDataContext.Provider value={{ captain, setCaptain }}>
              {children}
          </captainDataContext.Provider>
    )
}

export default CaptainContextProvider
