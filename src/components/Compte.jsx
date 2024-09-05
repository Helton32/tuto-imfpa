import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Compte = () => {
  const logout = () => { 
    signOut(auth)
   }
  return (
    <div>
      Compte 
     <button onClick={logout}>Se Deconnecter</button>
    </div>
  )
}

export default Compte