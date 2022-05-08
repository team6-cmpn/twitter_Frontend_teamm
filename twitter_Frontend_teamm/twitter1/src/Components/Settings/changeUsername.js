import React, { useState } from "react";
import "./settingsSubmenus.css"
import { Modal,Form,Input,DatePicker,  Checkbox, Alert } from "antd";
import { validateUserName } from "../SignUp/Validate";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import * as Mock from "../NotificationsMock";



const ChangeUsername = () =>{
    const [userName, setUserName] = useState(null);
    const [userNameError, setuserNameError] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true);

    function getUserNameValidation(val){
        setuserNameError(validateUserName(val.target.value))
      };
    function getUserName(val){
        setUserName(val.target.value)
      };
    function SaveButtonActions(){
    Mock.PostChangeUsername(body);
    setUserName(userName);
    alert("Username Succesfully changed")
    }
    var body={
        username:userName,
    }
    
    return(
        <div className="settingsSubMenu">
            <div className="SubMenuTitle">
                <span>Change username</span>
            </div>
            <Form 
              name='form12'
              autoComplete="off"

            >
              <Form.Item 
                name="username"
                rules={[{
                  required: true,
                },
                ]} 
              >
                <span style={{color: 'red'}}>
                  <Input id="usernameChange" style={{ height:40,width:550}}   onChange={getUserNameValidation}  onKeyUp={getUserName}  maxLength={50}  placeholder="Username" />
                  {userNameError}
                </span>
              </Form.Item>
            <br/>
            <br/>
            
            
            
            
            <div className="savebutton" >
                <Button onClick={()=> SaveButtonActions()}
                        
                    id="save_Username"
                    //onClick={}
                    disabled={!userName || userNameError}
                    className="save_username_button"
                >
                    save
                </Button>
                
            </div>     
             </Form>

         </div>
             );

};
export default ChangeUsername;