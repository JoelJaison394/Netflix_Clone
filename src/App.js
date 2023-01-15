import React, { useEffect } from 'react';
import './App.css';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase";
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route, Navigate , Switch } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

import ProfileScreen from './screens/ProfileScreen';


function App() {

  
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if((!currentUser) ){
  //     navigate("/")
  //   }
  // })




  
  return (
    <div className="app">
      {/* <HomeScreen/> */}
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<LoginScreen/>} />
          <Route exact path="/home" element={<HomeScreen />} />
          <Route exact path="/profile" element={<ProfileScreen /> } />

          {/* <Route exact path="/signup" element = {<Signup/>}  />
            <Route exact path="/home" element = {<Home/>}  />
            <Route exact path="/verify" element = {<Verification/>}  /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
