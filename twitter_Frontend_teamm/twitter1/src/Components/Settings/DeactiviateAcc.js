import React from "react";
import "./settingsSubmenus.css"
import {Avatar} from "@material-ui/core";
import AccDec from "./AccDec";
import { Link, useLocation } from "react-router-dom";
import {Button} from "@mui/material";


const DeactivateAcc = () =>{
    
    return(
        <div className="settingsSubMenu">
            <div className="SubMenuTitle">
                <span>Deactivate account</span>
            </div>
            
            <br/>
            
            <Link to="/Profile" style={{ textDecoration: "none", color:"inherit" }}>
            <AccDec
                deactivatedAccount={{
                    userImage:
                    "data:image/jpeg;base64,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" ,
                    displayname: "Mohamed fathy",
                    username: "@mohamedfathy",

                }}
            />
            </Link>
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
                    //onClick={}
                    className="deactivate_button"
                >
                    Deactivate
                </Button>
        </div>
            
    );

};
export default DeactivateAcc;