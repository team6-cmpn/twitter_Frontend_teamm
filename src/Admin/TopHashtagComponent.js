import React from "react";
import "./tophashtagcomponent.css";

/**
 * 
 * this function returns component for each top 5 retweeted tweets
 * @returns 
 */
const TopHashtagComponent = ({ hashtag }) => {
  return (
    <li className="newUsersListItem" id="TopUsersItem">
      <div className="newUsersUser">
        <span className="newUsersUserTitle">{hashtag.retweet_count}</span>
        <span className="newUsersUsername">{hashtag.text}</span>
      </div>
    </li>
  );
};

export default TopHashtagComponent;
