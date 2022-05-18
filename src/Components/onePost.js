import React, {useState} from "react";
import "./Home.css";
import Sidebar from "./Sidebar/Sidebar";
import Trends from "./Widgets/Trends";
import "antd/dist/antd.css";
import Post from "./homepage/Post";
import {RecoilRoot} from "recoil";
import * as backend from "./homepage/backendFeed";
import "./onepost.css";

function Home() {
  //   const [tweet_id, setid_tweet] = useState([]);
  const [user_id, setid_user] = useState([]);
  const [mention, setmention] = useState();
  const [username, setusername] = useState();
  const [displayName, setDisplayname] = useState();
  const [date, setdate] = useState();
  const [text_tweet, setItem] = useState();
  // const [disp_img, getimg] = useState([]);
  const loginuser_id = localStorage.getItem("userId");
  const [likesno, setlikesno] = useState();
  const [retweetno, setretweetno] = useState();

  var clicked_tweet_id = localStorage.getItem("clicked.ID");
  const tweeted_user = backend.getTweet(clicked_tweet_id);

  tweeted_user.then((text) => {
    setItem(text.tweet.text);
    setmention(text.tweet.mention);
    setdate(text.tweet.created_at);
    setusername(text.user.username);
    setDisplayname(text.user.name);
    setlikesno(text.tweet.favorites.length);
    setretweetno(text.tweet.retweetUsers.length);
    //setid_tweet(text._id);
    setid_user(text.user.id);
    console.log(text.tweet.retweetUsers.length);
    //console.log(text.mention);
  });
  return (
    <div className="twitter ">
      <Sidebar />
      <RecoilRoot>
        <div className=" posted">
          <Post
            username={displayName}
            displayName={username}
            //avatar={userlist}
            mention={mention}
            text={text_tweet}
            date={date}
            user_tweeted_id={user_id}
            logedin_user_id={loginuser_id}
            retweets={retweetno}
            likes={likesno}
            //avatar={disp_img}
            //id_post={id_post}
            open={true}
          />
        </div>
      </RecoilRoot>
      <Trends />
    </div>
  );
}

export default Home;
