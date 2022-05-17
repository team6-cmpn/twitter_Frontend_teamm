import React, {useState, useEffect} from "react";
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
import {BiDotsHorizontal} from "react-icons/bi";
import {FiSettings} from "react-icons/fi";
import {Modal} from "antd";
import {Avatar, Button} from "@material-ui/core";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HeaderTweet from "../homepage/Header_Tweet";
import * as userbackend from "../Profile/backEndProfile";
import {getUserInfo} from "../Profile/backEndProfile";
import getUsernames from "../Profile/ProfileMock";
import {style} from "@mui/system";
import Pusher from "pusher-js";

import {toast, ToastContainer} from "react-toastify";
//import FriendSuggestionItem from "../Widgets/FriendSuggestions/FriendSuggestionItem/FriendSuggestionItem";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Explore from "../Explore";
// import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
// import {Link} from "react-router-dom";
/**Sidebare
 * Shows icons to navigate through different pages
 *
 * @returns (Layout of side bar & tweet modal)
 */
function Sidebar() {
  const [Item, setItem] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const user_info = userbackend.getUserInfo();
  user_info.then((name) => {
    //setusername(name.username);
    // setDisplay(name.name);
    console.log(user);
  });
  const user = localStorage.getItem("getName");
  const username = localStorage.getItem("getUsername");
  //const usern=localStorage.getItem1("getName")
  // usern.then(data=>{setItem(data)});
  // console.log(Item);

  const [Username, setUsernames] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await getUsernames();
      setUsernames(resp);
    })();
  }, []);

  const onSubModel = (stateMain = true) => {
    setModalVisible(stateMain);
  };
  var pusher;
  var userid = localStorage.getItem("userId");
  var dataTemp;
  useEffect(async () => {
    Pusher.logToConsole = true;
    pusher = new Pusher("a02c7f30c561968a632d", {
      appId: "1406245",

      secret: "5908937248eea3363b9e",
      cluster: "eu",
      useTLS: true,
    });
    var channel = pusher.subscribe(String(userid));
    channel.bind(["block-event"], function (data) {
      dataTemp = data;
      //console.log('pop up message    ',dataTemp)
      //alert(".."+data+"..")
      {
        notify();
      }
    });
    channel.bind(["tweet-event"], function (data) {
      dataTemp = data;
      //console.log('pop up message    ',dataTemp)
      //alert(".."+data+"..")
      {
        notify();
      }
    });
    channel.bind(["favourite-event"], function (data) {
      dataTemp = data;
      //console.log(dataTemp)
      //alert(".."+data+"..")
      {
        notify();
      }
    });
  });
  const notify = () => {
    toast.info("." + dataTemp.notificationHeader.text + ".", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <div className="sidebar d">
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
            {/* <Link to="/home">Home</Link> */}
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
          <a>
            {" "}
            <button id="tweet" className="tweet" onClick={() => onSubModel()}>
              Tweet
            </button>
          </a>
        </div>

        <li>
          <a href="/Profile">
            <Avatar className="icons" />
            <div className="t">
              <span style={{float: "left"}}>{user}</span>
              <span
                style={{
                  color: "silver",
                  "font-weight": "600",
                  "font-size": "16px",
                  float: "Left",
                  textAlign: "left",
                  marginLeft: "0px",
                  marginTop: "10px",
                }}
              >
                {username}{" "}
                <BiDotsHorizontal style={{display: "row"}} className="more" />{" "}
              </span>
              {/* <BiDotsHorizontal style={{"display":"row"}} className="more" /> */}
            </div>
          </a>
        </li>
        <li>
          <a href="/adminPage">
            <AdminPanelSettingsIcon className="icons" />
            <div className="t">Admin</div>
          </a>
        </li>
        {/* <Avatar className="icons"/>hhhhhh  <BiDotsHorizontal className="more"/> */}

        {/* </div> */}
      </ul>

      <Modal
        title={
          <h1
            style={{fontSize: "200%", marginTop: "10px", color: "Dodgerblue"}}
          >
            Tweet{" "}
          </h1>
        }
        style={{textAlign: "center"}}
        cancelButtonProps={{style: {display: "none"}}}
        visible={isModalVisible}
        bodyStyle={{
          height: "inherit",
          width: "inherit",
          font: "Helvetica",
          textAlign: "left",
        }}
        alignItems={{top: Window}}
        onCancel={() => setModalVisible(false)}
        footer={null}
        maskClosable={false}
      >
        <div>
          <HeaderTweet onSubmit={setModalVisible} model={true} />
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default Sidebar;
