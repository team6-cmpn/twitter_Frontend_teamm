import "../Home.css";
import Sidebar from "../Sidebar/Sidebar";
import "./Bookmarks.css";
import "../StartPage/StartPage.css";
import Trends from "../Widgets/Trends";
import bookmarksImg from "../images/bookmarksImg.png";
import React, { useState } from "react";
import { GetPostTweet } from "../homepage/feedmock";
import Post from "../homepage/Post";
import { RecoilRoot } from "recoil";
import { BiDotsHorizontal } from "react-icons/bi";
import { Modal, Popover } from "antd";
import { Link } from "react-router-dom";

import * as BE from "./backEndBookmarks";
import { setTwoToneColor } from "@ant-design/icons";

/**
 *Bookmarks
 *allows user to save any tweet and delete it if wanted
 * @returns saved tweets
 */

function Bookmarks() {
  const [tweeted, postedtweet] = React.useState([]);
  const [empty, setEmpty] = React.useState(true);

  const content = (
    <Link
      id="clearBookmarks"
      to=""
      onClick={() => {
        BE.deleteAllBookmarks();
        setEmpty(true);
      }}
    >
      Clear all Bookmarks
    </Link>
  );

  var userIds = [];
  React.useEffect(() => {
    (async () => {
      const resp = await BE.GetBookmarks();

      for (let i = 0; i < resp.length; i++) {
        userIds += resp[i].user + ",";
      }

      userIds = userIds.slice(0, -1);
      localStorage.setItem("tag", userIds);
      postedtweet(resp);
      if (resp.length !== 0) {
        setEmpty(false);
      }
      if (userIds.length !== 0) {
        const userResp = BE.getUserLookup();
      }
    })();
  }, []);

  return (
    <RecoilRoot>
      <Sidebar />
      <Trends />
      <div>
        <div className="menu ">
          <div className="title">
            <span>Bookmarks</span>
          </div>
          {empty ? (
            <div className="column flex-container">
              <img className="bookCageImg" alt="" src={bookmarksImg} />
              <span className="text">Save Tweets for Later</span>
              <span className="text2">
                Dont let the good ones fly away! Bookmark Tweets to easily find
                them again in the future.
              </span>
            </div>
          ) : (
            <article>
              {
                <>
                  <Popover content={content} trigger="click">
                    <BiDotsHorizontal className="moreButton" id="moreButton" />
                  </Popover>

                  {/* {countRef.current++} */}
                  {tweeted.map((userlist, index) => (
                    <Post
                      key={index}
                      displayName={localStorage.getItem(
                        `nameForBookmarks ${index}`
                      )}
                      username={localStorage.getItem(
                        `usernameForBookmarks ${index}`
                      )}
                      mention={userlist.mention}
                      text={userlist.text}
                      image={userlist.imageUrl}
                      logedin_user_id={localStorage.getItem("userId")}
                      avatar={userlist.avatar}
                      date={userlist.created_at}
                      tweet_id={userlist._id}
                      user_tweeted_id={userlist.user}
                      bookmark={true}
                    />
                  ))}
                </>
              }
            </article>
          )}
        </div>
      </div>
    </RecoilRoot>
  );
}

export default Bookmarks;
