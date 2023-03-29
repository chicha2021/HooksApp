import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const Login = () => {

  const { setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={() => setUser({ name: 'Eze', email: "Ezequiel@gmail.com", tel: "3492276144" })}>
        Loguear usuario
      </button>
    </>
  )
};
