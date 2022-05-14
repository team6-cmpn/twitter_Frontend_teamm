import React from "react";
import "./settingsSubmenus.css"
import { Link, useLocation,Outlet } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
const MainSettings = () => {
    const [location] = React.useState(useLocation().pathname);
    document.title = "Settings / Twitter";
    
    return (
      <div className="settingsSubMenu">
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <SettingsIcon sx={{fontSize: 90}}/>
            <h1>choose the menu you want to </h1>
      </div>
      
    );
  };
  
  export default MainSettings;