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
  const [if_liked, setif_liked] = useState(false);
  const [btnColor, setBtnClass] = useState("black");
  const [like_no, setcount] = useState();

  const [likes_namelist, setlikes_namelist] = useState([]);
  const [retween_namelist, setretween_namelist] = useState([]);

  const loginuser_id = localStorage.getItem("userId");

  const [page, setpage] = useState(1);
  const [postData, setpostData] = useState([]);

  //   {
  //     tweet: {
  //       _id: "628422eafa9842ddef3ecb24",
  //       created_at: "2022-05-17T22:34:18.791Z",
  //       text: "aayyy",
  //       source: "any",
  //       user: "62841c7992c82f01d8d10a04",
  //       imageUrl: "any",
  //       favorites: [],
  //       mention: "any",
  //       retweetUsers: [],
  //       hasImage: true,
  //       __v: 0,
  //     },
  //     user: {
  //       admin_block: {
  //         blocked_by_admin: true,
  //         block_createdAt: "2022-05-18T03:07:41.326Z",
  //         block_duration: 9,
  //         blockNumTimes: 1,
  //       },
  //       _id: "62841c7992c82f01d8d10a04",
  //       name: "fda",
  //       username: "@fda",
  //       phoneNumber: "+201111859872",
  //       email: null,
  //       savedText: ["farah", "fda", "farida"],
  //       savedUsers: [],
  //       bookMarks: [],
  //       relations: ["628425dfdf4222787d261e73"],
  //       notifications: ["628462fdc0f9b2bff5f76d42"],
  //       created_at: "2022-05-17T22:06:49.334Z",
  //       dateOfBirth: null,
  //       confirmed: true,
  //       isAdmin: false,
  //       favorites: [],
  //       isDeactivated: false,
  //       verificationCode: null,
  //       retweets: [],
  //       __v: 0,
  //       followings_count: 1,
  //     },
  //   },
  //   {
  //     tweet: {
  //       _id: "628422eafa9842ddef3ecb24",
  //       created_at: "2022-05-17T22:34:18.791Z",
  //       text: "aayyy",
  //       source: "any",
  //       user: "62841c7992c82f01d8d10a04",
  //       imageUrl: "any",
  //       favorites: [],
  //       mention: "any",
  //       retweetUsers: [],
  //       hasImage: true,
  //       __v: 0,
  //     },
  //     user: {
  //       admin_block: {
  //         blocked_by_admin: true,
  //         block_createdAt: "2022-05-18T03:07:41.326Z",
  //         block_duration: 9,
  //         blockNumTimes: 1,
  //       },
  //       _id: "62841c7992c82f01d8d10a04",
  //       name: "fda",
  //       username: "@fda",
  //       phoneNumber: "+201111859872",
  //       email: null,
  //       savedText: ["farah", "fda", "farida"],
  //       savedUsers: [],
  //       bookMarks: [],
  //       relations: ["628425dfdf4222787d261e73"],
  //       notifications: ["628462fdc0f9b2bff5f76d42"],
  //       created_at: "2022-05-17T22:06:49.334Z",
  //       dateOfBirth: null,
  //       confirmed: true,
  //       isAdmin: false,
  //       favorites: [],
  //       isDeactivated: false,
  //       verificationCode: null,
  //       retweets: [],
  //       __v: 0,
  //       followings_count: 1,
  //     },
  //   },
  //   {
  //     tweet: {
  //       _id: "628422eafa9842ddef3ecb24",
  //       created_at: "2022-05-17T22:34:18.791Z",
  //       text: "aayyy",
  //       source: "any",
  //       user: "62841c7992c82f01d8d10a04",
  //       imageUrl: "any",
  //       favorites: [],
  //       mention: "any",
  //       retweetUsers: [],
  //       hasImage: true,
  //       __v: 0,
  //     },
  //     user: {
  //       admin_block: {
  //         blocked_by_admin: true,
  //         block_createdAt: "2022-05-18T03:07:41.326Z",
  //         block_duration: 9,
  //         blockNumTimes: 1,
  //       },
  //       _id: "62841c7992c82f01d8d10a04",
  //       name: "fda",
  //       username: "@fda",
  //       phoneNumber: "+201111859872",
  //       email: null,
  //       savedText: ["farah", "fda", "farida"],
  //       savedUsers: [],
  //       bookMarks: [],
  //       relations: ["628425dfdf4222787d261e73"],
  //       notifications: ["628462fdc0f9b2bff5f76d42"],
  //       created_at: "2022-05-17T22:06:49.334Z",
  //       dateOfBirth: null,
  //       confirmed: true,
  //       isAdmin: false,
  //       favorites: [],
  //       isDeactivated: false,
  //       verificationCode: null,
  //       retweets: [],
  //       __v: 0,
  //       followings_count: 1,
  //     },
  //   },
  //   {
  //     tweet: {
  //       _id: "628422eafa9842ddef3ecb24",
  //       created_at: "2022-05-17T22:34:18.791Z",
  //       text: "aayyy",
  //       source: "any",
  //       user: "62841c7992c82f01d8d10a04",
  //       imageUrl: "any",
  //       favorites: [],
  //       mention: "any",
  //       retweetUsers: [],
  //       hasImage: true,
  //       __v: 0,
  //     },
  //     user: {
  //       admin_block: {
  //         blocked_by_admin: true,
  //         block_createdAt: "2022-05-18T03:07:41.326Z",
  //         block_duration: 9,
  //         blockNumTimes: 1,
  //       },
  //       _id: "62841c7992c82f01d8d10a04",
  //       name: "fda",
  //       username: "@fdlllllllllllla",
  //       phoneNumber: "+201111859872",
  //       email: null,
  //       savedText: ["farah", "fda", "farida"],
  //       savedUsers: [],
  //       bookMarks: [],
  //       relations: ["628425dfdf4222787d261e73"],
  //       notifications: ["628462fdc0f9b2bff5f76d42"],
  //       created_at: "2022-05-17T22:06:49.334Z",
  //       dateOfBirth: null,
  //       confirmed: true,
  //       isAdmin: false,
  //       favorites: [],
  //       isDeactivated: false,
  //       verificationCode: null,
  //       retweets: [],
  //       __v: 0,
  //       followings_count: 1,
  //     },
  //   },
  // ]);

  var tweet__id = sessionStorage.getItem("ID_tweet");
  const display = localStorage.getItem("getUsername");
  const user = localStorage.getItem("name");

  //console.log(mocked.gettweet(tweets.text));
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
      console.log(backend.Tweets_lookup(page + 1, 2));
      const resp = await fetch(backend.Tweets_lookup(page + 1, 2).data);
      console.log("pages=  " + page + "responce  " + JSON.stringify(resp));
      if (resp.status === 200) {
        setpostData([...resp, ...postData]);
        // console.log(postData);
      }
    })();
  };
  // console.log(postData);

  // var likes_list = [];
  // var retweeters_list = [];
  // retweeters_list = backend.Retweeters_list(tweet_id);
  // retweeters_list.then(function (tempresult) {
  //   setretween_namelist(tempresult?.retweetersList);
  // });

  // for (var j = 0; j < retween_namelist.length; j++) {
  //   console.log(retween_namelist[j].name);
  //   if (retween_namelist[j].username === username) {
  //     setBtnClass("#14fe10");
  //     setretweets_no(retweeters_list.length);
  //   }
  // }
  // likes_list = backend.likes_list(tweet_id);

  // likes_list.then(function (tempresult) {
  //   setlikes_namelist(tempresult?.favoriteusers);

  //   console.log("what", tempresult);
  // });

  // for (var i = 0; i < likes_namelist.length; i++) {
  //   console.log(likes_namelist[i].name);
  //   if (likes_namelist[i].username === username) {
  //     setif_liked(true);
  //     setcount(likes_namelist.length);
  //   }
  // }

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
    // setlikes_namelist(text.user.favorites);
    // setretween_namelist(text.user.retweets);
    // console.log(text.user.favorites);
    // console.log({likes_namelist});
  });

  return (
    <div className="feed">
      <div className=" feed feed__header">
        <h1>Home</h1>
      </div>
      <HomeTweet />
      <RecoilRoot>
        <InfiniteScrool
          dataLength={postData.length}
          next={fetchData}
          hasMore
          loader={<h4 className="loading ">Loading..</h4>}
        >
          {postData.map((userlist, index) => (
            <Post
              displayName={userlist.user.name}
              username={userlist.user.username}
              text={userlist.tweet.text}
              //image={userlist.image}
              //avatar={userlist.avatar}
              tweet_id={userlist.tweet._id}
              mention={userlist.tweet.mention}
              date={userlist.tweet.created_at}
              user_tweeted_id={userlist.tweet.user}
              logedin_user_id={loginuser_id}
              likes={userlist.tweet.favorites.length}
              retweets={userlist.tweet.retweetUsers.length}
              // user_liked_tweet={[userlist.user.favorites]}
              // user_retweted_tweet={[userlist.user.retweets]}
            />
          ))}
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
            // user_liked_tweet={likes_namelist}
            // user_retweted_tweet={retween_namelist}
          />

          <article>
            {twetted.map((userlist, index) => (
              <Post
                displayName={userlist.displayName}
                username={userlist.username}
                text={userlist.text}
                image={userlist.image}
                avatar={userlist.avatar}
                mention={userlist.mentions}
                //date={userlist.date}
                date="2022-04-23T19:38:40.674+0000"
                user_tweeted_id={userlist.id}
                logedin_user_id={loginuser_id}
                likes={userlist.likes.length}
                retweets={userlist.retweets.length}
              />
            ))}
          </article>
        </InfiniteScrool>
      </RecoilRoot>
    </div>
  );
}

export default Feed;
