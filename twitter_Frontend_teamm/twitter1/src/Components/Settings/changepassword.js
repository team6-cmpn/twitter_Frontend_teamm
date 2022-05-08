import React from "react";
import "./settingsSubmenus.css"
import { Modal,Form,Input,DatePicker,  Checkbox } from "antd";
import { validatePassword } from "../SignUp/Validate"; 
import { validateConfirmPassword } from "../SignUp/Validate";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import * as mock from "../NotificationsMock"
import {TwitterOutlined,EyeInvisibleOutlined,EyeTwoTone} from '@ant-design/icons';



const Changepassword = () =>{
    const [password, setPassword] = React.useState(null);
    const [Newpassword, setNewPassword] = React.useState(null);
    const [Confirmpassword, setConfirmPassword] =React.useState(null);
    const [passwordError, setPasswordError] = React.useState('')
    const [newpasswordError, setnewPasswordError] = React.useState('')
    // const [newConfpasswordError, setnewConfPasswordError] = React.useState('')
    
    function getPassword(val){
        setPassword(val.target.value)
    };
    function getNewPassword(val){
        setNewPassword(val.target.value)
    };
    function getConfirmPassword(val){
        setConfirmPassword(val.target.value)
    };
    function getPasswordValidation(val){
        setPasswordError(validatePassword(val.target.value))
    };
    function getNewPasswordValidation(val){
        setnewPasswordError(validatePassword(val.target.value))
    };
  //   function getConfPasswordValidation(val){
  //     setnewConfPasswordError(validateConfirmPassword(val.target.value))
  // };
  
    function SaveButtonActions(){
        mock.PostChangePassword(body);
        setPassword(password);
        setNewPassword(Newpassword);
        setConfirmPassword(Confirmpassword);
        alert("Password Succesfully changed");

    };
    var body={
        currentPassword : password,
        password : Newpassword,
        confirmNewPassword : Confirmpassword
    }
    return(
        <div className="settingsSubMenu">
            <div className="SubMenuTitle">
                <span>Change Your password</span>
            </div>
            <Form>
            <Form.Item 
                name="password"
                rules={[{
                  required: true,
                },
                ]} 
              >
                <span style={{color: 'red'}}>
                  <Input.Password  id='password' type='password'style={{ height:40,width:550}}  onChange={getPasswordValidation}   onKeyUp={getPassword}    placeholder="password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} /> 
                  {passwordError}
                </span>
              </Form.Item>
              <br/>
              <Form.Item 
                name=" new password"
                rules={[{
                  required: true,
                },
                ]} 
              >
                <span style={{color: 'red'}}>
                  <Input.Password  id='Newpassword' type='password'style={{ height:40,width:550}}  onChange={getNewPasswordValidation}   onKeyUp={getNewPassword}    placeholder=" new password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} /> 
                  {newpasswordError}
                </span>
              </Form.Item>
              <Form.Item 
                name="Confirm password"
                rules={[{
                  required: true,
                },
                ]} 
              >
                <span style={{color: 'red'}}>
                  <Input.Password  id='Confirmpassword' type='password'style={{ height:40,width:550}}  onChange={getNewPasswordValidation}   onKeyUp={getConfirmPassword}    placeholder=" confirm password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} /> 
                  {/* {newConfpasswordError} */}
                  {/* {passwordError} */}
                </span>
              </Form.Item>
            
            </Form>
            <br/>
            <br/>
            <hr />
            <br/>
             
            <h4>Changing your password will log you out of all your active Twitter sessions except the one you're using at this time</h4>
            
            <div className="savebutton">
                <Button onClick={()=> SaveButtonActions()}
                    id="save_Username"
                    disabled={!password || !Newpassword || !Confirmpassword || passwordError || newpasswordError}
                    className="save_username_button"
                >
                    save
                </Button>
            </div>
         </div>
             );

};
export default Changepassword;