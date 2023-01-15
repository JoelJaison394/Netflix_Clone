import React, { useState , useEffect , useContext  } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import NetflixLogo from '../assests/netflix-logo.png'
import "./LoginScreen.css"
import SignupScreen from './SignupScreen'

function LoginScreen() {

  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);


  const [signin , setSignin] = useState(false)
  useEffect(() => {
    if((currentUser) && navigate ){
      navigate("/home")
    }else{
      navigate("/")
    }
  })
  return (
    <div className='loginScreen'>
      <div className="loginscreen__background">
        <img className='loginScreen_logo' src={NetflixLogo} alt="netflixcoverimage"  />
        <button className='loginScreen__Btn' 
        onClick={() => {setSignin(true)}}>Sign In</button>
        <div className="loginScreen__gradient"></div>
      </div>
      <div className="loginScreen__body">
        {signin ? (<SignupScreen/>) : (
          <>
          <h1>Unlimited films , TV programmes and more.</h1>
          <h2>watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className="loginScreen__Input">
              <form >
                <input type="email" placeholder='Email Address' id="" />
                <button onClick={() =>  setSignin(true)}className='loginScreen__getStarted'>GET STARTED</button>
              </form>
           </div>
        </>
        )}
        
      </div>


    </div>
  )
}

export default LoginScreen