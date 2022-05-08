import React from "react";
import "../Settings/settingsSubmenus.css";
import {Avatar} from "@material-ui/core";
import './Profile.css'
const FollowersList = ({ FollowerAccount }) => {
    return (
      <div className="Accountinfo_dec">
          <Avatar src={FollowerAccount.userImage} />
          <h5>{FollowerAccount.displayname}</h5>
          <h6>{FollowerAccount.username}</h6>
          <button id="FollowButton" class="ButtonEditProfile" ><span>Follow</span></button>
      </div>     
    );
  }
  
  export default FollowersList;