import React from "react";
import "./settingsSubmenus.css"
import {Avatar} from "@material-ui/core";
import AccDec from "./AccDec";
import { Link, useLocation } from "react-router-dom";
import {Button} from "@mui/material";
//import * as BE from "./SettingsBackendIntegration"

const DeactivateAcc = () =>{
    
    return(
        <div className="settingsSubMenu">
            <div className="SubMenuTitle">
                <span>Deactivate account</span>
            </div>
            
            <br/>
            
           
            <div className="SubMenuTitle">
                <span>This will deactivate your account</span>
            </div>
                <h4>You're about to start the process of deactivating your Twitter account. Your display name,
                    @username, and public profile will no longer be viewable on Twitter.com, Twitter for iOS,
                    or Twitter for Android.</h4>
            <div className="SubMenuTitle">
                <span>What else you should know</span>
            </div>
            <h4>You can restore your Twitter account if it was accidentally or wrongfully deactivated for up to 30 days after deactivation.</h4>
            <h4>Some account information may still be available in search engines, such as Google or Bing.</h4>
            <h4>If you just want to change your @username, you don't need to deactivate your account — edit it in your <a href="/Settings/change-username">settings</a></h4>
            <h4>To use your current @username or email address with a different Twitter account,<a href="/Settings/your-twitter-data">change them </a>before you deactivate this account.</h4>
            <Button
                    id="deactivate_button"
                   // onClick={BE.Post_DeactivateAccount}
                    className="deactivate_button"
                >
                    Deactivate
                </Button>
        </div>
            
    );

};
export default DeactivateAcc;