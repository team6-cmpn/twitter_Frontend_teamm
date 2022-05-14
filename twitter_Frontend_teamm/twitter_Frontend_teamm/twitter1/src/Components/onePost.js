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
  const [disp_img, getimg] = useState([]);
  const loginuser_id = localStorage.getItem("userId");

  var clicked_tweet_id = localStorage.getItem("clicked.ID");
  const tweeted_user = backend.getTweet(clicked_tweet_id);
  tweeted_user.then((text) => {
    setItem(text.text);
    setmention(text.mention);
    setdate(text.created_at);
    //setid_tweet(text._id);
    setid_user(text.user);
    console.log(text.mention);
  });
  return (
    <div className="twitter ">
      <Sidebar />
      <RecoilRoot>
        <div className=" posted">
          <Post
            // username={display}
            // displayName={user}
            //avatar={userlist}
            mention={mention}
            text={text_tweet}
            date={date}
            user_tweeted_id={user_id}
            logedin_user_id={loginuser_id}
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
