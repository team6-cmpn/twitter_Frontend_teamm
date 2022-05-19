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
  const [likes_no, setlikes_no] = useState();
  const [retweets_no, setretweets_no] = useState();
  const [retweetno, setretweetno] = useState();
  const [id_tweet, setid_tweet] = useState();
  const [if_liked, setif_liked] = useState(false);
  const [likes_namelist, setlikes_namelist] = useState(false);
  const [retween_namelist, setretween_namelist] = useState([]);

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
    setid_tweet(text.tweet._id);
    setid_user(text.user.id);
    setlikes_no(text.tweet?.favorites.length);
    setretweets_no(text.tweet?.retweetUsers.length);
    console.log(text.tweet.favorites.length);
    console.log(text.tweet.retweetUsers.length);
    setlikes_namelist(text.tweet?.favorites);
    for (var i = 0; i < 3; i++) {
      // console.log(likes_ids_tweet);
      if ({likes_namelist}?.likes_namelist[i] === loginuser_id) {
        setif_liked(true);
      }
    }
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
            // user_liked_tweet={if_liked}
            tweet_id={id_tweet}
            //avatar={disp_img}
            //id_post={id_post}
            open={true}
            // show={true}
          />
        </div>
      </RecoilRoot>
      <Trends />
    </div>
  );
}

export default Home;
