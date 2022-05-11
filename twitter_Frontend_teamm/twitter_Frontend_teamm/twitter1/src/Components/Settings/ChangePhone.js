import React from "react";
import "./settingsSubmenus.css"
import { Modal,Form,Input,DatePicker,  Checkbox } from "antd";
import { validatePhone } from "../SignUp/Validate";
import * as mock from "../NotificationsMock"
import {Button} from "@mui/material";


function Changephone(){
    document.title="Change phone / Twitter"
    const [PhoneError, setPhoneError] = React.useState('')
    const [Phone, setPhone] = React.useState(null);
    function GetphoneValidation(val){

        setPhoneError(validatePhone(val.target.value))
    }
    function Getphonenumber(val){
        setPhone(val.target.value)
    }
    function SaveButtonActions(){
        mock.PostChangePhone(body);
        setPhone(Phone);
        alert("Phone number Succesfully changed");

    };
    var body={

        PhoneNumber : Phone
    }
    return(

    <div className="settingsSubMenu">
        <div className="SubMenuTitle">
            <span>Change phone</span>
            
        </div>
        <div className="submenu_discription">
                <h3>What would you like to update it to? Your Phone is not displayed in your public profile on Twitter.</h3>
            </div>
        <Form>
        <Form.Item 
                name="PhoneNumber"
              >
                <span style={{color: 'red'}}>
                  <Input id="change_phone_number" style={{ height:40,width:550}}  onChange={GetphoneValidation}  onKeyUp={Getphonenumber} maxLength={100}  placeholder="Phone number" />
                  {PhoneError}<br></br>
                </span>
              </Form.Item>

        </Form>
        <div className="savebutton">
                <Button onClick={()=> SaveButtonActions()}
                    id="save_number"
                    disabled={PhoneError || !Phone}
                    className="save_username_button"
                >
                    save
                </Button>
            </div>
    </div>

)




}
export default Changephone;