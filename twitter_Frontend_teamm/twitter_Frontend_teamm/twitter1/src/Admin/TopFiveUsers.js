import React from "react";
import "./topfiveusers.css";
import {GetDashBoardstat } from "./MockRegistrationAdmin";
import TopUserItem from "./TopUserComponent";

function TopUsers() {
  const topUsers=GetDashBoardstat()[0];
  console.log("DashBoard",topUsers)
  return (
    <article id="TopFiveUsersWithMostFollowers">
      <div className="newUsers">
      <span className="TopUserTitle"> Top 5 People With Most Followers</span>
        <ul className="newUsersList">
          {topUsers?.users_With_Most_Followers.map((userlist, index) => (
            <TopUserItem key={index} user={userlist} />
          ))}
        </ul>
      </div>
    </article>
  );
}

export default TopUsers;
