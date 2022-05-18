import React, {useState, useEffect} from "react";
import HomeTweet from "./Header_Tweet";
import Post from "./Post";
import * as mocked from "./feedmock";
import * as backend from "./backendFeed";
import * as userbackend from "../Profile/backEndProfile";
import InfiniteScrool from "react-infinite-scroll-component";

import {RecoilRoot} from "recoil";

import "./feed.css";

/**
 * feed component
 * @param {*} subreddit
 * @returns layout of home page
 */

function Feed(subreddit) {
  const [tweet_id, setid_tweet] = useState([]);
  const [user_id, setid_user] = useState([]);
  const [tweets, showTweet] = useState([]);
  const [mention, setmention] = useState();
  const [username, setusername] = useState();
  const [displayName, setDisplayname] = useState();
  const [date, setdate] = useState();
  const [likes_no, setlikes_no] = useState();
  const [retweets_no, setretweets_no] = useState();
  const [text_tweet, setItem] = useState();
  const [content, getcontent] = useState([]);
  const [twetted, postedtweet] = useState([]);
  const [disp_img, getimg] = useState([]);

  const loginuser_id = localStorage.getItem("userId");

  const [page, setpage] = useState(1);
  const [postData, setpostData] = useState([]);

  var tweet__id = sessionStorage.getItem("ID_tweet");
  const display = localStorage.getItem("getUsername");
  const user = localStorage.getItem("name");

  console.log(mocked.gettweet(tweets.text));
  useEffect(() => {
    (async () => {
      const resp = await mocked.GetPostTweet();
      postedtweet(resp);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const resp = await mocked.GetPostTweet();
      postedtweet(resp);
    })();
  }, []);
  const fetchData = () => {
    (async () => {
      setpage(page + 1);
      const resp = await backend.Tweets_lookup(page + 1, 2);
      console.log("pages=  " + page + "responce  " + resp);
      if (resp.status === 200) {
        setpostData([...postData, ...resp.data]);
        console.log("sucess" + postData);
      }
    })();
  };

  // useEffect(() => {
  //   (async () => {
  //     const resp = await mocked.GetUserContent();
  //     getcontent(resp);
  //   })();
  // }, []);

  const tweeted_user = backend.Get_newTweet();
  tweeted_user.then((text) => {
    setItem(text.tweet.text);
    setmention(text.tweet.mention);
    setdate(text.tweet.created_at);
    setid_user(text.user.username);
    setusername(text.user.username);
    setDisplayname(text.user.name);
    setid_tweet(text.tweet._id);
    setlikes_no(text.tweet.favorites.length);
    setretweets_no(text.tweet.retweetUsers.length);
    // console.log(retweets_no);
    // console.log(retweets_no.length);
    // console.log(text);
  });

  return (
    <div className="feed">
      <div className=" feed feed__header">
        <h1>Home</h1>
      </div>
      <HomeTweet />
      <InfiniteScrool
        dataLength={postData.length}
        next={fetchData}
        hasMore
        loader={<h4 className="loading ">Loading..</h4>}
      >
        <RecoilRoot>
          <Post
            username={username}
            displayName={displayName}
            //avatar={userlist}
            mention={mention}
            text={text_tweet}
            date={date}
            tweet_id={tweet_id}
            user_tweeted_id={user_id}
            logedin_user_id={loginuser_id}
            likes={likes_no}
            retweets={retweets_no}
          />
          {postData &&
            postData.map((userlist, index) => (
              <Post
                displayName={userlist.user.displayName}
                username={userlist.user.username}
                text={userlist.tweet.text}
                //image={userlist.image}
                //avatar={userlist.avatar}
                mention={userlist.tweet.mentions}
                date={userlist.tweet.created_at}
                user_tweeted_id={userlist.tweet.user}
                logedin_user_id={loginuser_id}
                likes={userlist.tweet.favorites.length}
                retweets={userlist.tweet.retweetUsers.length}
              />
            ))}

          <article>
            {twetted.map((userlist, index) => (
              <Post
                displayName={userlist.displayName}
                username={userlist.username}
                text={userlist.text}
                image={userlist.image}
                avatar={userlist.avatar}
                mention={userlist.mention}
                //date={userlist.date}
                user_tweeted_id={userlist.id}
                logedin_user_id={loginuser_id}
                likes={userlist.likes.length}
                retweets={userlist.retweets.length}
              />
            ))}
          </article>
        </RecoilRoot>
      </InfiniteScrool>
    </div>
  );
}

export default Feed;
