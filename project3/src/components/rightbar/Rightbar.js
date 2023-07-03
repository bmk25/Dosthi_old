import React from "react";
import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>text </span>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>jack sparrow</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Indra Sena Reddy</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>praveen</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
          {/* item 2 */}
        <div className="item">
          <span>Latest Activities</span>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXP4OmvWeUhIghWgXCVClzUVrpfNdaG0jCOFBJgrbZQ9EuEYo_-CCV2zqtQvh9BgcScno&usqp=CAU"
                alt=""
              />
              <p>
                <span>jack </span> changed their cover 
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXP4OmvWeUhIghWgXCVClzUVrpfNdaG0jCOFBJgrbZQ9EuEYo_-CCV2zqtQvh9BgcScno&usqp=CAU"                alt=""
              />
              <p>
                <span>sandeep</span> liked your pic 
              </p>
            </div>
            <span>3 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXP4OmvWeUhIghWgXCVClzUVrpfNdaG0jCOFBJgrbZQ9EuEYo_-CCV2zqtQvh9BgcScno&usqp=CAU"                alt=""
              />
              <p>
                <span>Tom Curser</span> send an snap
              </p>
            </div>
            <span>6 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXP4OmvWeUhIghWgXCVClzUVrpfNdaG0jCOFBJgrbZQ9EuEYo_-CCV2zqtQvh9BgcScno&usqp=CAU"                alt=""
              />
              <p>
                <span>jack sparrow</span> changed their cover 
              </p>
            </div>
            <span>11 min ago</span>
          </div>

        </div>

        <div className="item">
          <span>Online Friends </span>
          <div className="user">
            <div className="userInfo">
              <img
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXP4OmvWeUhIghWgXCVClzUVrpfNdaG0jCOFBJgrbZQ9EuEYo_-CCV2zqtQvh9BgcScno&usqp=CAU"                alt=""
              />
              <div className="online" />
                <span>sidhu siddhardh roy</span> 
      
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXP4OmvWeUhIghWgXCVClzUVrpfNdaG0jCOFBJgrbZQ9EuEYo_-CCV2zqtQvh9BgcScno&usqp=CAU"                alt=""
              />
              <div className="online" />
                <span>stylin rao</span> 
      
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXP4OmvWeUhIghWgXCVClzUVrpfNdaG0jCOFBJgrbZQ9EuEYo_-CCV2zqtQvh9BgcScno&usqp=CAU"                alt=""
              />
              <div className="online" />
                <span>Balakrishna</span> 
      
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXP4OmvWeUhIghWgXCVClzUVrpfNdaG0jCOFBJgrbZQ9EuEYo_-CCV2zqtQvh9BgcScno&usqp=CAU"                alt=""
              />
              <div className="online" />
                <span>Trump</span> 
      
            </div>
          </div>  
        </div>


      </div>
    </div>
  );
};

export default Rightbar;
