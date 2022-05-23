import React from "react";
import "./LikedYou.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Avatar } from "@material-ui/core";
import {useNavigate} from "react-router";
/**it shows you how liked the tweet but as we see her it is the used to connect with the backend */
const LikedYouBe = ({ liked }) => {
  const navigate = useNavigate();
  function OnePost(){ 
    navigate("/post");
    localStorage.setItem("clicked.ID",liked.notificationContent._id );
    }
  return (
    <div className="likedYou" id="likedyou">
      <FavoriteIcon />
      <div onClick={()=>OnePost()}>
        <div>
            <Avatar src={liked.notificationHeader.images} />
          
        </div>
        <span>
          <b>{liked.notificationHeader.text}</b>
        </span>
        <span>{liked.notificationContent.text}</span>
      </div>
    </div>
  );
};

export default LikedYouBe;