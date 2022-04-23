import React from "react";
import "./settingsSubmenus.css"
import { Link, useLocation } from "react-router-dom";
import SubsettingsContent from "./SubsettingsContent";
import { ChevronRight } from "@mui/icons-material";
import { LockOutlined } from "@material-ui/icons";


const SecurityandAcess = () => {
    const [location] = React.useState(useLocation().pathname);
    document.title = "Secuirty and access / Twitter";
  

    return (
      <div className="settingsSubMenu">
            <div className="SubMenuTitle">
            <span>Security and account access</span>
            </div>
            <div className="submenu_discription">
                <h3>Manage your account's security and keep track of your account's usage including apps that you have connected to your account.</h3>
                <Link to="" style={{ textDecoration: "none", color:"inherit" }}>
          <SubsettingsContent
            Icon2={LockOutlined}
            text="Security"
            discrip="Manage your account's security.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"  
            Icon={ChevronRight}
             />
        </Link>
            </div>
          
      </div>
    );
  };
  
  export default SecurityandAcess;
  