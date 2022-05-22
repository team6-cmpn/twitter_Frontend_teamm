import React from "react";
import "./LikedYou.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Avatar } from "@material-ui/core";
/**it show you how liked your tweet
 * 
 */
const LikedYou = ({ likePost }) => {
  return (
    <div className="likedYou" id="likedyou">
      <FavoriteIcon />
      <div>
        <div>
          {likePost.likeUser.map((user) => (
            <Avatar src={user.userImage} />
          ))}
        </div>
        <span>
          <b>{likePost.likeUser[0].displayName}</b> and{" "}
          {likePost.likeUser.length - 1} others liked your Tweet
        </span>
        <span>{likePost.post}</span>
      </div>
    </div>
  );
};

export default LikedYou;
