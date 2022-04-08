import React from "react";
import "./settingsSubmenus.css"
import { Link, useLocation } from "react-router-dom";
import SubsettingsContent from "./SubsettingsContent";
import { ChevronRight } from "@mui/icons-material";
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
const PrivacyAndSafety = () => {
    const [location] = React.useState(useLocation().pathname);

    return (
      <div className="settingsSubMenu">
            <div className="SubMenuTitle">
            <span>Privacy and safety </span>
            </div>
            <div className="submenu_discription">
                <h3>Manage what information you see and share on Twitter Your Twitter activity.</h3>
                <br/>
                <Link to="/Settings" style={{ textDecoration: "none", color:"inherit" }}>
          <SubsettingsContent
            Icon2={VolumeOffOutlinedIcon}
            text="Mute and block"
            discrip="Manage the accounts, words, and notifications that you've muted or blocked."
            Icon={ChevronRight}
            active={location === "/Settings" && true}
          />
        </Link>
            </div>
          
      </div>
    );
  };
  
  export default PrivacyAndSafety;