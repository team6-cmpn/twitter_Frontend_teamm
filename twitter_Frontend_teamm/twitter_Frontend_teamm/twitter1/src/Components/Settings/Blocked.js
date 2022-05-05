import React from "react";
import "./settingsSubmenus.css";
import {Avatar} from "@material-ui/core";

const Blocked = ({ BlockedAccount }) => {
    return (
      <div className={`SettingsContentInMenus `}>
        <div className="Accountinfo_dec">
            <Avatar src={BlockedAccount.userImage} />
            <h5>{BlockedAccount.displayname}</h5>
            <h6>{BlockedAccount.username}</h6>
        </div>
            
      </div>
    );
  }
  
  export default Blocked;