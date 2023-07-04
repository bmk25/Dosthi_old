// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./register.scss";
// import axios from 'axios';

// const Register = () => {

//   const [inputsReg, setInputsReg] =useState({
//     username:"",
//     password:"",
//     email:"",
//     name:"",
//   })
//   const [errReg,setErrReg] = useState(null)
//   const [mess,setmess] =useState(null)

//   const handleChangeReg = e =>{
//     setInputsReg(prev =>({...prev,[e.target.name]:e.target.value }));
//   }

//   const handleReg= async (e)=>{
//     // e.preventDefault()
//     try{
//       const res = await axios.post("http://localhost:8800/api/auth/register",inputsReg)

//       console.log(res.data)
//       setmess(res.data)

//         setInputsReg({ // Clear the form inputs after a delay
//           username: "",
//           password: "",
//           email: "",
//           name: "",
//         });
//       } // Delay in milliseconds, adjust as n

//     } catch (err){
//       setErrReg(err.response.data)
//       console.log(err.response.data)

//     }
//   }

//   // console.log(inputs);

//   // console.log(errReg)

//   return (
//     <div className="register">
//       <div className="card">
//         <div className="left">
//           <h1>Lama Social.</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
//             alias totam numquam ipsa exercitationem dignissimos, error nam,
//             consequatur.
//           </p>
//           <span>Do you have an account?</span>

//           <Link to="/login">
//           <button>Login</button>
//           </Link>
//         </div>
//         <div className="right">
//           <h1>Register</h1>
//           <form>
//             <input type="text" placeholder="Username" name="username" onChange={handleChangeReg} />
//             <input type="email" placeholder="Email" name="email" onChange={handleChangeReg}/>
//             <input type="password" placeholder="Password" name="password" onChange={handleChangeReg}/>
//             <input type="text" placeholder="Name" name="name" onChange={handleChangeReg} />
//             {errReg && errReg}
//             {mess && mess}
//             <button onClick={handleReg} >Register</button>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./register.scss";
// import axios from "axios";

// const Register = () => {
//   const [inputsReg, setInputsReg] = useState({
//     username: "",
//     password: "",
//     email: "",
//     name: "",
//   });
//   const [errReg, setErrReg] = useState(null);
//   const [mess, setmess] = useState(null);

//   const handleChangeReg = (e) => {
//     setInputsReg((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleReg = async (e) => {
//     // e.preventDefault(); // Prevent the default form submission

//     try {
//       const res = await axios.post(
//         "http://localhost:8800/api/auth/register",
//         inputsReg
//       );

//       console.log(res.data);
//       setmess(res.data);
//     } catch (err) {
//       setErrReg(err.response.data);
//       console.log(err.response.data);
//     }
//     setTimeout(() => {
//       setmess(null);
//     }, 2000); // Delay in milliseconds, adjust as needed

//     // setTimeout(() => {
//     //   setInputsReg({
//     //     username: "",
//     //     password: "",
//     //     email: "",
//     //     name: "",
//     //   });
//     // },1500); // Delay in milliseconds, adjust as needed
    
//   };

//   return (
//     <div className="register">
//       <div className="card">
//         <div className="left">
//           <h1>Lama Social.</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
//             alias totam numquam ipsa exercitationem dignissimos, error nam,
//             consequatur.
//           </p>
//           <span>Do you have an account?</span>
//           <Link to="/login">
//             <button>Login</button>
//           </Link>
//         </div>
//         <div className="right">
//           <h1>Register</h1>
//           <form>
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               value={inputsReg.username}
//               onChange={handleChangeReg}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={inputsReg.email}
//               onChange={handleChangeReg}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={inputsReg.password}
//               onChange={handleChangeReg}
//             />
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={inputsReg.name}
//               onChange={handleChangeReg}
//             />
//             {errReg && errReg}
//             {mess && mess}
//             <button onClick={handleReg}>Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;