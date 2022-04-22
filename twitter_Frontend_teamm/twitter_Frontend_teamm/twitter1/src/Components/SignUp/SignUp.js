import './SignUp.css';
import React, {useState} from 'react';
import { Modal,Form,Input,DatePicker,  Checkbox } from "antd";
import {TwitterOutlined,EyeInvisibleOutlined,EyeTwoTone} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import "antd/dist/antd.css";
import moment from 'moment'
import validator from 'validator'
import  mock  from './mockRegistration';
import  * as BE  from './backEndRegistration';

import {validatePassword,validateEmail,validateUserName} from './Validate'



/**
 *SignUp
 * allows user to register through inputting their name,username,email,password, and birth date
 * @returns Sign up modal
 */
function SignUp() {

  const navigate = useNavigate();
  const [isMainModalVisible, setMainModalVisible] = useState(false);
  const [isSubModalVisible, setSubModalVisible] = useState(false);
  const [isSubModal2Visible, setSubModal2Visible] = useState(false); 
  const [isSubModal3Visible, setSubModal3Visible] = useState(false); 
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [name, setName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [userNameError, setuserNameError] = useState('')
  const [date, setDate] = useState(null);
  const [apiResponseMessage, setApiResponseMessage] = useState();
  const [mess, setMess] = useState();
  const [code, setCode] = useState();
  
  


  
  





  
  // second Submodal appear over first submodal & first submodal disappears
  const onSubModal = (e, stateSub = true, stateMain = false) => {
    setSubModalVisible(stateMain);
    setSubModal2Visible(stateSub);
  };
  // third Submodal appear over second submodal & second submodal disappears
  const onSubModal2 = (e, stateSub = true, stateMain = false) => {
    setSubModal2Visible(stateMain);
    setSubModal3Visible(stateSub);
  };

  const returnSubModal = (e, stateSub = true, stateMain = false) => {
    setMainModalVisible(stateSub);
    setSubModal2Visible(stateMain);
  };

  

  function getName(val){
    setName(val.target.value)
  };
  function getUserName(val){
    setUserName(val.target.value)
  };
  function getEmail(val){
    setEmail(val.target.value)
  };

  function getPassword(val){
    setPassword(val.target.value)
  };
  function getPasswordValidation(val){
    setPasswordError(validatePassword(val.target.value))
  };
  function getEmailValidation(val){
    setEmailError(validateEmail(val.target.value))
  };

  function getUserNameValidation(val){
    setuserNameError(validateUserName(val.target.value))
  };

  function getCode(val){
    setCode(val.target.value)
  };
  
  function disabledDate(current) {
    // Can not select days after today and today in calendar of date of birth
    return current && current > moment().endOf('day');
  };
    
 
  
  function buttonState (changedValues, allValues) {
    if ( allValues.name !== undefined && allValues.username !== undefined && allValues.email !== undefined
       && allValues.password !== undefined && allValues.email !== '' && allValues.name !== '' 
       && allValues.email !== '' && allValues.password !== '' && emailError==='' &&  passwordError==='' && userNameError==='' ) {
      setBtnDisabled(false);
    } 
    else {
      setBtnDisabled(true);
    }
  };

    

  

  function SignUpButtonActions(){
    const GotoComplete = mock.post(body);
    const promise=BE.backEndPost(body);
    console.log(promise);
    promise.then((message)=> {
      setApiResponseMessage(message+'. You can re-enter your info by pressing on close (x) sign')
      if(message===''){onSubModal2();}
      // if(result===false){
      //   console.log('account with this email already exist');
      //   setMess(go);
      // }
      // else if(result===true){
      //   setMess('');
      //   onSubModal2();
      // }
   })
  }
  
  var body={
    name:name,
    username:userName,
    email:email,
    dateOfBirth:date,
    password:password
  }

  var verifyBody={
    verificationCode:code,
    
  }
  function verifyButtonActions(){
    const promise=BE.verifyEmail(verifyBody);
    console.log(promise);
    promise.then((message)=> {
      setMess(message)
      if(message===''){navigate("/home");}
     
   })
  //   promise.then((result)=> {
  //     console.log(result);
  //     if(result===true){setMess('Verified.Click to proceed');navigate("/home");}
  //     else if (result ===false){setMess('Plz verify');}
  //  })
  }
 

    

   
    return(
      <div>
        <Modal  
          id='modal1'
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{borderRadius: "70px",textAlign:"center",fontSize:100}}
          bodyStyle={{height: 520 ,font:'Helvetica',borderRadius:'30px',textAlign:"left",marginTop:10}}
          visible={setMainModalVisible}
          okText='Next'
          okButtonProps={{ id:'button',disabled:btnDisabled,shape:'round' , size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex'}}}
          cancelButtonProps={{ style: { display: "none" } }}
          width={500}
          type='circle'
          centered={true}
          onOk={() => setSubModalVisible(true)}
          onCancel={() => navigate("/")}
          >
          
            <span className="text">Create your account</span>
            <Form 
              name='form1'
              autoComplete="off"
              onValuesChange={buttonState}
            >
              <Form.Item 
                name="name"
                rules={[{
                  required: true,
                  message: 'Whats your name?',
                },
                ]}
              >
                <Input style={{ height:40,marginTop:10}}  onChange={ getName} showCount maxLength={50} id="name" placeholder="Name" />
              </Form.Item>

              <Form.Item 
                name="username"
                rules={[{
                  required: true,
                },
                ]} 
              >
                <span style={{color: 'red'}}>
                  <Input id="username" style={{ height:40}}   onChange={getUserNameValidation}  onKeyUp={getUserName}  maxLength={50}  placeholder="Username" />
                  {userNameError}
                </span>
              </Form.Item>
            
              <Form.Item 
                name="email"
                rules={[{
                  required: true,
                // message: 'Please enter a valid email',
                },
                ]} 
              >
                <span style={{color: 'red'}}>
                  <Input id="email" style={{ height:40}}  onChange={getEmailValidation}  onKeyUp={getEmail} maxLength={100}  placeholder="Email" />
                  {emailError}
                </span>
              </Form.Item>
              <Form.Item 
                name="password"
                rules={[{
                  required: true,
                },
                ]} 
              >
                <span style={{color: 'red'}}>
                  <Input.Password  id='password' type='password'style={{ height:40}}  onChange={getPasswordValidation}   onKeyUp={getPassword}    placeholder="password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} /> 
                  {passwordError}
                </span>
              </Form.Item>
          
          
              <b>Date of birth</b>
              <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
              <Form.Item>
                <DatePicker id='date2' showTime={false} onChange={(value)=>setDate(value)} disabledDate={disabledDate} style={{ width: 450,height:50}}  />
              </Form.Item>
           
            </Form>
        </Modal>
        

        <Modal
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          okText='Next'
          okButtonProps={{id:'nextButton3',shape:'round' , size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex'}}}
          cancelButtonProps={{ style: { display: "none" } }}
          visible={isSubModalVisible}
          bodyStyle={{height: 530 ,font:'Helvetica',textAlign:'left'}}//490
          width={500}
          centered={true}
          onOk={()=>{onSubModal()}}
          closable={false}
          maskClosable={false}
        >
          <span className="text">Customize your experience</span>
          <br></br><br></br><br></br>
          <b>Track where you see Twitter content across the web</b>
          <br></br>
          <p>Twitter uses this data to personalize your experience. This web browsing
          navigate will never be stored with your name, email, or phone number. <Checkbox  defaultChecked={true}/>  </p>
          <br></br>
          <p>By signing up, you agree to our Terms, Privacy Policy, and Cookie Use. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. Learn more</p>
        </Modal>
          
        <Modal
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          okText='Sign Up'
          okButtonProps={{id:'signUpButton',shape:'round' , size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex'}}}
          cancelButtonProps={{ style: { display: "none" } }}
          visible={isSubModal2Visible}
          bodyStyle={{height: 530 ,font:'Helvetica',textAlign:'left'}}
          width={500}
          centered={true}
          closable={true}
          maskClosable={false}
          onOk={() => SignUpButtonActions()}
          onCancel={()=>returnSubModal()}
          
        >
          <span className="text">Create your account</span>
          <br></br><br></br>

          <span className="text8">Your @username is unique</span><br /><br></br>
          
          <Form>
            <Form.Item >
              <span>Username</span>
              <Input id='username2' disabled={true} value={userName} style={{ height:50}}  />
            </Form.Item>
          
            <Form.Item>
              <span>Name</span>
              <Input id='name2'  disabled={true} value={name} style={{ height:50}} />
            </Form.Item>

            <Form.Item>
              <span>Email</span>
              <Input id="email2"  disabled={true} value={email} style={{ height:50}} />
            </Form.Item>
              <span style={{color: 'red',fontSize:'100',fontWeight:'bold'}}> {apiResponseMessage}</span> 
          </Form>
          
        </Modal>
        <Modal
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          okText='Next'
          okButtonProps={{id:'verifyButton',shape:'round' , disabled:false,size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex'}}}
          cancelButtonProps={{ style: { display: "none" } }}
          visible={isSubModal3Visible}
          bodyStyle={{height: 530 ,font:'Helvetica',textAlign:'left'}}
          width={500}
          centered={true}
          closable={false}
          maskClosable={false}
          onOk={() => verifyButtonActions()}  
        >
   
          <span className="text">We sent you a verfication code  </span>
          <br></br>
          <span>Write the code to verify {email}</span>
          <Input style={{ height:40,marginTop:10}} onChange={getCode} id="code" placeholder="Code" />
          <span>{mess}</span>
          <br></br>
          <span><button onClick={()=>BE.resendEmail()}>Didn't recieve email?</button></span>
        </Modal>

      </div>
      
    );
};


export default SignUp;
