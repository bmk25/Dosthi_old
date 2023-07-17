
import {db } from "../connect.js"
import jwt from "jsonwebtoken";
import moment from "moment";


export const getComments= (req, res) => {
  
        // console.log(req)
        
      // console.log(err.response);
      const q =`SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId) where c.postId= ? order by createdAt Asc`;
     

      db.query(q,[req.query.postId] ,(err, data) => {
        if (err) return res.status(500).json(err);
        // console.log(data.length)
        console.log(data)
        return res.status(200).json(data);
      });
     
    }
    




    
export const addComments = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    // console.log(err.response);
    const q =
    "INSERT INTO comments(`desc`, `createdAt`, `userId`,`postId`) VALUES (?)";

    const values = [
      req.body.desc,
      moment(Date.now()).format("YYYY-MM--DD HH:mm:ss"),
      userInfo.id,
      req.body.postId
    ]
    
     
    db.query(q,[values] ,(err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("comments has  been created");
    });
  })

}