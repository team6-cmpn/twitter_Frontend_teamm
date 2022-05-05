import React from "react"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link, useLocation, Outlet } from "react-router-dom";
import SecurityContent from "./SecurityContent";

const Security =() =>{
    document.title = "Security / Twitter";
    const [location] = React.useState(useLocation().pathname);

    return(
        <div className="settingsSubMenu">
            <div className="SubMenuTitle">
                <span>Security</span>
            </div>
            <div className="submenu_discription">
                <h3>Manage your account's security.</h3>
            </div>
            <div className="SubMenuTitle">
                <span>Two-factor authentication</span>
            </div>
            <div className="submenu_discription">
                <h3>Help protect your account from unauthorized access by requiring a second authentication method in addition to your Twitter password.
                     You can choose a text message, authentication app, or security key.</h3>
            </div>

            <Link to="../two-factor" style={{ textDecoration: "none", color:"inherit" }}>
            <SecurityContent
                    text="Two-factor authentication"
                    Icon={ChevronRightIcon}
                    active={location === "" && true}
            />
            </Link>
              <div className="SubMenuTitle">
                <span>Addtional password protection</span>
            </div>
            <div className="submenu_discription">
                <h3>Enabling this setting adds extra security to your account by requiring additional information to reset your password.
                     If enabled, you must provide either the phone number or email address associated with your account in order to reset your password.
                     </h3>
            </div>

            <div className="SecurityContent">
                <span>Password reset protect</span>
            <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>

            </div>
           
            





        </div>


    );

};
export default Security;