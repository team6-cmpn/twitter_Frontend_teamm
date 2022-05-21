import React, {useState, useEffect} from "react";
import "./Home.css";
import Sidebar from "./Sidebar/Sidebar";
import Trends from "./Widgets/Trends";
import "antd/dist/antd.css";
import Post from "./homepage/Post";
import {RecoilRoot} from "recoil";
import * as backend from "./homepage/backendFeed";
import "./onepost.css";
import {Sync} from "@material-ui/icons";

function Home() {
  const [change, setchange] = useState();
  const [opened_tweet, setopened_tweet] = useState([]);

  const loginuser_id = localStorage.getItem("userId");
  var clicked_tweet_id = localStorage.getItem("clicked.ID");

  useEffect(() => {
    (async () => {
      const resp = await backend.getTweet(clicked_tweet_id);
      console.log(resp);
      setopened_tweet(resp);
      setchange("ss");
    })();
  }, []);
  console.log(opened_tweet.tweet?.favorites.length);
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
            likes={opened_tweet.tweet?.favorites.length}
            retweets={opened_tweet.tweet?.retweetUsers.length}
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
