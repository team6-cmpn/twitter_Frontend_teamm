import React, {useState, useEffect} from "react";
import * as backend from "./backendFeed";
import HomeTweet from "./Header_Tweet";

import Feed from "./Feed";
import {RecoilRoot} from "recoil";

function Home_feed() {
  const [page, setpage] = useState(1);
  const [postData, setpostData] = useState([]);
  const [isEnded, setisEnded] = useState(false);

  var postState = [];
  useEffect(() => {
    (async () => {
      postState = await backend.Tweets_lookup(1, 4);

      if (postState.status === 200) {
        setpostData(postState.data);
      } else {
        setisEnded(true);
      }
    })();
  }, []);
  var resp = [];
  const updateData = () => {
    (async () => {
      postState = await backend.Tweets_lookup(page + 1, 4);
      setpage(page + 1);
      if (postState.status === 200) {
        setpostData(postState.data);
        setisEnded(true);
      } else {
        setisEnded(true);
      }
    })();
  };
  console.log({isEnded});
  console.log(backend.Tweets_lookup(page + 1, 2));
  console.log({postData});
  return (
    <div className="feed">
      <div className=" feed feed__header">
        <h1>Home</h1>
      </div>
      <HomeTweet />
      <RecoilRoot>
        {postData && <Feed data={postData} isEnded={isEnded} />}
      </RecoilRoot>
    </div>
  );
}
export default Home_feed;
