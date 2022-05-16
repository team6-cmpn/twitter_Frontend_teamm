import React from "react";
import "./tophashtagcomponent.css";

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
