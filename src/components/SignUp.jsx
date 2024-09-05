import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';



const SignUp = () => {

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

     const inscription = async() => { 
        console.log("email:", email," , ", "mdp:", password)
        await createUserWithEmailAndPassword(auth,email,password)
      }
     
     
 
    return (
    <div>
       
         <h1>Sign up</h1> <br/>
    <p>Email : <input type="text" name='email' onChange={undelChangeEmail} placeholder='Entrez votre email' /></p>
    <p>Mot De Passe : <input type="text" name='password' onChange={undelChangePassword} placeholder='Entrez votre mot de passe' /></p>
     <p><button onClick={inscription}> S'inscrire </button></p>


 
    </div>
  )
}

export default SignUp