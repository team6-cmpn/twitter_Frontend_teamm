import React from "react";
import "./settingsSubmenus.css";
import {Avatar} from "@material-ui/core";

const Muted = ({ MutedAccount }) => {
    return (
      <div className={`SettingsContentInMenus `}>
        <div className="Accountinfo_dec">
            <Avatar src={MutedAccount.userImage} />
            <h5>{MutedAccount.displayname}</h5>
            <h6>{MutedAccount.username}</h6>
        </div>
            
      </div>
    );
  }
  
  export default Muted;