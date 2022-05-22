import React from "react";
import "./settingsSubmenus.css";
import {Avatar} from "@material-ui/core";
import { Link } from "react-router-dom";
/**blocked account component */
const Blocked = ({ BlockedAccount }) => {
    return (
      <div className={`SubsettingsCont `}>
         <Avatar classname="Avatar"src={''} />
        <div className="text_discrip">
       

        <h5 onClick={localStorage.setItem("clicked_userID",BlockedAccount._id)}>
        <Link to={`/${BlockedAccount.username}`}>{BlockedAccount.name}
        </Link></h5>
       <h6>{BlockedAccount.username}</h6>
        </div>
            
      </div>
    );
  }
  
  export default Blocked;