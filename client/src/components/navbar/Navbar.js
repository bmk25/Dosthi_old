// import "./navbar.scss";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import HomeIcon from "@mui/icons-material/Home";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { AuthContext } from "../../context/authContext";
// import Dosthi from "../../assets/dosthi.svg";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const { toggle, darkMode } = useContext(DarkModeContext);
//   const { currentUser, logout } = useContext(AuthContext);

//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate("/login");
//     } catch (err) {
//       // setErr(err.response.data)
//       console.log(err);
//     }
//   };

//   return (
//     <div className="navbar">
//       <div className="left">
//         {/* <Link to="/" style={{textDecoration:"none"}}>     
//         <img src={Dosthi} alt="" />
//        </Link> */}

//         <div className="waviy">
//           <span style={{ "--i": 1 }}>D</span>
//           <span style={{ "--i": 2 }}>O</span>
//           <span style={{ "--i": 3 }}>S</span>
//           <span style={{ "--i": 4 }}>T</span>
//           <span style={{ "--i": 5 }}>H</span>
//           <span style={{ "--i": 6 }}>I</span>
//         </div>

//         <Link to="/">
//         <HomeOutlinedIcon /></Link>
//         {darkMode ? (
//           <WbSunnyOutlinedIcon onClick={toggle} />
//         ) : (
//           <DarkModeOutlinedIcon onClick={toggle} />
//         )}
//         <GridViewOutlinedIcon />

//         <div className="search-box">
//           <input type="text" placeholder="search..." />
//           <button type="submit">
//             <SearchOutlinedIcon className="search-icon" />
//             <i className="bx bx-search search-icon"></i>
//           </button>
//         </div>
//       </div>
//       <div className="right">
//         <PersonOutlinedIcon />
//         <EmailOutlinedIcon />
//         <NotificationsOutlinedIcon />
//         <div className="user">
//           <img src={currentUser.profilePic} alt="kir" />
//           <span>{currentUser.name}</span>
//         </div>
//         <LogoutOutlinedIcon
//           onClick={handleLogout}
//           style={{ cursor: "pointer" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import Dosthi from "../../assets/dosthi.svg";
import { useNavigate } from "react-router-dom";
import { colors } from "@mui/material";
// import home from '../../assets/home.json;'
import { Tooltip } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";


const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser, logout } = useContext(AuthContext);

//   const userId = currentUser.id
//   const { isLoading, error, data } = useQuery(["user"], () =>
//   makeRequest.get("/users/find/" + userId).then((res) => {
//     return res.data;
//   })
// );
//   console.log(data)

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      // setErr(err.response.data)
      console.log(err);
    }
  };

  return (
    <div className="navbar">
      
        {/* <Link to="/" style={{textDecoration:"none"}}>     
        <img src={Dosthi} alt="" />
       </Link> */}
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <div className="waviy">
          <span style={{ "--i": 1 }}>D</span>
          <span style={{ "--i": 2 }}>O</span>
          <span style={{ "--i": 3 }}>S</span>
          <span style={{ "--i": 4 }}>T</span>
          <span style={{ "--i": 5 }}>H</span>
          <span style={{ "--i": 6 }}>I</span>
        </div>
        <div className="left">
        <Tooltip title="Home" placement="bottom" className="tooltip">
        <Link to="/" className="homeicon" style={{ textDecoration: "none" }} >
          <HomeOutlinedIcon  />
          
        </Link>
        </Tooltip>
        {/* <a href="https://lordicon.com/">Icons by Lordicon.com</a> */}
        {/* {home} */}
        
        {darkMode ? (
          <Tooltip title="Lightmode" placement="bottom" className="tooltip">
             <WbSunnyOutlinedIcon  onClick={toggle} className="darkicon"  />
          </Tooltip>
        ) : (
          <Tooltip title="Darkmode" placement="bottom" className="tooltip">
           <DarkModeOutlinedIcon onClick={toggle} className="darkicon" />
          </Tooltip>
        )}
        {/* <GridViewOutlinedIcon /> */}

        <Tooltip title="Profile" placement="bottom" className="tooltip">
        <Link 
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: "none" }} className="icon1"
              ><PersonOutlinedIcon  /></Link>
        </Tooltip>
        {/* <EmailOutlinedIcon /> */}
        <NotificationsOutlinedIcon className="icon2" />
      </div>
      <div className="right">
          
          <div className="search-box">
          <input type="text" placeholder="search..." />
          <button type="submit">
            <SearchOutlinedIcon className="search-icon" />
            <i class="bx bx-search search-icon"></i>
          </button>
        </div>
        <div className="user">
        <Link 
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: "none" }} 
              >
          <img src={"/upload/"+currentUser.profilePic} alt=""/>
              <span>{currentUser.name}</span>
        </Link>
            

          </div>
        <LogoutOutlinedIcon
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
