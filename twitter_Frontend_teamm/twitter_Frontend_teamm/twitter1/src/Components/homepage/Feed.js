import React, {useState, useEffect} from "react";
import HomeTweet from "./Header_Tweet";
import Post from "./Post";
import * as mocked from "./feedmock";
import {RecoilRoot} from "recoil";

import "./feed.css";
import {Article} from "@mui/icons-material";

function Feed(subreddit) {
  var gettweetgett;
  var getmentions;
  const [tweets, showTweet] = useState([]);
  const [mention, showmention] = useState([]);

  //const[tweeted,setTweet]=useState([]);
  //const[content,setcontentP]=useState([]);
  const [twetted, postedtweet] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await mocked.GetPostTweet();
      postedtweet(resp);
    })();
  }, []);
  console.log(twetted);

  //  document.title = "home /home";
  //     useEffect(() => {
  //     (async () => {
  //       const resp = await mocked.gettweet();
  //       setTweet(resp);
  //     })();} );

  // useEffect(() => {
  //   (async () => {
  //     const resp = await mocked.getcontenttweet ();
  //     setcontentP(resp);

  //   })();}, []);

  function addTweet(newTweet) {
    showTweet((prevTweet) => {
      return [newTweet, ...prevTweet];
    });
  }

  function allmentions(newmention) {
    showmention((prevmention) => {
      return [newmention, ...prevmention];
    });
  }

  return (
    <div className="feed">
      <div className="feed__header">
        <h1>Home</h1>
      </div>
      <HomeTweet onAdd={addTweet} onmention={allmentions} />
      <RecoilRoot>
        {tweets.map((tweetItem, index) => {
          return (
            <Post
              displayName="mai"
              username="@mai gamda"
              text={tweetItem}
              id="123"
              post="false"
              avatar="https://images.unsplash.com/photo-1516727003284-a96541e51e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          );
        })}
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
