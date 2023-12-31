// import "./profile.scss";
// import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import PlaceIcon from "@mui/icons-material/Place";
// import LanguageIcon from "@mui/icons-material/Language";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Posts from "../../components/posts/Posts";
// import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";
// import { useLocation } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";
// import Update from "../../components/update/Update.js";
// import { useState } from "react";

// // @    *--          --* 

// const Profile = () => {

//   const [openUpdate, setOpenUpdate] = useState(false);
//   const { currentUser } = useContext(AuthContext);

//   //-- @ start  *-- for getting the profile details --*

//   const userId = parseInt(useLocation().pathname.split("/")[2]);

//   const { isLoading, error, data } = useQuery(["user"], () =>
//     makeRequest.get("/users/find/" + userId).then((res) => {
//       return res.data;
//     })
//   );
//   // console.log(data) // data = profile data 

//   //--@ end    * for getting the profile details * 


//   //--@ start *-- for follow and unfollow --*

//   const { isLoading: rIsLoading, data: relationshipData } = useQuery(
//     ["relationship"],
//     () =>
//       makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
//         return res.relationshipData;
//       })
//   );
//       console.log(relationshipData) // relationshipData = followers for the profile id 
//   const queryClient = useQueryClient();

//   const mutation = useMutation(
//     (following) => {
//       if (following) return makeRequest.delete("/relationships?userId=" + userId);
//       return makeRequest.post("/relationships", { userId });
//     },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries(["relationship"]);
//       },
//     }
//   );

//   const handleFollow = () => {
//     mutation.mutate(relationshipData.includes(currentUser.id));
//   };

//   //---- for follow and unfollow @ end 

//   return (
//     <div className="profile">
//       {isLoading ? (
//         "loading"
//       ) : (
//         <>
//           <div className="images">
//             <img src={"/upload/"+data.coverPic} alt="null" className="cover" />
//             <img src={"/upload/"+data.profilePic} alt="nulll" className="profilePic" />
//           </div>
//           <div className="profileContainer">
//             <div className="uInfo">
//               <div className="left">
//                 <a href="http://facebook.com">
//                   <FacebookTwoToneIcon fontSize="medium" />
//                 </a>
//                 <a href="http://facebook.com">
//                   <InstagramIcon fontSize="medium" />
//                 </a>
               
//               </div>
//               <div className="center">
//                 <span>{data.name}</span>
//                 <div className="info">
//                   <div className="item">
//                     <PlaceIcon />
//                     <span>{data.city}</span>
//                   </div>
//                   <div className="item">
//                     <LanguageIcon />
//                     <span>{data.website}</span>
//                   </div>
//                 </div>
//                 {/* {rIsLoading ? (
//                   "loading"
//                 ) : userId === currentUser.id ? (
//                   <button onClick={()=>{setOpenUpdate(true)}}>update</button>
//                 ) : (
//                   <button onClick={handleFollow}>
//                     {relationshipData.includes(currentUser.id)
//                       ? "Following"
//                       : "Follow"}
//                   </button>
//                 )} */}
//                 {rIsLoading ? (
//                   "loading"
//                 ) : userId === currentUser.id ? (
//                   <button onClick={() => setOpenUpdate(true)}>update</button>
//                 ) : (
//                   <button onClick={handleFollow}>
//                     {relationshipData?.relationshipData.includes(currentUser.id)
//                       ? "Following"
//                       : "Follow"}
//                   </button>
//                 )}
//               </div>
//               <div className="right">
//                 <EmailOutlinedIcon />
//                 <MoreVertIcon />
//               </div>
//             </div>
//             <Posts userId={userId} />
//           </div>
//         </>
//       )}
//       { openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
//     </div>
//   );
// };

// export default Profile;


import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { useQuery, useQueryClient,useMutation } from '@tanstack/react-query'
import { makeRequest } from "../../axios"; 
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Update from"../../components/update/Update.js";
import { useState } from "react";


const Profile = () => {
  const [openUpdate,setOpenUpdate] =useState(false)
  const { currentUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );
  const { isLoading:rIsLoading, data:relationshipData} = useQuery(["relationship"], () =>
    makeRequest.get("relationships?followedUserId=" + userId).then((res) => {
      return res.data;
    })
  );
  //console.log(typeof(userId));

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if(following) return makeRequest.delete("/relationships?userId="+userId);
      return makeRequest.post("/relationships",{userId});
    },
    {      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );
  const handleFollow = () =>{
    mutation.mutate(relationshipData.includes(currentUser.id));

};

  return (
    <div className="profile">
      {isLoading ?("loading")  :( <>

        <div className="images">
        <img
          //src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          src={"/upload/"+data.coverPic}
          alt="null"
          className="cover"
          />
        <img
           //src="https://th.bing.com/th/id/OIP.HJ_xMw1i6nILyvZVy404VQHaJL?w=119&h=180&c=7&r=0&o=5&pid=1.7"
          src={"/upload/"+data.profilePic}
          alt="null"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a href="http://Instagram.com">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="http://Twitter.com">
              <TwitterIcon fontSize="medium" />
            </a>
            {/* <a href="http://LinkedIn.com">
              <LinkedInIcon fontSize="medium" />
            </a>
            <a href="http://Pinterest.com">
              <PinterestIcon fontSize="medium" />
            </a> */}
          </div>
          <div className="center">
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data.city}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{data.website}</span>
              </div>
            </div>
            {rIsLoading ?(
               "loading"
               ): userId === currentUser.id ?
             
            (<button onClick={()=>setOpenUpdate(true)}>update</button>):(<button onClick={handleFollow}>{relationshipData.includes(currentUser.id)
             ? "Following"
             : "Follow"}
             </button>
             )} 
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts userId = {userId} />
  
      </div></>)
  }
  {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
    </div>
  );
};

export default Profile;

//  