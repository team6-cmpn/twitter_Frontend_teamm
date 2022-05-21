import React, {useState, useEffect} from "react";
import * as backend from "./backendFeed";
import HomeTweet from "./Header_Tweet";

import Feed from "./Feed";
import {RecoilRoot} from "recoil";

function Home_feed(event) {
  const [page, setpage] = useState();
  const [postData, setpostData] = useState([]);
  const [isEnded, setisEnded] = useState(false);

  var postState = [];
  useEffect(() => {
    (async () => {
      postState = await backend.Tweets_lookup(1, 5);
      if (postState.status === 200) {
        setpostData(postState.data);
      } else {
        setisEnded(true);
      }
    })();
  }, []);

  // console.log({isEnded});
  // console.log(backend.Tweets_lookup(1, page + 2));
  return (
    <div className=" feed respons">
      <div className="  feed__header for_home">Home</div>
      <HomeTweet />
      <RecoilRoot>
        {postData && <Feed data={postData} isEnded={isEnded} />}
      </RecoilRoot>
    </div>
  );
}
export default Home_feed;
