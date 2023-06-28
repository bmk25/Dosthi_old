// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./register.scss";

// const Register = () => {
//   const [inputsReg, setInputsReg] = useState({
//     username: "",
//     password: "",
//     email: "",
//     name: "",
//   });
  
//   const{message,setmessage}=useState('')


//   const handleChangeReg = (e) => {
//     setInputsReg((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

  
  
//   const handleReg = async (e) => {
//     e.preventDefault();
//     const { username, email, password, name } = inputsReg;
//     const userDetails = { username, email, password, name };
//     const url = `http://localhost:8800/api/auth/register`;
//     const options = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userDetails),
//     };
//     const response = await fetch(url, options);
//     var res = await response.json();
//     console.log("register res", res);
//     if (response === true) {
//       setmessage(res.message);
//     } else {
//        console.log("Hi")
//     }
//   };

//   // console.log(inputs);

//   // console.log(err)

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
//           <form onSubmit={handleReg}>
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               onChange={handleChangeReg}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChangeReg}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChangeReg}
//             />
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               onChange={handleChangeReg}
//             />
          
//             <button type="submit">Register</button>
            
//           </form>
//           <p className='error-message'>{message}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
