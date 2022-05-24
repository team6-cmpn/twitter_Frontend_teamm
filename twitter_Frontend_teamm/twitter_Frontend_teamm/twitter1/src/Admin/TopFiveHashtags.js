import React from "react";
import "./topfivehashtags.css";
import { GetHashtags } from "./MockRegistrationAdmin";
import TopHashtagComponent from "./TopHashtagComponent";

/**
 * 
 * this function returns the most five retweeted tweets
 * 
 */
export default function TopFiveHashtags() {
  const hashtag = GetHashtags();

  return (
    <article id="TopFiveUsersWithMostFollowers">
      <div className="Hashtags">
        <span className="TopUserTitle"> Top 5 Hashtags</span>
        <ul className="newUsersList">
          {hashtag.map((userlist, index) => (
            <TopHashtagComponent key={index} hashtag={userlist} />
          ))}
        </ul>
      </div>
      
    </article>
  );
}
