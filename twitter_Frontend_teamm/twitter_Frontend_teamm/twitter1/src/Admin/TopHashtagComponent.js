import React from "react";
import "./tophashtagcomponent.css";

const TopHashtagComponent = ({ hashtag }) => {
  return (
    <li className="newUsersListItem" id="TopUsersItem">
      <div className="newUsersUser">
        <span className="newUsersUserTitle">{hashtag.trending}</span>
        <span className="newUsersUsername">{hashtag.content}</span>
      </div>
    </li>
  );
};

export default TopHashtagComponent;
