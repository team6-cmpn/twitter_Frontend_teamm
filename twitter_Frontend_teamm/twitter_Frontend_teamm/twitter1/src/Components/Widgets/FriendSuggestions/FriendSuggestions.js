import React from "react";
//import "./FriendSuggestions.css";
import FriendSuggestionItem from "./FriendSuggestionItem/FriendSuggestionItem";
/**FriendSuggestions
 * Shows friends suggetions for the user
 *  
 * @returns (Layout of friends suggetion)
 */
function FriendSuggestions() {
  return (
    <div className="keywor">
    <div  className="key">
      <div className="keyword__heading">
        <h4>Who to follow</h4>
      </div>
      <div>
        <br/>
      </div>
      
      <FriendSuggestionItem
        username="Dr Magdi"  
        displayName="Magdi Yaakob"
        image="https://myhero.com/images/guest/g277272/hero103155/Magdi-Yacoub.jpg"
      />
       <div>
        <br/>
      </div>
      
      <FriendSuggestionItem
        username="William Henry Gates"
        displayName="Bill Gates"
        image="https://static.techspot.com/images2/news/bigimage/2020/03/2020-03-14-image-4-j.webp"
      />
       <div>
        <br/>
      </div>
      
       <FriendSuggestionItem
        username="Steven Paul Jobs"
        displayName="Steve Jobs"
        image="https://cdn.vox-cdn.com/thumbor/o7bA0tOZDGi-Y7reXlBHcOXC180=/0x137:575x520/920x613/filters:focal(0x137:575x520):format(webp)/cdn.vox-cdn.com/assets/695120/jobs_hero20110329.png"
      />
      {/* <div className="side">
      <ul>
      <li>
      <a href="">
      
       </a>
      </li>
      </ul>
      <ul>
      <li>
      <a href="">
      <FriendSuggestionItem
        username="gitH"
        displayName="Billll Gatesss"
        image="https://static.techspot.com/images2/news/bigimage/2020/03/2020-03-14-image-4-j.webp"
      />
       </a>
       </li>
       </ul>
      <ul>
      <li>
      <a href="">
      <FriendSuggestionItem
        username="node"
        displayName="Node.js"
        image="https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_200x200.jpg"
      />
      </a>
      </li>
      </ul>
      </div> */}
      </div>
    </div>
  );
}

export default FriendSuggestions;
