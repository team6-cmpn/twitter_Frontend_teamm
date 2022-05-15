import React, { useState } from "react";
import "./settingsSubmenus.css"
import { Modal,Form,Input,DatePicker,  Checkbox, Alert } from "antd";
import { validateUserName } from "../SignUp/Validate";
import {Button} from "@mui/material";
import * as Mock from "../NotificationsMock";

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChangeUsername = () =>{
    const [userName, setUserName] = useState(null);
    const [userNameError, setuserNameError] = useState('')

    function getUserNameValidation(val){
        setuserNameError(validateUserName(val.target.value))
      };
    function getUserName(val){
        setUserName(val.target.value)
      };
    function SaveButtonActions(){
    Mock.PostChangeUsername(body);
    setUserName(userName);
    {notify()}
    }
    var body={
        username:userName,
    }
    const notify = () =>{

      toast('Username succesfully changed',
      {position: toast.POSITION.BOTTOM_CENTER})
   }
    return(
        <div className="settingsSubMenu">
            <div className="SubMenuTitle">
                <span>Change username</span>
            </div>
            <div className="submenu_discription">
                <h3>What would you like to update it to? Your username is displayed in your public profile on Twitter.</h3>
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
                <ToastContainer/>

                
            </div>     
             </Form>

         </div>
             );

};
export default ChangeUsername;