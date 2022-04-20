import React from "react";
import "./newusers.css";
import { Visibility } from "@material-ui/icons";
import BlockForm from "./Users/BlockForm";
import { Link, BrowserRouter } from "react-router-dom";


function NewUsers() {
  return (
    <div className="newUsers">
      <span className="newUsersTitle">Top 5 people with most likes</span>
      <ul className="newUsersList">
        <li className="newUsersListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="newUsersImg"
          />
          <div className="newUsersUser">
            <span className="newUsersUsername">Anna Keller</span>
            <span className="newUsersUserTitle">@username</span>
          </div>
          <Link to="/BlockForm">
            <button className="newUsersButton">
              <Visibility className="newUsersIcon" />
              Display
            </button>
          </Link>
        </li>
        <li className="newUsersListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="newUsersImg"
          />
          <div className="newUsersUser">
            <span className="newUsersUsername">Anna Keller</span>
            <span className="newUsersUserTitle">@username</span>
          </div>
          <button className="newUsersButton">
            <Visibility className="newUsersIcon" />
            Display
          </button>
        </li>
        <li className="newUsersListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="newUsersImg"
          />
          <div className="newUsersUser">
            <span className="newUsersUsername">Anna Keller</span>
            <span className="newUsersUserTitle">@username</span>
          </div>
          <button className="newUsersButton">
            <Visibility className="newUsersIcon" />
            Display
          </button>
        </li>
        <li className="newUsersListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="newUsersImg"
          />
          <div className="newUsersUser">
            <span className="newUsersUsername">Anna Keller</span>
            <span className="newUsersUserTitle">@username</span>
          </div>
          <button className="newUsersButton">
            <Visibility className="newUsersIcon" />
            Display
          </button>
        </li>
        <li className="newUsersListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="newUsersImg"
          />
          <div className="newUsersUser">
            <span className="newUsersUsername">Anna Keller</span>
            <span className="newUsersUserTitle">@username</span>
          </div>
          <button className="newUsersButton">
            <Visibility className="newUsersIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NewUsers;
