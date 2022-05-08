import React from "react";
import "../Settings/settingsSubmenus.css";
import {Avatar} from "@material-ui/core";

const FollowingList = ({ FollowingAccount }) => {
    return (
        <div className="Accountinfo_dec">
            <Avatar src={FollowingAccount.userImage} />
            <h5>{FollowingAccount.displayname}</h5>
            <h6>{FollowingAccount.username}</h6>
            <button id="FollowButton" class="ButtonEditProfile" ><span>Following</span></button>
        </div>
    );
  }
  
  export default FollowingList;