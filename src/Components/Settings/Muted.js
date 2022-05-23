import React from "react";
import "./settingsSubmenus.css";
import {Avatar} from "@material-ui/core";
import { Link } from "react-router-dom";
/**muted account component to view the muted account */
const Muted = ({ MutedAccount }) => {
  return (
    <div className={`SubsettingsCont `}>
       <Avatar classname="Avatar"src={''} />
      <div className="text_discrip">

        <h5 onClick={localStorage.setItem("clicked_userID",MutedAccount._id)}>
        <Link to={`/${MutedAccount.username}`}>{MutedAccount.name}
        </Link></h5>
          <h6>{MutedAccount.username}</h6>
      </div>
          
    </div>
  );
  }
  
  export default Muted;