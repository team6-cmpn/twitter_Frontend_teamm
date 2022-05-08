import React from "react"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link, useLocation, Outlet } from "react-router-dom";
import SecurityContent from "./SecurityContent";
const Two_Factor =() =>{
    document.title = "Two-factor authantication / Twitter";
    const [location] = React.useState(useLocation().pathname);

    return(
        <div className="settingsSubMenu">
            <div className="SubMenuTitle">
                <span>Two-factor authentication</span>
            </div>
              <div className="SubMenuTitle">
                <span>Addtional password protection</span>
            </div>
        
            <div className="SecurityContent">
                <span>Text message</span>
            <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
            </div>
            <div className="submenu_discription">
                <h3>Use your mobile phone to receive a text message with an authentication code to enter when you log in to Twitter. </h3>
            </div>

            <div className="SecurityContent">
                <span>Authantication app</span>
            <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
            </div>
            <div className="submenu_discription">
                <h3>Use a mobile authentication app to get a verification code to enter every time you log in to Twitter. </h3>
            </div>
            <div className="SecurityContent">
                <span>Secuirty key</span>
            <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
            </div>
            <div className="submenu_discription">
                <h3>Use a security key that inserts into your computer or syncs to your mobile device when you log in to Twitter.
                     You'll need to use a supported mobile device or web browser. </h3>
            </div>

            





        </div>


    );

};
export default Two_Factor;