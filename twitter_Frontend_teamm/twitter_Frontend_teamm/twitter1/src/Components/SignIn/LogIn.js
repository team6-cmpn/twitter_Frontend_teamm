import {useNavigate,Link} from "react-router-dom";
import googleIcon from "../images/googleIcon.png"
import React, {useState} from "react";
import './LogIn.css';
import "antd/dist/antd.css";
import GoogleLogin from 'react-google-login';
import { Modal,Form,Input} from "antd";
import {TwitterOutlined,EyeInvisibleOutlined,EyeTwoTone} from '@ant-design/icons';
import  * as mockAPI   from '../SignUp/mockRegistration';

/**
 *Log in
 *allows a registered user to enter his/her username or email & password
 * @returns Login form
 */
function LogIn() {

    const navigate = useNavigate();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModal2Visible, setModal2Visible] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [data, setData] = useState(null);
    const [password, setPassword] = useState(null);
   

    function getData(val){
      setData(val.target.value)
    };

    function getPassword(val){
      setPassword(val.target.value)
    };
  

    const onSubModel = (e, stateSub = true, stateMain = false) => {
      setModalVisible(stateMain);
      setModal2Visible(stateSub);
    };
    const responseGoogle = (response) => {
      console.log(response);
      // history ("/home");
    }
    function logInFailure (response) {
      console.log(response);
    }
  
    function logInSuccess (response) {
      console.log('Login Success: currentUser:', response.profileObj);
      navigate ("/home");
    }

    const buttonState = (changedValues, allValues) => {
      if ( allValues.next !== undefined &&  allValues.next !== ''  ) {
        setBtnDisabled(false);
      } 
      else{
        setBtnDisabled(true);
      }
    };

    

    var body={
      data:data,
      password:password
    }
   
    function nextButtonAction(){

      mockAPI.logInPost(body);
     
    }
  
   
    return(
      <div>
        <Modal
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          okText='Next'
          okButtonProps={{shape:'round' , size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex'}}}
          cancelButtonProps={{ style: { display: "none" } }}
          visible={setModalVisible}
          bodyStyle={{height: 490 ,font:'Helvetica',textAlign:'left'}}
          width={500}
          centered={true}
          onCancel={() => navigate("/")}
          footer={null}
          maskClosable={false}  
        >
          <span className="text4">Sign in to Twitter</span>
          <div>
            <GoogleLogin
              clientId="335712697506-0rdelma7j4jgcc6bicuhnn20e2l8m0fm.apps.googleusercontent.com"
              render={renderProps =>(<button id='googleButton' onClick={renderProps.onClick} disabled={renderProps.disabled} class="googleButton">
              <img className="imggoogle" alt='' src={googleIcon} ></img>
              <span >Sign in with Google</span>
              </button>) }
              buttonText="Login"
              onSuccess={logInSuccess}
              onFailure={logInFailure}
              cookiePolicy={'single_host_origin'}
            />
            <div>
              <div className="flex-parent2">
                <div className="flex-child-edge2"></div>
                <div className="flex-child-text2 tt2 ">or</div>
                <div className="flex-child-edge2"></div>
              </div>
            </div>

            <div>
              <Form onValuesChange={buttonState}>
                <Form.Item name='next'>
                  <Input id='emailOrUserName 'style={{width:300,marginLeft:70,marginTop:1,height:50}} onChange={getData} placeholder="email or username"></Input>
                </Form.Item>
              </Form>

              <button className="googleButton button-color" disabled={btnDisabled} onClick={()=>onSubModel()}>Next</button>
              <Link id='forgetPass' to='/forgetpassword'> <button className="googleButton button2-color">Forget Password?</button></Link>
            </div>
          
            <br/>
            <div><span className='txt3'>Dont have an account? </span><Link id='signUpRedirect' to="/signup">Sign up</Link></div>
          
          
          </div>
        </Modal>

        <Modal
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          okText='Next'
          okButtonProps={{shape:'round' , size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex'}}}
          cancelButtonProps={{ style: { display: "none" } }}
          visible={isModal2Visible}
          bodyStyle={{height: 490 ,font:'Helvetica',textAlign:'left'}}
          width={500}
          centered={true}
          onCancel={() => navigate("/")}
          footer={null}
          maskClosable={false}
        >
          <span className="text3">Enter your password</span>
          <Form onValuesChange={buttonState}>
            <Form.Item name='password'>
              <Input.Password id='password' style={{width:450,height:50}} placeholder="Password" onChange={getPassword} iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}></Input.Password>
            </Form.Item>
          </Form>
          <Link id='forgetPassRedirect' to='/forgetpassword'>Forget password?</Link>
          <div><button id='nextButton' className="googleButton button3-color" onClick={()=>nextButtonAction()} >Log in</button></div>
          <div><span className="txt3">Dont have an account? </span><Link id='signUpLink'  to="/signup">Sign up</Link></div>
        


        </Modal>
      </div>

    );
    
}
  
  
  
export default LogIn;