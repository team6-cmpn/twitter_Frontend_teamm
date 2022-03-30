import {
    useNavigate,
   
  } from "react-router-dom";
import React, {useState} from "react";
import './forgetPassword.css';
import "antd/dist/antd.css";
import { Modal, Input, Checkbox  } from "antd";
import {TwitterOutlined} from '@ant-design/icons';


function ForgetPassword(){

    const history = useNavigate();
    const [isModalVisible, modelVisible] = useState(false);
    const [isModal2Visible, model2Visible] = useState(false);
    const [isModal3Visible, modal3Visible] = useState(false);

    return(


        <div>
      <Modal
    
        title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
        style={{textAlign:"center"}}
        okText='Search'
        okButtonProps={{shape:'round' , size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
        display:'flex',color:"white",backgroundColor:"black"}}}
        cancelButtonProps={{ style: { display: "none" } }}
        visible={modelVisible}
        bodyStyle={{height: 390 ,font:'Helvetica',textAlign:'left'}}
        width={500}
        centered={true}
        onCancel={() => history("/")}
        onOk={() => model2Visible(true)}
      
        maskClosable={false}
        
      >
      <span class='text3'>Find your Twitter Account</span>
        
          <div >
          
          <Input style={{width:450,marginLeft:5,marginTop:30,height:50}} placeholder="Enter your email or username"></Input>
          {/* <div><button class='googleButton button3-color'>Search</button></div> */}

         
          </div>

        
      </Modal>
      <Modal
    
    title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
    style={{textAlign:"center"}}
    okText='Next'
    okButtonProps={{shape:'round' , size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
        display:'flex',color:"white",backgroundColor:"black"}}}
    cancelButtonProps={{shape:'round' , size:'large', style:{border:'none',width: 450,textdecoration:'underline',fontWeight:'bold',alignItems:'center',justifyContent:'center',
        display:'flex',color:"black",backgroundColor:"white"}}}
    
    visible={isModal2Visible}
    bodyStyle={{height: 390 ,font:'Helvetica',textAlign:'left'}}
    width={500}
    centered={true}
    onCancel={() => history("/")}
    onOk={() => modal3Visible(true)}
    maskClosable={false}
    
  >
  <span class='text3'>How do you want to reset your password?</span>
    
      <div >
        
      <span>We found the following information associated with your account.</span>
      <br></br>
      <span>Email a confirmation code to </span><Checkbox/>
      {/* <div><button class='googleButton button3-color'>Search</button></div> */}

     
      </div>
    </Modal>
    <Modal
    
    title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
    style={{textAlign:"center"}}
    okText='Didnt receive your code?'
    okButtonProps={{shape:'round' , size:'large', style:{border:'none',marginTop:30,textDecoration:'underline',width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
    display:'flex',color:"black",backgroundColor:"white"}}}
    cancelButtonProps={{ style: { display: "none" } }}
    visible={isModal3Visible}
    bodyStyle={{height: 400 ,font:'Helvetica',textAlign:'left'}}
    width={500}
    centered={true}
    onCancel={() => history("/")}
  
    maskClosable={false}
    
  >
  <span class='text3'>Check your email</span>
    
      <div >
        
      <span>You'll receive a code to verify here so you can reset your account password.</span>
      <br></br>
      
      <Input style={{width:450,marginLeft:5,marginTop:30,height:50}} placeholder="Enter your code"></Input>
      {/* <div><button class='googleButton button3-color'>Search</button></div> */}

     
      </div>
    </Modal>









      </div>







    );





}

export default ForgetPassword;