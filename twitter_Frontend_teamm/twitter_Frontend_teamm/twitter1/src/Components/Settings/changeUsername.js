import React from "react";
import "./settingsSubmenus.css"

import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";



const ChangeUsername = () =>{
    
    return(
        <div className="settingsSubMenu">
            <div className="SubMenuTitle">
                <span>Change username</span>
            </div>
            <TextField
                    fullWidth
                    id="outlined-required"
                    label="Username"
                    defaultValue="Fathyjr10"
                    />
            <br/>
            <br/>
            <hr />
            <div className="SubMenuTitle">
                <span>Suggestions</span>
                
            </div>
            <h3>fathy</h3>
            <h3>fathy2022</h3>
            <h3>jr10fathy</h3>
            <br/>
            <hr />
            
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
export default ChangeUsername;