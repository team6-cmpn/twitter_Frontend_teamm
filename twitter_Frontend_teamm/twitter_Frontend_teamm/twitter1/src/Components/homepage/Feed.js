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
 * @param {*} data
 * @returns layout of home page
 */

function Feed(data, isEnded) {
  const loginuser_id = localStorage.getItem("userId");

  const [pages, setpage] = useState(5);
  const [postData, setpostData] = useState([]);
  const [ended, setended] = useState(isEnded);

  useEffect(() => {
    setpostData(data.data);
  }, [data]);
  var resp = [];

  const fetchData = () => {
    (async () => {
      // console.log(backend.Tweets_lookup(page + 1, 2));
      resp = await backend.Tweets_lookup(pages + 1, 5);
      console.log("page=", pages);
      console.log("responst status " + resp.status);
      setpage(pages + 1);
      if (resp.status === 200) {
        setpostData([...postData, ...resp.data]);
        //console.log(postData);
      } else {
        setended(true);
      }
    })();
  };

  return (
    <div className="for_infinite">
      <RecoilRoot>
        <InfiniteScrool
          dataLength={postData.length}
          next={fetchData}
          hasMore
          loader={<h4 className="loading ">Loading..</h4>}
          endMessage={
            <p style={{textAlign: "center"}}>
              <b>Yay! You are up to date </b>
            </p>
          }
        >
          {postData &&
            postData.map((userlist, index) => (
              <Post
                displayName={userlist.user?.name}
                username={userlist.user?.username}
                text={userlist.tweet?.text}
                image={userlist.tweet?.imageUrl}
                //avatar={userlist.avatar}
                mentioned_user={userlist.tweet?.mentionedUser}
                tweet_id={userlist.tweet?._id}
                mention={userlist.tweet?.mention}
                date={userlist.tweet?.created_at}
                user_tweeted_id={userlist.tweet?.user}
                logedin_user_id={loginuser_id}
                likes={userlist.tweet?.favorites.length}
                retweets={userlist.tweet?.retweetUsers.length}
                user_liked_tweet={userlist?.isLiked}
                user_retweted_tweet={userlist?.isRetweeted}
              />
            ))}
        </InfiniteScrool>
      </RecoilRoot>
    </div>
  );
}

export default Feed;
