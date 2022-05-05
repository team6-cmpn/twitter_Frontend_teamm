import React from "react";
import "./settingsSubmenus.css"

import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";



const Changepassword = () =>{
    
    return(
        <div className="settingsSubMenu">
            <div className="SubMenuTitle">
                <span>Change Your password</span>
            </div>
            <TextField
                fullWidth
                id="password-input"
                label="Current password"
                type="password"
                autoComplete="current-password"
            />
            <br/>
            <br/>
            <hr />
            <br/>
            <TextField
                fullWidth
                id="password-input"
                label="New password"
                type="password"
                autoComplete="current-password"
            />
            <br/>
            <br/>
            <TextField
                fullWidth
                id="password-input"
                label="Confirm  password"
                type="password"
                autoComplete="current-password"
            />
            <br/>
            <br/>   
            <h4>Changing your password will log you out of all your active Twitter sessions except the one you're using at this time</h4>
            
            <div className="savebutton">
                <Button
                    id="save_Username"
                    //onClick={}
                    className="save_username_button"
                >
                    save
                </Button>
            </div>
         </div>
             );

};
export default Changepassword;