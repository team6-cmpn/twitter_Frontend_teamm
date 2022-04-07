import React from "react";
import "./Sidebar.css";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
  FaRegMehBlank
} from "react-icons/fa";
import{
  BiDotsHorizontal
}from "react-icons/bi"
import{
  FiSettings,
} from "react-icons/fi";

import { Avatar, Button } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Explore from "../Explore";
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import {Link} from "react-router-dom";
const Sidebar = () => { 
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <FaHome className="icons logo" />
            Home
            {/* <Link to="/explore">Home</Link> */}
          </a>
        </li>
        <li>
          <a href="/Explore">
            <FaHashtag className="icons" /> 
            Explore 
            {/* <Link to="/Explore">Explore</Link> */}
            
            {/* <Route exact path="/" component={Home} /> */}
          </a>
        </li>
        <li>
          <a href="/Notifications">
            <FaRegBell className="icons" /> Notifications
          </a>
        </li>
        
        <li>
          <a href="">
            <FaRegBookmark className="icons" /> Bookmarks
          </a>
        </li>
        
        <li>
          <a href="">
            <FaUserAlt className="icons" /> Profile
          </a>
        </li>
        <li>
          <a href="">
            <FiSettings className="icons" /> Settings & privacy
          </a>
        </li>
        <div className="sidebar__Btn">
          <a href="">Tweet</a>
        </div>
        
    
        <li>
          <a href="">
          <Avatar className="icons"/>Username  <BiDotsHorizontal className="more"/>
          </a>
        </li>
         {/* <Avatar className="icons"/>hhhhhh  <BiDotsHorizontal className="more"/> */}
         
        {/* </div> */}
      </ul>
    </div>
  );
};

export default Sidebar;
