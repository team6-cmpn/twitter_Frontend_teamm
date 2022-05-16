import React from "react";
import "./settingsSubmenus.css"
import { Link, useLocation,Outlet,NavLink } from "react-router-dom";
import SubsettingsContent from "./SubsettingsContent";
import { ChevronRight } from "@mui/icons-material";
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
/**
 * this menu make you able to go through the blocked account menu and muted account menu
 * @returns [selected menus]
 */


const PrivacyAndSafety = () => {
    const [location] = React.useState(useLocation().pathname);
    document.title = "Privacy and Safety / Twitter";
  
    return (
      <div className="settingsSubMenu">
            <div className="SubMenuTitle">
            <span>Privacy and safety </span>
            </div>
            <div className="submenu_discription">
                <h3>Manage what information you see and share on Twitter Your Twitter activity.</h3>
                <br/>
                {/* <Link to="MuteandBlock" style={{ textDecoration: "none", color:"inherit" }}> */}
          
          <NavLink to={"../MuteandBlock"}>
          
            <SubsettingsContent
              Icon2={VolumeOffOutlinedIcon}
              text="Mute and block"
              discrip="Manage the accounts, words, and notifications that you've muted or blocked."
              Icon={ChevronRight}
            />
            </NavLink>
            </div>
            <Outlet/>

      </div>
    );
        
  };
  
  export default PrivacyAndSafety;