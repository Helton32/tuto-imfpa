import { signInWithEmailAndPassword ,signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth , googleProvider } from '../firebase'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const undelChangeEmail = (event) => { 
        console.log(event.target.value)
        setEmail(event.target.value)
     };
     const undelChangePassword = (event) => { 
        console.log(event.target.value)
        setPassword(event.target.value)
     };

     const connexion = async() => { 
        console.log("email:", email," , ", "mdp:", password)
        await signInWithEmailAndPassword(auth,email,password)
      }
     const signInWithGoogle = async() => { 
        console.log("email:", email," , ", "mdp:", password)
        await signInWithPopup(auth, googleProvider )
      }


    
   
  
  return (
    <div>
         <h1>Login</h1> <br/>
    Email : <input type="text" name='email' placeholder='Entrez votre email' onChange={undelChangeEmail} /><br />
    Mot de Passe : <input type="text" name='password' onChange={undelChangePassword} /><br />
    <button onClick={connexion}>Se Connecter</button>

    <button onClick={signInWithGoogle}>Sign in with google</button>

    

    </div>
  )
}

export default Login