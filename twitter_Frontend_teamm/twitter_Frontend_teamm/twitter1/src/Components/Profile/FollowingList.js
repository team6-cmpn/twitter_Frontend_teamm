import React from "react";
import "../Settings/settingsSubmenus.css";
import {Avatar} from "@material-ui/core";
import  { useState} from 'react';
import {Modal} from "antd";
import { Link } from 'react-router-dom';
// import {GetFollowingList} from './backEndProfile'
/**Following List
 * Shows following list
 *  
 * @returns (Layout of following list)
 */
const FollowingList = ({ FollowingAccount }) => {
    const [textState, setTextState] = useState("Follow");
    const toggleText = () => {
      setTextState((state) => (state === "Following" ? "Follow" : "Following"));
    };
    const [isModalVisible, setModalVisible] = useState(false);
    const onSubModel = (stateMain = true) => {
      setModalVisible(stateMain);
    };
    const onExist = () => {
      setModalVisible(false);
    };
    console.log(FollowingAccount._id)
    return (
        <div className="Accountinfo_dec">
            <Avatar src='' />
            <h5 onClick={localStorage.setItem("clicked_userID",FollowingAccount._id)}><Link to={`/${FollowingAccount.username}`}>{FollowingAccount.name}</Link></h5>
            <h6>{FollowingAccount.username}</h6>
            <button id="FollowButton" class="ButtonFollow" onClick={() =>{if (textState==="Follow")
            toggleText();
            else
            onSubModel();} }>
                {textState}   
            </button> 
                    <Modal
                    style={{textAlign: "center"}}
                
                    visible={isModalVisible}
                    bodyStyle={{height: 300, font: "Helvetica", textAlign: "left"}}
                    width={500}
                    alignItems={{top: Window}}
                    onCancel={() => setModalVisible(false)}
                    footer={null}
                    
                >
                    <div className="for_model">
                    <div style={{fontSize: "200%", marginTop: "10px", color: "black", textAlign: "center" }}>Unfollow this user?</div>
                    <div style={{padding: "30px 30px"}}>Their Tweets will no longer show up in your home timeline. You can still view their profile. </div>
                    <button id="Unfollow" onClick={()=>{toggleText(); onExist();}} className="ButtonBlock">Unfollow</button>
                    </div>
                </Modal>
        </div>
    );
  }
  
  export default FollowingList;