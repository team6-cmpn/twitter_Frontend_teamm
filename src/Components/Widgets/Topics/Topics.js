import React from "react";
//import "../FriendSuggestions/FriendSuggestionItem/FriendSuggestionItem.css";
import TopicItem from "./TopicItem/TopicItem";
import "./TopicItem/TopicItem.css";
/**Topics
 * Shows topics for user
 *  
 * @returns (Layout of topics)
 */
function Topics() {
  return (
    
    <div className="keywords">
    <div className="key">
      <div className="keyword__heading">
        <h4>Trends for you</h4>
      </div>
      <TopicItem
        category="Trending"
        title="Vodafone"
        numberoftweet="131K Tweets"
      />
      <TopicItem
        category=""
        title="FIFA World Cup"
        numberoftweet="5M Tweets"
      />
      <TopicItem
        category=""
        title="Egypt"
        numberoftweet="13M Tweets"
      />
      {/* <div className="side"> */}
      {/* <ul>
      <li> 
      <a href=""> 
      
       </a>
      </li>
      </ul>
      <ul>
      <li>
      <a href="">
      <TopicItem
        category=""
        title="HTML"
        numberoftweet="13.1K Tweets"
      />
      </a>
      </li>
      </ul>
      <ul>
      <li>
      <a href="">
      <TopicItem
        category=""
        title="Css"
        numberoftweet="13.1K Tweets"
      />
      </a>
      </li>
      </ul>

      </div> */}
      {/* <TopicItem
        category="Programming · Trending"
        title="HTML"
        numberoftweet="13.1K"
      /> */}
      
    </div>
    </div>
  );
}

export default Topics;
