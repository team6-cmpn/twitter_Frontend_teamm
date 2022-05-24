import React from "react";
// import "../Settings/settingsSubmenus.css";
import "../Widgets/FriendSuggestions/FriendSuggestionItem/FriendSuggestionItem.css";
import { Avatar } from "@material-ui/core";
import "./Profile.css";
import { useState } from "react";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import {Follow,destroyFollow}from '../User/BackendUser';
import { ToastContainer, toast } from "react-toastify";

/**Followers List
 * Shows followers list
 *
 * @returns (Layout of followers list)
 */

const FollowersList = ({ FollowerAccount }) => {
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

  console.log(FollowerAccount._id);
  var logged_in_id = localStorage.getItem("userId");
  const store_userID = () => {
    localStorage.setItem("clicked_userID", FollowerAccount?._id);

    // logged_in_id !== FollowerAccount?._id
    //   ? (window.location.href = `/${FollowerAccount?.username}`)
    //   : (window.location.href = `/profile`);
  };
  return (
    <div className="friendSuggestionsItem" >
      <Avatar style={{marginRight:"10px", marginBottom:"5px", marginTop:"5px"}} src="" />
      <div className="user_name">{FollowerAccount?.username}</div>
      <div className="searchedname" onClickCapture={store_userID}>
        {logged_in_id !== FollowerAccount?._id ? (
          <Link to={`/${FollowerAccount?.username}`}>
            {FollowerAccount?.name}
          </Link>
        ) : (
          <Link to={`/profile`}></Link>
        )}
      </div>
      
      {logged_in_id !== FollowerAccount?._id ? (
        <button id="FollowButton" class="ButtonFollow" onClick={() => FollowButtonActions() }>
        {textState}   
    </button> 
      ) : null}

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
            Unfollow this user?
          </div>
          <div style={{ padding: "30px 30px" }}>
            Their Tweets will no longer show up in your home timeline. You can
            still view their profile.{" "}
          </div>
          <button
            id="Unfollow"
            onClick={() => {
              toggleText();
              onExist();
              destroyFollow();
            }}
            className="ButtonBlock"
          >
            Unfollow
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FollowersList;
