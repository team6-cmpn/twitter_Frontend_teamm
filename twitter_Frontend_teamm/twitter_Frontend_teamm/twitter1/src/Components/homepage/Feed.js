import React, {useState, useEffect} from "react";
import {RecoilRoot} from "recoil";
import InfiniteScrool from "react-infinite-scroll-component";

import "./feed.css";
import Post from "./Post";
import * as backend from "./backendFeed";

/**
 * feed component
 * @param {*} data
 * @returns layout of home page
 */

function Feed(data) {
  const loginuser_id = localStorage.getItem("userId");

  const [pages, setpage] = useState(2);
  const [postData, setpostData] = useState([]);
  const [ended, setended] = useState(false);
  const [length, set_length] = useState();

  useEffect(() => {
    setpostData(data.data);
  }, [data.data]);
  var resp = [];
  /**
   * fetchdata fromlookup API continously
   */
  const fetchData = () => {
    (async () => {
      resp = await backend.Tweets_lookup(pages + 1, 5);
      setpage(pages + 1);
      if (resp.status === 200) {
        setpostData([...postData, ...resp.data]);
        if (resp.data.length === 0) {
          setended(true);
        }
      }
    })();
  };

  return (
    <div className="for_infinite">
      <RecoilRoot>
        <InfiniteScrool
          dataLength={postData.length}
          next={fetchData}
          hasMore={ended === false}
          loader={<h4 className="loading ">Loading..</h4>}
          endMessage={
            <p style={{textAlign: "center"}} className="loading ">
              <b>Yay!! You are up to date </b>
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
