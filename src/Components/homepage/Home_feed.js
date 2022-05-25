import React, {useState, useEffect} from "react";
import {RecoilRoot} from "recoil";

import * as backend from "./backendFeed";
import HomeTweet from "./Header_Tweet";
import Feed from "./Feed";

function Home_look(event) {
  const [postData, setpostData] = useState([]);
  const [isEnded, setisEnded] = useState(false);

  useEffect(() => {
    var postState = [];
    (async () => {
      postState = await backend.Tweets_lookup(1, 5);
      if (postState.status === 200) {
        setpostData(postState.data);
      } else {
        setisEnded(true);
      }
    })();
  }, []);

  return (
    <div className=" feed respons">
      <div className="  feed__header for_home">
        <span>Home</span>
      </div>
      <HomeTweet flaged_color={false} />
      <RecoilRoot>{postData && <Feed data={postData} />}</RecoilRoot>
    </div>
  );
}
export default Home_look;
