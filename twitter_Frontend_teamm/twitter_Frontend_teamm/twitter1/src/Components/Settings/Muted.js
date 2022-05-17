import React from "react";
import "./settingsSubmenus.css";
import {Avatar} from "@material-ui/core";

const Muted = ({ MutedAccount }) => {
  return (
    <div className={`SubsettingsCont `}>
       <Avatar classname="Avatar"src={''} />
      <div className="text_discrip">
     

          <h5>{MutedAccount.name}</h5>
          <h6>{MutedAccount.username}</h6>
      </div>
          
    </div>
  );
  }
  
  export default Muted;