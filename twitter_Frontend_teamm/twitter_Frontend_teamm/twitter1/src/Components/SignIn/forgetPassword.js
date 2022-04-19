import {
    useNavigate,Link
  } from "react-router-dom";
import React, {useState} from "react";
import './forgetPassword.css';
import "antd/dist/antd.css";
import { Modal, Input, Checkbox, Form  } from "antd";
import {TwitterOutlined} from '@ant-design/icons';
import {validatePassword} from '../SignUp/Validate'

/**
 *Forget Password
 * allows users to reset their passwords after verifying them
 * @returns Forgetpassword modal
 */
function ForgetPassword(){

    const history = useNavigate();
    const [isModalVisible, modelVisible] = useState(false);
    const [isModal2Visible, model2Visible] = useState(false);
    const [isModal3Visible, model3Visible] = useState(false);
    const [isModal4Visible, model4Visible] = useState(false);
    const [isModal5Visible, model5Visible] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [btn2Disabled, setBtn2Disabled] = useState(true);
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [data, setData] = useState(null);
    const [password, setPassword] = useState(null);
    const buttonState = (changedValues, allValues) => {
      if ( allValues.next !== undefined &&  allValues.next !== ''  ) {
        setBtnDisabled(false);
      } 
      else{
        setBtnDisabled(true);
      }
    };
    const buttonState2 = (changedValues, allValues) => {
      if ( allValues.newpassword !== undefined &&  allValues.newpassword !== ''&&  allValues.confirmpassword !== ''
       && allValues.confirmpassword !== undefined && passwordError===''&& confirmPasswordError==='' ) {
        setBtn2Disabled(false);
      } 
      else{
        setBtn2Disabled(true);
      }
    };

    const onSubModal = (e, stateSub = true, stateMain = false) => {
      modelVisible(stateMain);
      model2Visible(stateSub);
    };
    const onSubModal2 = (e, stateSub = true, stateMain = false) => {
      model2Visible(stateMain);
      model3Visible(stateSub);
    };
    const onSubModal3 = (e, stateSub = true, stateMain = false) => {
      model3Visible(stateMain);
      model4Visible(stateSub);
    };
    const onSubModal4 = (e, stateSub = true, stateMain = false) => {
      model4Visible(stateMain);
      model5Visible(stateSub);
    };
    function getData(val){
      setData(val.target.value)
    };
    function getPasswordValidation(val){
      setPasswordError(validatePassword(val.target.value))
    };
    
    function getConfirmPasswordValidation(val){
      setConfirmPasswordError(validatePassword(val.target.value))
      if(password!=val.target.value){
        setConfirmPasswordError('Passwords do not match')
      }
      else{
        setConfirmPasswordError('')
      }

    };
    function getPassword(val){
      setPassword(val.target.value)
    };


    return(


      <div>
        <Modal
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          okText='Search'
          okButtonProps={{shape:'round' , disabled:btnDisabled,size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex',color:"white",backgroundColor:"black"}}}
          cancelButtonProps={{ style: { display: "none" } }}
          visible={modelVisible}
          bodyStyle={{height: 390 ,font:'Helvetica',textAlign:'left'}}
          width={500}
          centered={true}
          onCancel={() => history("/")}
          onOk={() => onSubModal()}
          maskClosable={false}      
        >
          <span class='text3'>Find your Twitter Account</span>
          <div >
            <Form onValuesChange={buttonState}>
              <Form.Item name='next'>
                <Input id='email' style={{width:450,marginLeft:5,marginTop:30,height:50}} onKeyUp={getData} placeholder="Enter your email or username"></Input>
              </Form.Item>
            </Form>
          </div>

        
        </Modal>
        <Modal
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          okText='Cancel'
          cancelText='Next'
          okButtonProps={{shape:'round' , size:'large', style:{border:'none',width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex',color:"black",backgroundColor:"white",marginLeft:2}}}
          cancelButtonProps={{shape:'round' , size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex',color:"white",backgroundColor:"black"}}}
          visible={isModal2Visible}
          bodyStyle={{height: 390 ,font:'Helvetica',textAlign:'left'}}
          width={500}
          centered={true}
          onCancel={() => onSubModal2()}
          onOk={() =>history("/")}
          maskClosable={false}
        >
          <span class='text3'>How do you want to reset your password?</span>
    
          <div >
            <span>We found the following information associated with your account.</span>
            <br></br>
            <span>Email a confirmation link to {data} </span>   
          </div>
        </Modal>
        <Modal
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          okText='Next'
          okButtonProps={{shape:'round' , size:'large', style:{border:'none',marginTop:30,textDecoration:'underline',width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex',color:"black",backgroundColor:"white"}}}
          cancelButtonProps={{ style: { display: "none" } }}
          visible={isModal3Visible}
          bodyStyle={{height: 400 ,font:'Helvetica',textAlign:'left'}}
          width={500}
          centered={true}
          onCancel={() => history("/")}
          onOk={() =>onSubModal3()}
          maskClosable={false}
        >
          <span class='text3'>Check your email</span>
    
          <div >
            <span>You'll receive a link to verify here so you can reset your account password.</span>
            <br></br>
          </div>
        </Modal>
        <Modal
    
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          okText='Reset password'
          okButtonProps={{shape:'round' , size:'large',disabled:btn2Disabled, style:{border:'none',marginTop:30,width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex',color:"white",backgroundColor:"black"}}}
          cancelButtonProps={{ style: { display: "none" } }}
          visible={isModal4Visible}
          bodyStyle={{height: 400 ,font:'Helvetica',textAlign:'left'}}
          width={500}
          centered={true}
          onCancel={() => history("/")}
          onOk={() =>onSubModal4()}
          maskClosable={false}
        >
          <span class='text3'>Reset your password</span>
          <div >
            <span>Strong passwords include numbers, letters, and punctuation marks.
            Resetting your password will log you out of all your active Twitter sessions. </span>
            <br></br>
            <div >
              <Form onValuesChange={buttonState2}>
                <Form.Item name="newpassword">
                  <span style={{color: 'red'}}>
                    <Input.Password id='newPass' style={{width:450,marginLeft:5,marginTop:30,height:50}} onChange={getPasswordValidation}   onKeyUp={getPassword} placeholder="Enter your new password"></Input.Password>
                    {passwordError}
                  </span>
                </Form.Item>
                <Form.Item name="confirmpassword">
                  <span style={{color: 'red'}}>
                    <Input.Password id='confirmPass' style={{width:450,marginLeft:5,height:50}} onChange={getConfirmPasswordValidation}   placeholder="Enter your password one more time"></Input.Password>
                    {confirmPasswordError}
                  </span>
                </Form.Item>
              </Form>
            </div> 
          </div>
        </Modal>
        <Modal
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          visible={isModal5Visible}
          bodyStyle={{height: 450 ,font:'Helvetica',textAlign:'left'}}
          width={500}
          centered={true}
          onCancel={() =>history("/")}
          footer={null}
          maskClosable={false}
        >
          <span class='text3'>You're all set. You've successfully changed your password.</span>
          <div>
            <Link id='resetDone' to='/home'><button className="Button">Continue to twitter</button></Link>
          </div>
        </Modal>

      </div>


    );

}

export default ForgetPassword;