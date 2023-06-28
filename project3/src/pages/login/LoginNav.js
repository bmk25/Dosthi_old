const Login = () => {


  const [inputs, setInputs]  =useState({
    username : "",
    password : "",
  })

  const [err,setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) =>{
    e.preventDefault()
    setInputs(prev =>({...prev,[e.target.name]:e.target.value}))
  }

  const {login} = useContext(AuthContext)


  const handleLogin = async e => {
    e.preventDefault()
    try{
      await login(inputs);
      navigate("/")

    }catch (err){
      setErr(err.response.data)
    }
  };

  // console.log(err);

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button> Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>

          {err && err}

            <button onClick={handleLogin }>Login</button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;




// =-----------------login scss



.login {
    height: 100vh;
    background-color: rgba(73, 206, 255, 0.814); 
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    .card {
        display: flex;
        width: 50%;
        background-color: white;
        border-radius: 10px;
        min-height: 500px;
        overflow:hidden ;
  
        .left {
            flex: 1;
            background: linear-gradient(rgba(227, 204, 227, 0.276), rgba(95, 138, 143, 0.219)), url("https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600");
            background-size: cover;
            background-position: center;
            padding: 40px;
            display: flex;
            flex-direction: column;
  
            & h1 {
                font-size: 60px;
                color: aliceblue;
            }
            & p {
                color: aliceblue;
            }
  
  
  
            & span {
                font-size: 15px;
                color: aliceblue;
  
            }
  
            & button {
                padding: 10px;
                width: 100px;
                border-radius: none;
                background-color: rgba(253, 204, 250, 0.587);;
                color:rgb(255, 255, 255);
                font-weight: bold;
                /* cursor: pointer; */
                margin-top: 30px;
                margin-left: 25px;
            }
        }
  
        .right {
            flex: 1;
  
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
  
            & h1 {
                color: black;
                margin-left: 80px ;
            }
  
            & form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 20px;
  
                & input {
                    border: none;
                    border-bottom: 1px solid rgba(239, 168, 245, 0.672);
                    padding: 20px 10px;
                }
            }
  
            & button {
                padding: 10px;
                margin-bottom: 30px;
                margin-left: 70PX;
                width: 100px;
                border-radius: none;
                background-color: white;
                color: rgb(246, 175, 255);
                font-weight: bold;
                   color: rgba(11, 14, 16, 0.814);
            }
  
        }
  
  
    }
  }
  
  // .login {
  //     height: 100vh;
  //     background-color: #c1beff;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     padding: 20px;
    
  //     .card {
  //       width: 50%;
  //       display: flex;
  //       background-color: white;
  //       border-radius: 10px;
  //     //   min-height: 50vh;
  //       overflow: hidden;
    
  //       .left {
  //         flex: 1;
  //         background: linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
  //           url("https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600")
  //             center;
  //         background-size: cover;
  //         background-position: center; // new 
  //         padding: 50px;
  //         display: flex;
  //         flex-direction: column;
  //         gap: 30px;
  //       //   color: white;
    
  //         h1 {
  //           font-size: 100px;
  //           // line-height: 100px;
  //           color: #c1beff;
  //         }
          
  //         p {
  //         }
    
  //         span {
  //           font-size: 14px;
  //         }
          
  //         button {
  //           width: 50%;
  //           padding: 10px;
  //           border: none;
  //           background-color: white;
  //           color: rebeccapurple;
  //           font-weight: bold;
  //           cursor: pointer;
  //         }
  //       }
    
  //       .right {
  //         flex: 1;
  //         padding: 50px;
  //         display: flex;
  //         flex-direction: column;
  //         gap: 50px;
  //         justify-content: center;
    
  //         h1 {
  //         color: #555;
  //         }
          
  //         form {
  //           display: flex;
  //           flex-direction: column;
  //           gap: 30px;
            
  //           input {
  //           border: none;
  //           border-bottom: 1px solid lightgray;
  //           padding: 20px 10px;
  //           }
            
  //           button {
  //             width: 50%;
  //             padding: 10px;
  //             border: none;
  //             background-color: #938eef;
  //             color: white;
  //             font-weight: bold;
  //             cursor: pointer;
  //           }
  //         }
  //       }
  //     }
  // }