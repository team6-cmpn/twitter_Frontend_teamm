import React, {useState} from 'react';
import { Modal,Form,Input } from "antd";
import {useNavigate} from "react-router-dom";
import "antd/dist/antd.css";
import { DatePicker} from 'antd';
import moment from 'moment'
import {TwitterOutlined} from '@ant-design/icons';
import  * as mockAPI   from './mockRegistration';

/**
 *GoogleSignUp
 * allows a user to register with his/her google email account 
 * @returns Google sign up modal
 */

function GoogleSignUp(){


  const history = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [isSubModal, setSubModal] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userNameError, setuserNameError] = useState('')

  const onValuesChange = (changedValues, allValues) => {
    if ( allValues.name !== undefined && allValues.name !== '' && allValues.username !== '' && allValues.username !== undefined  && userNameError==='') {
      setBtnDisabled(false);
    }
    else {
      setBtnDisabled(true);
    }
  };

  var body={
    name:name,
    username:userName,
    date:date
  }
  function getName(val){
    setName(val.target.value)
  };

  function getUserName(val){
    setUserName(val.target.value)
  };

  function validateUserName(e){
    var userNameVal=e.target.value
    if (userNameVal[0] === '@') {
      setuserNameError('')

    }
    else {
      setuserNameError('Please start your username with @ symbol')
    }

  }
 
  function signUpButtonAction(){

    mockAPI.googlePost(body);
    history('/home');
  }

  function disabledDate(current) {
    // Can not select days after today and today in calendar of date of birth
    return current && current > moment().endOf('day');
  };

  

  

  return(
    <div>
      <Modal  
        id='modal1'
        title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
        style={{borderRadius: "70px",textAlign:"center",fontSize:100}}
        bodyStyle={{height: 470 ,font:'Helvetica',borderRadius:'30px',textAlign:"left",marginTop:10}}
        visible={setIsModalVisible}
        okText='Sign up'
        okButtonProps={{ id:'button',disabled:btnDisabled,shape:'round' , size:'large', style:{width: 450,fontWeight:'bold',alignItems:'center',justifyContent:'center',
        display:'flex'}}}
        cancelButtonProps={{ style: { display: "none" } }}
        width={500}
        type='circle'
        centered={true}
        maskClosable={false}
        closable={false}
        onOk={() => signUpButtonAction() }
      >

        <span className="text">Fill some info</span>
        <Form  onValuesChange={onValuesChange}>
            <Form.Item 
              name='name' 
              rules={[ {
                required: true,
                message: 'Please enter your name',
              },
              ]} 
            >
              <Input style={{ height:50,marginTop:30}} onChange={getName} showCount maxLength={50} id='name' placeholder="Name" />
            </Form.Item>

            <Form.Item  name='username'>
              <span style={{color: 'red'}}>
                <Input style={{ height:50}}  onChange={(e) => validateUserName(e)} onKeyUp={getUserName}  id='username' placeholder="Username" />
              {userNameError}</span>
            </Form.Item>

            <Form.Item>
              <b>Date of birth</b>
              <p>This won't be public</p>
              <DatePicker id='date' showTime={false} onChange={(value)=>setDate(value)} disabledDate={disabledDate} style={{ width: 450,height:50}}  />
            </Form.Item>
        </Form>




      </Modal>

    </div>

  );
}
export default GoogleSignUp;
