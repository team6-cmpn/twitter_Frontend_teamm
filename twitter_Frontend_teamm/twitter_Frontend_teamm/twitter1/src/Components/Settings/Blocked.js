import React from "react";
import "./settingsSubmenus.css";
import {Avatar} from "@material-ui/core";

const Blocked = ({ BlockedAccount }) => {
    return (
      <div className={`SubsettingsCont `}>
         <Avatar classname="Avatar"src={''} />
        <div className="text_discrip">
       

            <h5>{BlockedAccount.name}</h5>
            <h6>{BlockedAccount.username}</h6>
        </div>
            
      </div>
    );
  }
  
  export default Blocked;