import React, {useState, useEffect} from "react";
import HomeTweet from "./Header_Tweet";
import Post from "./Post";
import * as mocked from "./feedmock";
import * as backend from "./backendFeed";
import * as userbackend from "../Profile/backEndProfile";

import {RecoilRoot} from "recoil";

import "./feed.css";
import {getTweet} from "./backendFeed";
import {Select} from "antd";
/**
 * feed component
 * @param {*} subreddit
 * @returns layout of home page
 */

function Feed(subreddit) {
  //const [user, setusername] = useState([]);
  const [displayN, setDisplay] = useState([]);
  const [tweet_id, setid_tweet] = useState([]);
  const [user_id, setid_user] = useState([]);
  const [tweets, showTweet] = useState([]);
  const [mention, setmention] = useState();
  const [date, setdate] = useState();
  const [text_tweet, setItem] = useState();
  const [content, getcontent] = useState([]);
  const [twetted, postedtweet] = useState([]);
  const [disp_img, getimg] = useState([]);
  

  console.log(mocked.gettweet(tweets.text));
  useEffect(() => {
    (async () => {
      const resp = await mocked.GetPostTweet();
      postedtweet(resp);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const resp = await mocked.GetUserContent();
      getcontent(resp);
    })();
  }, []);

  console.log(twetted.text);
  const tweeted_user = backend.getTweet();
  tweeted_user.then((text) => {
    setItem(text.text);
    setmention(text.mention);

    //setid_tweet(text.id);
    setid_user(text.user);
    //setdate(STR_TO_DATE(text.date, "%h,%i"));
    console.log(date);
    //console.log(tweet.id);
  });
  

  const user_info = userbackend.getUserInfo();
  user_info.then((name) => {
    //setusername(name.username);
    // setDisplay(name.name);
    console.log(user);
  });
  const user=localStorage.getItem("getUsername")
  
  return (
    <div className="feed">
      <div className=" feed feed__header">
        <h1>Home</h1>
      </div>
      <HomeTweet />
      <RecoilRoot>
        <Post
          //username={displayN}
          displayName={user}
          //avatar={userlist}
          mention={mention}
          text={text_tweet}
          //date="date"
          id_user={tweeted_user.id}
          //avatar={disp_img}
          //id_post={id_post}
          post="false"
        />

        <article>
          {twetted.map((userlist, index) => (
            <Post
              key={index}
              displayName={userlist.displayName}
              username={userlist.username}
              text={userlist.text}
              image={userlist.image}
              avatar={userlist.avatar}
              date={userlist.date}
              id_user={user_id}
              //tweeted_id={tweet_id}
            />
          ))}
        </article>
      </RecoilRoot>
    </div>
  );
}

export default Feed;
