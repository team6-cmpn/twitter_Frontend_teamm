import React, {useState, useEffect, useRef} from "react";
import {RecoilRoot} from "recoil";

import "./Home.css";
import "./onepost.css";

import Sidebar from "./Sidebar/Sidebar";
import Trends from "./Widgets/Trends";
import "antd/dist/antd.css";
import Post from "./homepage/Post";
import * as backend from "./homepage/backendFeed";

function Home() {
  const [change, setchange] = useState();
  const [opened_tweet, setopened_tweet] = useState([]);
  const [Favoritelength, setFavoritelength] = useState([]);
  const [blocked, setblocked] = React.useState();
  const loginuser_id = localStorage.getItem("userId");
  var clicked_tweet_id = localStorage.getItem("clicked.ID");

  useEffect(() => {
    (async () => {
      const resp = await backend.getTweet(clicked_tweet_id);
      setopened_tweet(resp);
      const ress = backend.getTweet(clicked_tweet_id);
      ress.then(function (test) {
        setblocked(test.user.admin_block?.blocked_by_admin);
        setFavoritelength(test?.tweet?.favorites.length);
      });
    })();
  }, []);

  return (
    <div className="twitter  ">
      <Sidebar />
      <RecoilRoot>
        <div className=" posted">
          <Post
            displayName={opened_tweet.user?.name}
            username={opened_tweet.user?.username}
            text={opened_tweet.tweet?.text}
            image={opened_tweet.tweet?.imageUrl}
            tweet_id={opened_tweet.tweet?._id}
            mention={opened_tweet.tweet?.mention}
            date={opened_tweet.tweet?.created_at}
            user_tweeted_id={opened_tweet.tweet?.user}
            logedin_user_id={loginuser_id}
            // likes={Favoritelength}
            // retweets={[Retweeters].length}
            user_liked_tweet={opened_tweet?.isLiked}
            user_retweted_tweet={opened_tweet?.isRetweeted}
            mentioned_user={opened_tweet.tweet?.mentionedUser}
            open={true}
          />
        </div>
      </RecoilRoot>
      <Trends />
    </div>
  );
}

export default Home;
