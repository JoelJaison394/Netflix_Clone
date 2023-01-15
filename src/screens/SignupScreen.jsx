
import { createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useRef } from 'react'
import { auth } from '../firebase';

import './SignupScreen.css'

function SignupScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();  
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
        console.log(authUser)
    }).catch(error => {
      alert(error);
    })
    
    
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,    emailRef.current.value,
      passwordRef.current.value).then((authUser) => { 
        navigate("/home")
      })
      .catch((error) => {
        alert(error.message)
      })

  }
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' required />
        <input ref={passwordRef} type="password" placeholder='Password' required />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4><span className='signupScreen__gray'>New to Netflix? </span><span className='signupScreen__link' onClick={register}>Sign Up now.</span> </h4>
      </form>
    </div>
  )
}

export default SignupScreen