import { Avatar } from "@material-ui/core";
import React, {useState}  from "react";
import {Modal} from "antd";
import "./FriendSuggestionItem.css";
import{
  MdVerified,
} from "react-icons/md";
function FriendSuggestionItem(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const onSubModel = (stateMain = true) => {
    setModalVisible(stateMain);
  };
  const onExist = () => {
    setModalVisible(false);
  };
  //const [stat,ToggleBuuton]= useState(false);
  const [textState, setTextState] = useState("Follow");
  const toggleText = () => {
    setTextState((state) => (state === "Following" ? "Follow" : "Following"));
  };
  return (
    // <div className="key">
    <div className="friendSuggestionsItem">
     
        <Avatar src={props.image} /><div className="n">{props.displayName} </div>
        <MdVerified className="verify"/>
    
        <span className="user_name">@{props.username}</span>
        <div className="friendFollowButton">
        <button className="butto" onClick={() => {
         if (textState==="Follow")
         toggleText();
         else
         onSubModel();}}>
         {textState}   
        </button> 
        {/* <button className="butto" onClick={() => ToggleBuuton()}>
            { stat === false ? "Follow":"Following"}
        </button> */}
      </div>
     
     
      {/* <ul >
       <li>
       <a href="">
          {displayName}</a>
        </li>
      </ul>
        
      <ul>
       <li>
          @{username}
       </li>
      </ul>
      
      <div className="friendFollowButton">
        Follow
      </div> */}
    
      <Modal
        // text={
        //   <h1
        //     style={{fontSize: "200%", marginTop: "10px", color: "black" ,"border":"none"}}
        //   >
        //     Unfollow this user{" "}
        //   </h1>
        // }
        style={{textAlign: "center"}}
       
        visible={isModalVisible}
        bodyStyle={{height: 300, font: "Helvetica", textAlign: "left"}}
        width={500}
        alignItems={{top: Window}}
        onCancel={() => setModalVisible(false)}
        footer={null}
        
      >
        <div className="for_model">
          <div style={{fontSize: "200%", marginTop: "10px", color: "black", textAlign: "center" }}>Unfollow this user</div>
          <div style={{padding: "30px 30px"}}>Their Tweets will no longer show up in your home timeline. You can still view their profile</div>
          <button onClick={()=>{toggleText(); onExist();}} className="followButton">Unfollow</button>
        </div>
      </Modal>
     </div>
  );
}

export default FriendSuggestionItem;
