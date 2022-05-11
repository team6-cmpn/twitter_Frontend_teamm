import React from "react";
import "./settingsSubmenus.css"
import { Link, useLocation,Outlet } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import SettingsContentInMenus from "./SettingsContentInMenus";

const MuteandBlock = () => {
    const [location] = React.useState(useLocation().pathname);
    document.title = "Mute and block / Twitter";
    
    return (
      <div className="settingsSubMenu">
            <div className="SubMenuTitle">
            <span>Mute and block </span>
            </div>
            <div className="submenu_discription">
                <h3>Manage the accounts that you've muted or blocked.</h3>
                <br/>
                <Link to="../Blocked-accounts" style={{ textDecoration: "none", color:"inherit" }}>
          <SettingsContentInMenus
            text="Blocked Accounts"
            Icon={ChevronRight}
            active={location === "/MuteandBlock" && true}
            

          />
        </Link>
        <Link to="../Muted-accounts" style={{ textDecoration: "none", color:"inherit" }}>
          <SettingsContentInMenus
            text="Muted Accounts"
            Icon={ChevronRight}
            active={location === "/MuteandBlock" && true}
            

          />
        </Link>
        
            </div>
      </div>
      
    );
  };
  
  export default MuteandBlock;