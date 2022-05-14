import React from "react";
import "./Settings.css"
import './../Home.css';
import SearchBar from "./SearchBar";
import SettingsBox from "../SettingsBox/SettingsBox";
import { Link, useLocation, Outlet } from "react-router-dom";
import SettingsContent from "./settingscontent";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import YourAccount from "./YourAccount";
import MainSettings from "./MainSettings";

function Settings(){
  document.title = "Your Account / Twitter";
  const [location] = React.useState(useLocation().pathname);
  let path = useLocation().pathname;



  return (
      <SettingsBox>
              <div className="settingsMenu">
                  <div className="settingsTitle">
                  <span>Settings</span>
                  </div>
                  <br/>
                  <Link to="your-account" style={{ textDecoration: "none", color:"inherit" }}>
                  <SettingsContent
                    text="Your account"
                    Icon={ChevronRightIcon}
                    active={location === "/your-account" && true}
                  />
                </Link>
                
                <Link to="./privacy-and-saftey" style={{ textDecoration: "none", color:"inherit" }}>
                  <SettingsContent
                    text="Privacy and safety"
                    Icon={ChevronRightIcon}
                    active={location === "/privacy-and-saftey" && true}
                  />
                </Link>

            </div>
            {path === "/Settings" ? (
                <MainSettings />
              ) : (
                <Outlet />
              )}
      
      </SettingsBox>
    
  );


};
export default Settings;
