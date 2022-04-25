import React, {useState, useEffect} from "react";
import HomeTweet from "./Header_Tweet";
import Post from "./Post";
import * as mocked from "./feedmock";
import * as backend from "./backendFeed";

import {RecoilRoot} from "recoil";

import "./feed.css";
import {getTweet} from "./backendFeed";
/**
 * feed component
 * @param {*} subreddit
 * @returns layout of home page
 */

function Feed(subreddit) {
  const [username, setusername] = useState([]);
  const [tweets, showTweet] = useState([]);
  const [mention, setmention] = useState();
  const [date, setdate] = useState();
  const [text_tweet, setItem] = useState();
  const [content, getcontent] = useState([]);

  const [twetted, postedtweet] = useState([]);
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
    //setusername(text.username);
    console.log(mention);
    //console.log(tweet.id);
  });

  return (
    <div className="feed">
      <div className=" feed feed__header">
        <h1>Home</h1>
      </div>
      <HomeTweet />
      <RecoilRoot>
        <Post
          //displayName={item.displayName}
          //username={username}
          //avatar={userlist.}
          mention={mention}
          text={text_tweet}
          //date={date}
          // //id_user={tweeted_user.id}
          // tweeted_id={item.id}
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
            />
          ))}
        </article>
      </RecoilRoot>
    </div>
  );
}

export default Feed;
