import React from "react";
import "./settingsSubmenus.css";
import {Avatar} from "@material-ui/core";

const AccDec = ({ deactivatedAccount }) => {
    return (
      <div className={`SettingsContentInMenus `}>
        <div className="Accountinfo_dec">
            <Avatar src={deactivatedAccount.userImage} />
            <h5>{deactivatedAccount.displayname}</h5>
            <h6>{deactivatedAccount.username}</h6>
        </div>
            
      </div>
    );
  }
  
  export default AccDec;