import React, { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//     user: "ezequielh.rafaela@gmail.com",
//     name: "Ezequiel",
//     lastname: "Hernandez"
// };

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{  user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
