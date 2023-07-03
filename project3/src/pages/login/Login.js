import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Dosthi  from '../../assets/dosthi.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
// import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Login = () => {


  const [inputsLog, setInputsLog]  =useState({
    username : "",
    password : ""
  })

  const [errLog,setErrLog] = useState(null)

  const navigate = useNavigate()

  const handleChangeLog = (e) =>{
    e.preventDefault()
    setInputsLog(prev =>({...prev,[e.target.name]:e.target.value}))
  }

  const {login} = useContext(AuthContext)


  const handleLogin = async e => {
    e.preventDefault()
    try{
      await login(inputsLog);
      navigate("/")

    }catch (err){
      setErrLog(err.response.data)
      console.log(err);
    }
  };

  console.log(inputsLog)


  //register 

  const [inputsReg, setInputsReg] = useState({
    username: "",
    password: "",
    email: "",
    // name: "",
  });
  const [errReg, setErrReg] = useState(null);
  const [mess, setmess] = useState(null);

  const handleChangeReg = (e) => {
    setInputsReg((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReg = async (e) => {
    // e.preventDefault(); // Prevent the default form submission


    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputsReg
      );
      console.log(res.data);
      setmess(res.data);
    } catch (err) {
      setErrReg(err.response.data);
      console.log(err.response.data);
    }
    setTimeout(() => {
      setmess(null);
    }, 1000); 

    setTimeout(() => {
      setInputsReg({
        username: "",
        password: "",
        email: "",
        // name: "",
      });
    },1500); 
  };

  // page style

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
                    <form  className="sign-in-form loginForm">
                        <h2 className="title">LOGIN</h2>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
                            <input className="LoginInput" type="text" placeholder="Username" name="username" onChange={handleChangeLog}  required />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} className="my-auto mx-auto" />
                            <input className="LoginInput" type='password' placeholder="Password" name="password" onChange={handleChangeLog}  required />
                        </div>
                        {errLog && errLog}
                        <button className="btn" onClick={handleLogin}>LOGIN</button>
                    </form>

                    <form  className="sign-up-form loginForm">
                        <h2 className="title">REGISTER</h2>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} className="my-auto mx-auto" />
                            <input className="LoginInput" type="text" placeholder="Username" name="username"   value={inputsReg.username}  onChange={handleChangeReg} required  />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faEnvelope} className="my-auto mx-auto" />
                            <input className="LoginInput"  type="email" placeholder="Email" name="email"   value={inputsReg.email} onChange={handleChangeReg}   required  />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} className="my-auto mx-auto"/>
                            <input
                                className="LoginInput"
                                type='password'
                                placeholder="Password"
                                id="psw"
                                name="password"
                                value={inputsReg.password}
                                onChange={handleChangeReg}
                                required
                               
                            />
                        </div>
                        {errReg && errReg}
                        {mess && mess}
                        <button className="btn" onClick={handleReg} >REGISTER</button>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <br /><br />
                        <p>
                            Create an account and start exploring the platform.
                        </p>
                        <br /><br />
                        <button className="btn transparent" onClick={handleSignUpClick}>
                            REGISTER
                        </button>
                    </div>
                    <img src={Dosthi} className="image" alt="login" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us?</h3>
                        <br /><br />
                        <p>
                            If you already have an account, please log in.
                        </p>
                        
                        <br /><br />
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
export default Login;




