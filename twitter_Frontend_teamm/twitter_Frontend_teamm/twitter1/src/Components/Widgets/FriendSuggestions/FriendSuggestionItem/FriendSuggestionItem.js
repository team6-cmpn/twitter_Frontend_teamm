import { Avatar } from "@material-ui/core";
import React from "react";
import "./FriendSuggestionItem.css";
import{
  MdVerified,
} from "react-icons/md";
function FriendSuggestionItem(props) {
  return (
    // <div className="key">
    <div className="friendSuggestionsItem">
     
        <Avatar src={props.image} /><div className="n">{props.displayName} </div>
        <MdVerified className="verify"/>
    
        <span className="user_name">@{props.username}</span>
        <div className="friendFollowButton">
        Follow
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
    
    
     </div>
  );
}

export default FriendSuggestionItem;
