import React from "react";
import "./settingsSubmenus.css"
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import AccountInfoMenuss from "./AccountInfoMenuss";
import ChangeUsername from "./changeUsername";

/**
 * make you able to change the account info
 * @returns [account info]
 */
const AccountInformation = () => {
    const [location] = React.useState(useLocation().pathname);
    document.title = "Account information / Twitter";
    
    return (
      <div className="settingsSubMenu">
            <div className="SubMenuTitle">
            <span>Account information  </span>
            </div>
            <div className="submenu_discription">
                <br/>
            <Link to="../change-username" style={{ textDecoration: "none", color:"inherit" }}>
          <AccountInfoMenuss
            text="Username"
            Icon={ChevronRight}
            

          />
        </Link>
        <Link to="../change-phone-number" style={{ textDecoration: "none", color:"inherit" }}>
          <AccountInfoMenuss
            text="Phone"
            Icon={ChevronRight}
            

          />
        </Link> 
        <Link to="../change-email" style={{ textDecoration: "none", color:"inherit" }}>
          <AccountInfoMenuss
            text="Email"
            Icon={ChevronRight}
            

          />
        </Link>
        
        
        
        </div>
    </div>
      
    );
  };
  
  export default AccountInformation;