import React from "react";
import "./settingsSubmenus.css"
import { Modal,Form,Input,DatePicker,  Checkbox } from "antd";
import { validateEmail } from "../SignUp/Validate";
import * as mock from "../NotificationsMock"
import {Button} from "@mui/material";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChangeEmail(){
   // toast.configure()

    document.title="Change phone / Twitter"
    const [EmailError, setEmailError] = React.useState('')
    const [Email, setEmail] = React.useState(null);
    function GetEmailValidation(val){

        setEmailError(validateEmail(val.target.value))
    }
    function GetEmail(val){
        setEmail(val.target.value)
    }
    function SaveButtonActions(){
        mock.PostChangeEmail(body);
        setEmail(Email);
        {notify()}
        
    };
    
    const notify = () =>{

        toast.info('Email succesfully changed',
        {position: toast.POSITION.BOTTOM_CENTER})
     }
    var body={

        EmailAddress : Email
    }
    return(

    <div className="settingsSubMenu">
        <div className="SubMenuTitle">
            <span>Change Email</span>
        </div>
        <div className="submenu_discription">
                <h3>What would you like to update it to? Your email is not displayed in your public profile on Twitter.</h3>
            </div>
        <Form>
        <Form.Item 
                name="Email"
              >
                <span style={{color: 'red'}}>
                  <Input id="change_Email" style={{ height:40,width:550}}  onChange={GetEmailValidation}  onKeyUp={GetEmail} maxLength={100}  placeholder="Email" />
                  {EmailError}<br></br>
                </span>
              </Form.Item>

        </Form>
        <div className="savebutton">
                <Button onClick={()=>{SaveButtonActions()}}
                    id="save_number"
                    disabled={EmailError || !Email}
                    className="save_username_button"
                >
                    save
                </Button>
                <ToastContainer/>
            </div>
    </div>

)




}
export default ChangeEmail;