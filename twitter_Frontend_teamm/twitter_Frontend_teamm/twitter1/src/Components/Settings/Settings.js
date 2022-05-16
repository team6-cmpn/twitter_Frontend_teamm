import React from "react";
import "./Settings.css"
import './../Home.css';
import SettingsBox from "../SettingsBox/SettingsBox";
import { Link, useLocation, Outlet } from "react-router-dom";
import SettingsContent from "./settingscontent";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MainSettings from "./MainSettings";
/**
 * it allows you to select the menu you want to change ,either to change you account information
 * @param [dont take] 
 * @returns [doesn't return any thing]
 */
function Settings(){
  document.title = "Your Account / Twitter";
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
                    
                  />
                </Link>
                
                <Link to="./privacy-and-saftey" style={{ textDecoration: "none", color:"inherit" }}>
                  <SettingsContent
                    text="Privacy and safety"
                    Icon={ChevronRightIcon}
                    
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
