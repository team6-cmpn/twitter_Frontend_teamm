import React from "react";
import "./Settings.css"
import './../Home.css';
import SearchBar from "./SearchBar";
import SettingsBox from "../SettingsBox/SettingsBox";
import { Link, useLocation } from "react-router-dom";
import SettingsContent from "./settingscontent";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import YourAccount from "./YourAccount";
import SecurityandAcess from "./SecurityAndAccess"
import PrivacyandSafety from "./PrivacyAndSafety";
import Sidebar from "../Sidebar/Sidebar";
function Settings(){
  document.title = "Settings / Twitter";
  const [location] = React.useState(useLocation().pathname);



  return (
      <SettingsBox>
          <div className="settingsMenu">
              <div className="settingsTitle">
              <span>Settings</span>
              </div>
              <SearchBar placeholder="Search Settings" />
              <Link to="/YourAccount" style={{ textDecoration: "none", color:"inherit" }}>
              <SettingsContent
                text="Your account"
                Icon={ChevronRightIcon}
                active={location === "/YourAccount" && true}
              />
            </Link>
            <Link to="/SecurityAndAcess" style={{ textDecoration: "none", color:"inherit" }}>
              <SettingsContent
                text="Security and account acess"
                Icon={ChevronRightIcon}
                active={location === "/SecurityAndAcess" && true}
              />
            </Link>
            <Link to="/PrivacyAndSafety" style={{ textDecoration: "none", color:"inherit" }}>
              <SettingsContent
                text="Privacy and safety"
                Icon={ChevronRightIcon}
                active={location === "/PrivacyAndSafety" && true}
              />
            </Link>

        </div>
      
      <YourAccount/>
      </SettingsBox>
    
  );


};
export default Settings;
