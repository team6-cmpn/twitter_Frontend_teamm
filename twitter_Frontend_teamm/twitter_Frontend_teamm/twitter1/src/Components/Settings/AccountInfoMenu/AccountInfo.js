import React from "react";
import "../settingsSubmenus.css"
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import AccountInfoMenuss from "./AccountInfoMenuss";


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
            <Link to="" style={{ textDecoration: "none", color:"inherit" }}>
          <AccountInfoMenuss
            text="Username"
            Icon={ChevronRight}
            data="@mohamedfathy10"
            

          />
        </Link>
        <Link to="" style={{ textDecoration: "none", color:"inherit" }}>
          <AccountInfoMenuss
            text="Phone"
            Icon={ChevronRight}
            data="+201012345679"
            

          />
        </Link> 
        <Link to="" style={{ textDecoration: "none", color:"inherit" }}>
          <AccountInfoMenuss
            text="Email"
            Icon={ChevronRight}
            data="Mohamedfathy@gmail.com"
            

          />
        </Link>
        <hr></hr>
        <br></br>
        
        <Link to="" style={{ textDecoration: "none", color:"inherit" }}>
          <AccountInfoMenuss
            text="Gender"
            Icon={ChevronRight}
            data="Male"
            

          />
        </Link>
        <Link to="" style={{ textDecoration: "none", color:"inherit" }}>
          <AccountInfoMenuss
            text="Age"
            Icon={ChevronRight}
            data="23"
            

          />
        </Link>
        
            </div>
      </div>
      
    );
  };
  
  export default AccountInformation;