import React, {useState, useEffect} from "react";
import HomeTweet from "./Header_Tweet";
import Post from "./Post";
import * as mocked from "./feedmock";
import * as backend from "./backendFeed";
import * as userbackend from "../Profile/backEndProfile";

import {RecoilRoot} from "recoil";

import "./feed.css";

/**
 * feed component
 * @param {*} subreddit
 * @returns layout of home page
 */

function Feed(subreddit) {
  //const [user, setusername] = useState([]);
  const [tweet_id, setid_tweet] = useState([]);
  const [user_id, setid_user] = useState([]);
  const [tweets, showTweet] = useState([]);
  const [mention, setmention] = useState();
  const [date, setdate] = useState();
  const [text_tweet, setItem] = useState();
  const [content, getcontent] = useState([]);
  const [twetted, postedtweet] = useState([]);
  const [disp_img, getimg] = useState([]);

  var tweet__id = sessionStorage.getItem("ID_tweet");
  const display = localStorage.getItem("getUsername");
  const user = localStorage.getItem("name");
  const tweet_user = localStorage.getItem("new_tweet");
  const loginuser_id = localStorage.getItem("userId");

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

  const tweeted_user = backend.Get_newTweet();
  tweeted_user.then((text) => {
    setItem(text.text);
    setmention(text.mention);
    setdate(text.created_at);
    setid_user(text.user);
    console.log(text);
  });

  return (
    <div className="feed">
      <div className=" feed feed__header">
        <h1>Home</h1>
      </div>
      <HomeTweet />
      <RecoilRoot>
        {tweet__id !== "undefined" && (
          <Post
            username={display}
            displayName={user}
            //avatar={userlist}
            mention={mention}
            text={text_tweet}
            date={date}
            tweet_id={tweet__id}
            user_tweeted_id={user_id}
            logedin_user_id={loginuser_id}
          />
        )}

        <article>
          {twetted.map((userlist, index) => (
            <Post
              displayName={userlist.displayName}
              username={userlist.username}
              text={userlist.text}
              image={userlist.image}
              avatar={userlist.avatar}
              mention={userlist.mentions}
              date="2022-04-23T19:38:40.674+0000"
              user_tweeted_id={userlist.id}
              logedin_user_id={loginuser_id}
            />
          ))}
        </article>
      </RecoilRoot>
    </div>
  );
}

export default Feed;
