import React, {useState} from "react";
import "./Sidebar.css";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  // FaRegEnvelope,
  FaRegBookmark,
  // FaClipboardList,
  FaUserAlt,
  // FaMehBlank,
  // FaRegMehBlank
} from "react-icons/fa";
import{
  BiDotsHorizontal
}from "react-icons/bi"
import{
  FiSettings,
} from "react-icons/fi";
import { Modal} from "antd";
import { Avatar, Button } from "@material-ui/core";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Explore from "../Explore";
// import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
// import {Link} from "react-router-dom";
function Sidebar() { 
  const [isModalVisible, setModalVisible] = useState(false);
  const onSubModel = (stateMain = true) => {
    setModalVisible(stateMain);
     
  };
  return (
    
    <div className="sidebar">
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <a href="/home">
            <FaHome className="icons logo" />
            <div className="t">Home</div>
            {/* <Link to="/explore">Home</Link> */}
          </a>
        </li>
        <li>
          <a href="/Explore">
            <FaHashtag className="icons" /> 
            <div className="t">Explore </div>
            {/* <Link to="/Explore">Explore</Link> */}
            
            {/* <Route exact path="/" component={Home} /> */}
          </a>
        </li>
        <li>
          <a href="/Notifications">
            <FaRegBell className="icons" /> 
            <div className="t">Notifications</div>
          </a>
        </li>
        
        <li>
          <a href="">
            <FaRegBookmark className="icons" /> 
            <div className="t">Bookmarks</div>
          </a>
        </li>
        
        <li>
          <a href="/Profile">
            <FaUserAlt className="icons" /> 
            <div className="t">Profile</div>
          </a>
        </li>
        <li>
          <a href="/Settings">
            <FiSettings className="icons" /> 
            <div className="t">Settings & Privacy</div>
          </a>
        </li>
        <div className="sidebar__Btn">
          <a > <button  id="tweet" className="tweet" onClick={()=>onSubModel()}>Tweet</button></a>
        </div>
        
    
        <li>
          <a href="">
          <Avatar className="icons"/>
          <div className="t">Username  <BiDotsHorizontal className="more"/></div>
          </a>
        </li>
         {/* <Avatar className="icons"/>hhhhhh  <BiDotsHorizontal className="more"/> */}
          
        {/* </div> */}
      </ul>
      
      <Modal
          title={<h1 style={{ fontSize: '200%',marginTop:'10px',color:'Dodgerblue'}}>Tweet </h1>}
          style={{textAlign:"center"}}
          cancelButtonProps={{ style: { display: "none" } }}
          visible={isModalVisible}
          bodyStyle={{height:200 ,font:'Helvetica',textAlign:'left'}}
          width={800}
          alignItems={{top: Window}}
          onCancel={() => setModalVisible(false)}
          footer={null}
          maskClosable={false}  
        >
      
        </Modal>
    </div>
  );
};

export default Sidebar;