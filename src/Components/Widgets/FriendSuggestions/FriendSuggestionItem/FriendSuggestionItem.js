import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { Modal } from "antd";
import "./FriendSuggestionItem.css";
import { Link } from "react-router-dom";
import { GetSearchedName } from "../../../Explore/backEndSearch";
import Configure from "../../../../Configure";
import { MdVerified } from "react-icons/md";

const FriendSuggestionItem = ({ props }) => {
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

  console.log("fawzyyyyyyyyyyyy", info);
  console.log("fawzyyyyyyy", Url);
  return (
    // <div className="key">
    <div className="friendSuggestionsItem">
      <Avatar style={{marginRight:"10px"}} src={`${Configure.backURL}${Url}`} />

      {/* {console.log("fawzyyyyyyyyyyyyyy",`${Configure.backURL}${Url}`)} */}
      {/* <Link to={`/${props.username}`} onClickCapture={store_userID} >{props.name}</Link>  */}

      <div className="user_name">{props.username}</div> 
      <div className="searchedname" onClickCapture={store_userID}>
        {props.name}
      </div>

      <div className="friendFollowButton">
        <button
          className="butto"
          onClick={() => {
            if (textState === "Follow") toggleText();
            else onSubModel();
          }}
        >
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
