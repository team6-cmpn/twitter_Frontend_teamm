import React from "react";
import "./topfiveusers.css";
import { GetDashBoardstat, GetHashtags, GetNotifications } from "./MockRegistrationAdmin";
import TopUserItem from "./TopUserComponent";
import TopHashtagComponent from "./TopHashtagComponent";
function TopUsers() {
  const topUsers = GetDashBoardstat()[0];
  const hashtag = GetDashBoardstat()[5];
  const notifi=GetNotifications();

  console.log("notifications", notifi);
  return (
    // <article id="TopFiveUsersWithMostFollowers">
      <div className="blocks">
        <div className="newUsers">
          <span className="TopUserTitle">
            Top 5 People With Most Followers
          </span>
          <ul className="newUsersList">
            {topUsers?.users_With_Most_Followers.map((userlist, index) => (
              <TopUserItem key={index} user={userlist} />
            ))}
          </ul>
        </div>
        <div className="newUsers">
          <span className="TopUserTitle"> Top 5 Hashtags</span>
          <ul className="newUsersList">
            {hashtag?.top_Five_Liked_Tweets.map((userlist, index) => (
              <TopHashtagComponent key={index} hashtag={userlist} />
            ))}
          </ul>
        </div>
      </div>
    // </article>
  );
}

export default TopUsers;
