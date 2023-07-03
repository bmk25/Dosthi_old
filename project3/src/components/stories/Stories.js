import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: " suma",
      // img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchaqpjXxM718T4OBMDkTnZglX5JH1msAnkA",
    },
    {
      id: 2,
      name: "John snow ",
     // img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      img: "https://static.vecteezy.com/system/resources/previews/001/312/781/original/statue-of-liberty-usa-free-photo.jpeg",
    },
    {
      id: 3,
      name: "Yogee",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvES7MAGazvcFwPdnYtytvUmYcET6ovF8oCg&usqp=CAU",
      
    },
    {
      id: 4,
      name: "Mamatha",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvES7MAGazvcFwPdnYtytvUmYcET6ovF8oCg&usqp=CAU",
    },
  ];

  return (
    <div className="stories">
      <div className="container">
        <div className="menu">
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
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