import React, {  useState } from 'react';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './login.scss';
import Dosthi from '../../assets/dosthi.svg';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from 'axios';
import React, { useState  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import Dosthi from '../images/2.png';

function LoginPage() {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    
    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    

  

    return (
        <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form loginForm">
                        <h2 className="title">LOGIN</h2>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
                            <input className="LoginInput" type="text" placeholder="Username or E-Mail" required />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
                            <input className="LoginInput" type='password' placeholder="Password" required />
                        </div>
                        <button className="btn">LOGIN</button>
                    </form>
                    <form action="#" className="sign-up-form loginForm">
                        <h2 className="title">REGISTER</h2>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
                            <input className="LoginInput" type="text" placeholder="Username" required  />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
                            <input className="LoginInput"  type="email" placeholder="Email" required  />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} className="my-auto mx-auto"/>
                            <input
                                className="LoginInput"
                                type='password'
                                placeholder="Password"
                                id="psw"
                                name="psw"
                                required
                               
                            />
                        </div>
                        
                        <button className="btn" type="submit">REGISTER</button>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>
                            Create an account and start exploring the platform.
                        </p>
                        <button className="btn transparent" onClick={handleSignUpClick}>
                            REGISTER
                        </button>
                    </div>
                    <img src={Dosthi} className="image" alt="login" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us?</h3>
                        <p>
                            If you already have an account, please log in.
                        </p>
                        <button className="btn transparent" onClick={handleSignInClick}>
                            LOGIN
                        </button>
                    </div>
                    <img src={Dosthi} className="image" alt="login" />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;