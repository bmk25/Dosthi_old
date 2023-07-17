// import { useContext ,useState} from "react";
// import "./stories.scss"
// import { AuthContext } from "../../context/authContext"
// import { makeRequest } from "../../axios";
// import { useMutation, useQueryClient,useQuery } from "@tanstack/react-query";


// const Stories = () => {

//   // const { isLoading, error, data  } = useQuery(["story"], () =>
//   //   makeRequest.get("/stories").then((res) => {
//   //     return res.data;
//   //   })
//   // );

//   const {currentUser} = useContext(AuthContext)

//   // const [file, setFile] = useState(null);

//   // // ln -s ../public/images src/assets

//   // const upload = async () => {
//   //   try {
//   //     const formData = new FormData();
//   //     formData.append("file", file);
//   //     const res = await makeRequest.post("/upload", formData);
//   //     return res.data;
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   // const queryClient = useQueryClient();

//   // const mutation = useMutation(
//   //   (newStory) => {
//   //     return makeRequest.post("/story", newStory);
//   //   },
//   //   {
//   //     onSuccess: () => {
//   //       // Invalidate and refetch
//   //       queryClient.invalidateQueries(["story"]);
//   //     },
//   //   }
//   // );

//   // const handleClick = async (e) => {
//   //   e.preventDefault();
//   //   let imgUrl = "";
//   //   if (file) imgUrl = await upload();
//   //   mutation.mutate({ img: imgUrl });
//   //   setFile(null);
//   // };


//   // // //TEMPORARY
//   const stories = [
//     {
//       id: 1,
//       name: " sumanth",
//       // img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchaqpjXxM718T4OBMDkTnZglX5JH1msAnkA",
//     },
//     {
//       id: 2,
//       name: "Saradhi",
//      // img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//       img: "https://static.vecteezy.com/system/resources/previews/001/312/781/original/statue-of-liberty-usa-free-photo.jpeg",
//     },
//     {
//       id: 3,
//       name: "Karun",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvES7MAGazvcFwPdnYtytvUmYcET6ovF8oCg&usqp=CAU",
      
//     },
//     {
//       id: 4,
//       name: "Naveen",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvES7MAGazvcFwPdnYtytvUmYcET6ovF8oCg&usqp=CAU",
//     },
//   ];
//   // const [file, setFile] = useState(null);

//   return (
//     <div className="stories">
//       <div className="container">
//         <div className="menu">
//         <div className="story">
//             <img src={currentUser.profilePic} alt="" />
//             <span>{currentUser.name}</span>
            
//             <input
//               type="file"
//               id="file"
//               style={{ display: "none" }}
//               // multiple
//               onChange={(e) => setFile(e.target.files[0])}
//             />
            
//             <label htmlFor="file">
//                 <span style={{ color:"black"}}>Add</span>
//             </label>

//             <button onClick={handleClick}>

//             +
//            </button>
//         </div>

       
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Stories





import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: " sumanth",
      // img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchaqpjXxM718T4OBMDkTnZglX5JH1msAnkA",
    },
    {
      id: 2,
      name: "Saradhi",
     // img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      img: "https://static.vecteezy.com/system/resources/previews/001/312/781/original/statue-of-liberty-usa-free-photo.jpeg",
    },
    {
      id: 3,
      name: "Karun",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvES7MAGazvcFwPdnYtytvUmYcET6ovF8oCg&usqp=CAU",
      
    },
    {
      id: 4,
      name: "Naveen",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvES7MAGazvcFwPdnYtytvUmYcET6ovF8oCg&usqp=CAU",
    },
  ];
  // const [file, setFile] = useState(null);


  // const upload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", file);
  //     const res = await makeRequest.post("/upload", formData);
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const queryClient = useQueryClient();

  // const mutation = useMutation(
  //   (newPost) => {
  //     return makeRequest.post("/stories", newPost);
  //   },
  //   {
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries(["stories"]);
  //     },
  //   }
  // );

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   let imgUrl = "";
  //   if (file) imgUrl = await upload();
  //   mutation.mutate({ img: imgUrl });
  //   setFile(null);
  // };

  return (
    <div className="stories">
      <div className="container">
        <div className="menu">
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button >+</button>
          </div>
        {stories.map(story=>(
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Stories