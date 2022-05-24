import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { Modal } from "antd";
import "./FriendSuggestionItem.css";
import { GetSearchedName } from "../../../Explore/backEndSearch";
import Configure from "../../../../Configure";
import {Follow,destroyFollow}from '../../../User/BackendUser';
import {  toast } from "react-toastify";

const FriendSuggestionItem = ({ props }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const onSubModel = (stateMain = true) => {
    setModalVisible(stateMain);
  };
  const onExist = () => {
    setModalVisible(false);
  };
  
  const [textState, setTextState] = useState("Follow");
  const toggleText = () => {
    setTextState((state) => (state === "Following" ? "Follow" : "Following"));
  };

  var Url;
  var searcheduserid;
  var info = GetSearchedName();
  console.log("farahhhhhhhhhhhhhhhhhhhhhh", info.data?.user);
  if (info.data?.usernames) {
    searcheduserid = info.data?.usernames[1][0]?._id;
    Url = info.data?.usernames[1][0]?.profile_image_url;
    console.log("rana");
  } else {
    searcheduserid = info.data?.user[1][0]?._id;
    Url = info.data?.user[1][0]?.profile_image_url;
    console.log("khadija");
  }

  const store_userID = () => {
    localStorage.setItem("clicked_userID", searcheduserid);

    window.location.href = `/${props.username}`;
  };

  function FollowButtonActions(){
    const resp = Follow();
    resp.then(function (tempresult) {
      console.log(tempresult);
      if (tempresult === "the user is already following the user" && textState==="Follow") {
        toast.dark(`You're already following this user!`);
      }
    })
    if (textState==="Follow")
    toggleText();
    else
    onSubModel();
} 

 
  return (
    // <div className="key">
    <div className="friendSuggestionsItem">
      <Avatar style={{marginRight:"10px"}} src={`${Configure.backURL}${Url}`} />

    
      <div className="user_name">{props.username}</div> 
      <div className="searchedname" onClickCapture={store_userID}>
        {props.name}
      </div>

      <div className="friendFollowButton">
      <button className="butto" id="Follow" onClick={() => FollowButtonActions()}>
          {textState}
        </button>
        
      </div>

     

      <Modal
       
        style={{ textAlign: "center" }}
        visible={isModalVisible}
        bodyStyle={{ height: 300, font: "Helvetica", textAlign: "left" }}
        width={500}
        alignItems={{ top: Window }}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <div className="for_model">
          <div
            style={{
              fontSize: "200%",
              marginTop: "10px",
              color: "black",
              textAlign: "center",
            }}
          >
            Unfollow this user
          </div>
          <div style={{ padding: "30px 30px" }}>
            Their Tweets will no longer show up in your home timeline. You can
            still view their profile
          </div>
          <button
            onClick={() => {
              toggleText();
              onExist();
              destroyFollow();
            }}
            className="followButton"
          >
            Unfollow
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FriendSuggestionItem;
