import React, {useState} from "react";
import {Link} from "react-router-dom";
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
import {Modal,Popover} from "antd";
import 'antd/dist/antd.css';
import {Avatar, Button} from "@material-ui/core";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HeaderTweet from "../homepage/Header_Tweet";
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
  const [isModalVisible, setModalVisible] = useState(false);
  const onSubModel = (stateMain = true) => {
    setModalVisible(stateMain);
  };
  const [popOverVisible, setPopOverVisible] = useState(false);
  const content = (
    <div>
      <Link to='/logout'>Logout username</Link>
    </div>
  );
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
          <a href="">
            <Avatar className="icons" />
            <div className="t">
            Username <Popover content={content} trigger="click" visible={popOverVisible}  title='Username'><BiDotsHorizontal className="more" /></Popover>
            </div>
          </a>
        </li>
        <li>
          <a href="/adminPage">
            <AdminPanelSettingsIcon className="icons" />
            <div className="t">
              Admin 
            </div>
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
        bodyStyle={{height: 200, font: "Helvetica", textAlign: "left"}}
        width={800}
        alignItems={{top: Window}}
        onCancel={() => setModalVisible(false)}
        footer={null}
        maskClosable={false}
      >
        <div className="for_model">
          <HeaderTweet />
        </div>
      </Modal>
    </div>
  );
}

export default Sidebar;
