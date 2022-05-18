import {useNavigate,Link} from "react-router-dom";
import React, {useState} from "react";
import {TwitterOutlined} from '@ant-design/icons';
import './LogOut.css';
import "antd/dist/antd.css";
import { Modal} from "antd";



/**
 *Log out
 *allows a registered user tologout of his/her account
 * @returns Logout popup
 */
function LogOut(){
    const navigate = useNavigate();
    const [isModalVisible, setModalVisible] = useState(false);
    function LogOutButtonAction(){
      localStorage.clear();
      window.location.reload()
      navigate("/");

    }
    return(
        <div>
  
        <Modal
          title={<TwitterOutlined style={{ fontSize: '200%',marginTop:'1px',color:'Dodgerblue'}} />}
          style={{textAlign:"center"}}
          okText='Cancel'
          cancelText='LogOut'
          okButtonProps={{id:'cancelButton',shape:'round' , size:'large', style:{border:'none',width: 250,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex',color:"black",backgroundColor:"white",marginLeft:5}}}
          cancelButtonProps={{id:'logOutButton',shape:'round' , size:'large', style:{width: 250,fontWeight:'bold',alignItems:'center',justifyContent:'center',
          display:'flex',color:"white",backgroundColor:"black",marginLeft:5}}}
          visible={setModalVisible}
          bodyStyle={{height: 90,font:'Helvetica',textAlign:'left'}}
          width={300}
          centered={true}
          onCancel={() => LogOutButtonAction()}
          onOk={() =>navigate("/home")}
          maskClosable={false}
        >
        <span className="text4">Log out of Twitter?</span><br></br>
        <span className="textLogOut">You can always log back in at any time</span>
        </Modal>
        </div>
  
      );








}

export default LogOut;
