import "./navbar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import Dosthi from '../../assets/dosthi.svg';
import { useNavigate } from "react-router-dom";



const Navbar =() =>{

  const { toggle ,darkMode} = useContext(DarkModeContext)
  const { currentUser,logout} = useContext(AuthContext)

  const navigate = useNavigate()

  

  const handleLogout = async () => {
    try{
      await logout()
      navigate("/login")

    }catch (err){
      // setErr(err.response.data)
      console.log(err)
    }
    
  };

  return(

  <div className="navbar">
    <div className="left">
      <Link to="/" style={{textDecoration:"none"}}>     
        <img src={Dosthi} alt="" />
       </Link>

        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />

        <div className="search-box">
        
        <input type="text" placeholder="search..." />
        <button type="submit">
        <SearchOutlinedIcon className="search-icon" />
          <i class="bx bx-search search-icon"></i>
        </button>
        </div>

     </div>
      <div className="right">

        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src={currentUser.profilePic
          } alt="kir" />
          <span>
            {currentUser.name}
          </span>
        </div>
        <LogoutOutlinedIcon onClick={handleLogout} style={{cursor :"pointer"}}/>

     
    </div>
    
</div>
  )
}

export default Navbar;

