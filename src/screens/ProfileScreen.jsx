import React , {useContext, useEffect , }from 'react';
import { Link, useNavigate } from "react-router-dom";
import Nav from '../components/Nav'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from "../context/authContext";
import "./ProfileScreen.css"

function ProfileScreen() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!currentUser){
            navigate("/");
        }
    },[currentUser])






  return (
    <div className='profileScreen'>
        <Nav/>
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img src="data:image/jpeg;base64,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" alt="avatar" />
                <div className="profileScreen__details">
                    <h2>{currentUser.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans (Current plan: premium )</h3>
                        <div className="plan__details">
                            <h4>Renewed date 15/1/2023</h4>
                            <div className="plan_1 plan">
                                <div className="name_info">
                                    <h5>Netflix Standard</h5>
                                    <p>1080p</p>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className="plan_2 plan">
                                <div className="name_info">
                                    <h5>Netflix Basic</h5>
                                    <p>480p</p>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className="plan_3 plan">
                                <div className="name_info">
                                    <h5>Netflix Premium</h5>
                                    <p>4k+HDR</p>
                                </div>
                                <button>Current Package</button>
                            </div>
                        </div>
                        <button className='profileScreen__signout' onClick={()=> {
                            signOut(auth);
                            navigate("/");
                        }}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen