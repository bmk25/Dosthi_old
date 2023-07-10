import { db } from "../connect.js";
import jwt from "jsonwebtoken";


export const getLikes = (req, res) => {
  

    // console.log(err.response);
    const q =`SELECT userId from likes where postId = ?`;
    // console.log(req)
    db.query(q,[req.query.postId] ,(err, data) => {
    //    console.log(req.body.postId)
      if (err) return res.status(500).json(err);
      // console.log(data)
      return res.status(200).json(data.map(like=>like.userId));
    });
  }


  



export const addLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    // console.log(err.response);
    const q = "INSERT INTO likes (`userId`,`postId`) VALUES (?)";

    const values = [
  
      userInfo.id,
      req.body.postId
    ]
    
     
    db.query(q,[values] ,(err, data) => {
      if (err) return res.status(500).json(err);
      
      return res.status(200).json("like  has  been created");
    });
  })

}


export const deleteLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    // console.log(err.response);
    const q =
    "DELETE FROM LIKES WHERE `userId` = ? AND `postId` = ?";

    db.query(q,[userInfo.id,req.query.postId] ,(err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("likes has  been disliked");
    });
  })

}
