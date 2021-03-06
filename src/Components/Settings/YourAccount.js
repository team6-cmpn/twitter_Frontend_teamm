import React from "react";
import "./settingsSubmenus.css"
import { Link, useLocation } from "react-router-dom";
import SubsettingsContent from "./SubsettingsContent";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { HeartBrokenOutlined, Key } from "@mui/icons-material";
/**
 * it let you select the menu you want to change from this menu 
 * @returns [account menus]
 */

const YourAccount = () => {

    return (

      
      <div className="settingsSubMenu">
            <div className="SubMenuTitle">
            <span>Your Account</span>
            </div>
            <div className="submenu_discription">
                <h3> See information about your account, download an archive of your data, or learn about your account deactivation options</h3>
            </div>
            <Link to="../Your-twitter-data" style={{ textDecoration: "none", color:"inherit" }}>
          <SubsettingsContent
            Icon2={PersonOutlineOutlinedIcon}
            text="Account information"
            discrip="See your account inforamtion like your phone numer and email address.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            Icon={ChevronRightIcon}
          />
        </Link>
        <Link to="../change-password" style={{ textDecoration: "none", color:"inherit" }}>
          <SubsettingsContent
            Icon2={Key}
            text="Change password"
            discrip="Change your password at any time.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            Icon={ChevronRightIcon}
          />
        </Link>
        <Link to="../Deactivate-your-Acc" style={{ textDecoration: "none", color:"inherit" }}>
          <SubsettingsContent
            Icon2={HeartBrokenOutlined}
            text="Deactivate your account "
            discrip="Find out how you can deactivate your account.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            Icon={ChevronRightIcon}
          />
        </Link>
      </div>
    );
  };
  
  export default YourAccount;
  