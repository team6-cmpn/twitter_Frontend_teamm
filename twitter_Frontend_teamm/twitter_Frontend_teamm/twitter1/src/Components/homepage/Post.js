import React, {useContext, useRef, useState} from "react";
import {useNavigate} from "react-router";

import "./feed.css";
import FollowersList from "../Profile/FollowersList";
import * as BE from "../Bookmarks/backEndBookmarks";
import * as backend from "./backendFeed";
import ImageBox from "./ImageBox";
import Configure from "../../Configure";

import {modalState} from "../atoms/modalAtom";
import {Link} from "react-router-dom";
import {FaRegBookmark} from "react-icons/fa";
import {useRecoilState} from "recoil";
import {Modal, Popover} from "antd";
import timeDifference from "./date";

import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";
import {HeartIcon, ShareIcon, TrashIcon} from "@heroicons/react/outline";
import {Button} from "@material-ui/core";

/**
 * post componnt
 * @param {string} displayName,
 * @param {string} username,
 * @param {string} date,
 *  @param {string} image,
 *  @param {string} text,
 *  @param {string}avatar,
 *  @param {boolean}id,
 * @return rendereing component layout of poststhat show in feed
 */
const Post = ({
  displayName,
  username,
  date,
  image,
  text,
  avatar,
  logedin_user_id,
  mention,
  tweet_id,
  user_tweeted_id,
  open,
  likes,
  retweets,
  user_liked_tweet,
  user_retweted_tweet,
  mentioned_user,
  bookmark,
}) => {
  const navigate = useNavigate();
  var timeStamp = timeDifference(new Date(), new Date(date));

  const [test, istest] = React.useState();
  const [if_blocked, setif_blocked] = React.useState();

  const [islikeModalVisible, setlikeModalVisible] = useState(false);
  const [isretweetModalVisible, setretweetModalVisible] = useState(false);
  const [mentioned, setmentioned] = useState(false);
  const [mentionModel, setmentionModel] = useState(false);
  const [like_no, setlike_no] = useState(likes);
  const [retweet_no, setretweet_no] = useState(retweets);
  const [book_mark_color, setbook_mark_color] = useState("black");
  const [like_color, setlike_color] = useState("");
  const [retweet_color, setretweet_color] = useState("");

  const [if_liked, setif_liked] = React.useState(user_liked_tweet);
  const [if_retweeted, setif_retweeted] = React.useState(user_retweted_tweet);

  const [lie, setlikeslist] = useState([]);
  const [ret, setretweeters] = useState([]);

  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const in_tweet = backend.getTweet(tweet_id);

  const user = backend.GetUserInfo(user_tweeted_id);

  user.then(function (result) {
    // console.log("result", result);
    istest(result);
  });
  const res = backend.GetUserInfo(logedin_user_id);

  res.then(function (result) {
    setif_blocked(result.admin_block?.blocked_by_admin);
  });

  var Url_avatar = test?.profile_image_url;

  const [BookmarkState, setBookmarkState] = useState("add");
  // console.log(if_blocked);

  const toggleBookmarkState = () => {
    // console.log("bookmark" + bookmark);
    // if (bookmark === true) {
    //   setBookmarkState("add");
    //   setbook_mark_color("#1d9cf0");
    // } else {
    //   setBookmarkState("Unadd");
    //   setbook_mark_color("black");
    // }
    setBookmarkState((state) => (state === "Unadd" ? "add" : "Unadd"));
  };

  function addOrDeleteBookmarks() {
    localStorage.setItem("clicked.ID", tweet_id);
    if (BookmarkState === "add") {
      toggleBookmarkState();
      setbook_mark_color("#1d9cf0");
      BE.addBookmarks();
      console.log("added");
      // setBookmarkState("Unadd");
      localStorage.setItem("dummy", true);
      // setAdd('add')
    } else if (BookmarkState === "Unadd") {
      toggleBookmarkState();
      setbook_mark_color("black");
      BE.deleteBookmark();
      console.log("unadded");
      // setBookmarkState("add");
      localStorage.setItem("dummy", false);
    }
  }

  const content = (
    <div>
      <Link
        to=""
        id="addOrDeleteBookmarks"
        onClick={() => {
          addOrDeleteBookmarks();
        }}
      >
        {BookmarkState}
      </Link>
    </div>
  );

  if (user_liked_tweet !== "false" && user_liked_tweet !== "true") {
    in_tweet.then((text) => {
      setif_liked(text?.isLiked);
    });
  } else {
    setif_liked(user_liked_tweet);
  }
  if (user_retweted_tweet !== "true" && user_retweted_tweet !== "false") {
    in_tweet.then((text) => {
      setif_retweeted(text?.isRetweeted);
    });
  } else {
    setif_retweeted(user_retweted_tweet);
  }

  /**
   * function like post toggle like button set tweet liked in database
   */

  function likePost() {
    if (if_liked === false) {
      //post is liked
      (async () => {
        const like_post = backend.likePost(tweet_id);
        setlike_color("#e21f05");
        like_post.then((text) => {
          setlike_no(text.favorite_count);
        });
        setif_liked(true);
      })();
    } else if (if_liked === true) {
      //post disliked
      (async () => {
        setlike_color("black");
        const dislike_post = backend.dislikePost(tweet_id);
        dislike_post.then((text) => {
          setlike_no(text.favorite_count);
        });
        setif_liked(false);
      })();
    }
  }
  /**
   * function setting tweet as retweeted in database and changing color
   */

  function retweet() {
    if (if_retweeted === false) {
      //retweet
      (async () => {
        const retweet = backend.Retweet_tweet(tweet_id);
        retweet.then(function (tempresult) {
          setretweet_no(tempresult?.retweet_count);
        });
        setretweet_color("#14fe10");
        setif_retweeted(true);
      })();
    } else if (if_retweeted === true) {
      (async () => {
        //unretwett
        const unretweet = backend.UNRetweet_tweet(tweet_id);
        unretweet.then(function (tempresult) {
          setretweet_no(tempresult?.retweetUsers.length);
        });
        setretweet_color("black");
        setif_retweeted(false);
      })();
    }
  }
  /**
   * function open post in seperat page navigate
   */

  const openPost = async () => {
    navigate("/post");
    likes_list = backend.likes_list(tweet_id);
    likes_list.then(function (tempresult) {
      setlikeslist(tempresult?.favoriteusers);
      setlike_no(tempresult?.favoriteusers.length);
    });

    retweeters_list = backend.Retweeters_list(tweet_id);
    retweeters_list.then(function (tempresult) {
      setretweeters(tempresult?.retweetersList);
      setretweet_no(tempresult?.retweetersList.length);
    });

    localStorage.setItem("clicked.ID", tweet_id);
  };

  /**
   * function open like modelof list of profiles who liked this post
   */
  var likes_list = [];
  var retweeters_list = [];

  function openlikes() {
    likes_list = backend.likes_list(tweet_id);
    if (likes_list.length !== 0) {
      likes_list.then(function (tempresult) {
        setlikeslist(tempresult?.favoriteusers);
        setlike_no(tempresult?.favoriteusers.length);
      });
    }
    setlikeModalVisible(true);
  }
  /**
   * function open retweet model of list of profiles who retweeted this post
   */
  const openretweet = async () => {
    retweeters_list = backend.Retweeters_list(tweet_id);
    retweeters_list.then(function (tempresult) {
      setretweeters(tempresult?.retweetersList);
      setretweet_no(tempresult?.retweetersList.length);
    });

    setretweetModalVisible(true);
  };

  /**
   * rtuern to home  button
   */
  const returnhome = async () => {
    navigate("/home");
  };
  /**
   * delte butoon
   * return to home if clicked
   */
  const deleteTweet = async () => {
    const resp = await backend.DeleteTweet(tweet_id);
    console.log(resp);
    if (resp.message === "success! tweet deleted") {
      window.location.reload();
    }
    if (open === true) {
      navigate("/home");
    }
  };
  /**
   *
   */
  const get_mention = async () => {
    open = false;
    setmentioned(true);
    logedin_user_id !== mentioned_user
      ? mentioned_user
        ? (window.location.href = `/${mention}`)
        : setmentionModel(true)
      : (window.location.href = `/profile`);

    localStorage.setItem("clicked_userID", mentioned_user);
  };
  // console.log("mention use " + mentioned_user);

  /**
   * store the clicked name's user id in storage
   */
  const store_userID = () => {
    localStorage.setItem("clicked_userID", user_tweeted_id);

    logedin_user_id !== user_tweeted_id
      ? (window.location.href = `/${username}`)
      : (window.location.href = `/profile`);
  };

  return (
    <div>
      {open === true && (
        <div className="returnbutt app">
          <Button onClick={returnhome}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={0.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                fontSize={2}
              />
            </svg>
          </Button>
          <div className="tweet_return">Tweet</div>
        </div>
      )}
      <div
        onDoubleClick={() => {
          openPost();
        }}
        className="border"
      >
        <div className="post">
          <div className="img_circle">
            <span>
              <img
                id="user imag "
                src={`${Configure.backURL}${Url_avatar}`}
                onerror="this.style.display='none'"
                alt=""
              />
            </span>
          </div>
          <div className="post__body">
            <div className="inherted">
              <div className="post__headerText app">
                <div onClickCapture={store_userID} className="bolding ">
                  <span id="user @ displayname"> {displayName}</span>
                </div>
                {"  "}
                <p className="post__headerSpecial">{username} </p>{" "}
                <h5 className="dateflex">{timeStamp}</h5>
                <div className=" book_position ">
                  <button id=" bookmarkButton" className=" icon bookmarked">
                    <Popover content={content} trigger="hover">
                      <FaRegBookmark
                        style={{color: book_mark_color}}
                        strokeWidth={1}
                        fontSize="small"
                      />
                    </Popover>
                  </button>
                </div>
              </div>

              <div className="post__tweet app">
                <span class="input" role="textbox" contenteditable>
                  {text}
                  {"  "}
                  <div
                    className="mentioned_inpost"
                    onClickCapture={get_mention}
                  >
                    {mention}
                  </div>
                </span>
              </div>
              <div>{image && <ImageBox images={image} deleteEnabled />}</div>
              {open === true && (
                <div className="app lists">
                  <div className="like_list" onClick={() => openlikes()}>
                    {like_no !== 0 && <span>{like_no}</span>}
                    likes
                  </div>

                  <div className="retweets" onClick={() => openretweet()}>
                    {retweet_no !== 0 && <span>{retweet_no}</span>}
                    retweets
                  </div>
                </div>
              )}
              <div className="post__footer">
                {user_tweeted_id === logedin_user_id ? (
                  <div
                    onClick={(e) => {
                      setIsOpen(true);
                    }}
                  >
                    <div className=" flex ">
                      <button
                        id="delete button "
                        className=" icon delete "
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteTweet().then(() => {
                            console.log("indelet then");
                          });
                        }}
                      >
                        <TrashIcon strokeWidth={1} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="blocked"></div>
                )}
                <div className="blocked likeall">
                  {like_no !== 0 && (
                    <span style={{color: like_color}} className="count">
                      {like_no}
                    </span>
                  )}
                  <button
                    id="like and dislike button"
                    className="likeall"
                    onClick={(e) => {
                      e.stopPropagation();
                      likePost();
                    }}
                  >
                    <div className="  icon ">
                      {if_liked ? (
                        <HeartIconFilled className="liked" strokeWidth={1} />
                      ) : (
                        <HeartIcon strokeWidth={1} />
                      )}
                    </div>
                  </button>
                </div>
                <div className="numbered">
                  {retweet_no !== 0 && (
                    <span className="count" style={{color: retweet_color}}>
                      {retweet_no}
                    </span>
                  )}
                  {if_blocked === false ? (
                    <div className="blocked">
                      <button
                        id=" retweet button"
                        className=" icon share"
                        onClick={(e) => {
                          e.stopPropagation();
                          retweet();
                        }}
                      >
                        <div>
                          {if_retweeted ? (
                            <ShareIcon
                              style={{color: "#14fe10"}}
                              strokeWidth={1}
                              fontSize="small"
                            />
                          ) : (
                            <ShareIcon
                              style={{color: "black"}}
                              strokeWidth={1}
                              fontSize="small"
                            />
                          )}
                        </div>
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          title={
            <h1
              style={{fontSize: "180%", marginTop: "10px", color: "Dodgerblue"}}
            >
              Liked by{" "}
            </h1>
          }
          style={{textAlign: "left"}}
          cancelButtonProps={{style: {display: "none"}}}
          visible={islikeModalVisible}
          bodyStyle={{
            height: "inherit",
            width: "inherit",
            font: "Helvetica",
            textAlign: "left",
          }}
          alignItems={{top: Window}}
          onCancel={() => setlikeModalVisible(false)}
          footer={null}
          maskClosable={false}
        >
          {like_no !== 0 ? (
            <div>
              {lie.map((users, index) => (
                <FollowersList key={index} FollowerAccount={users} />
              ))}
            </div>
          ) : (
            <div>no likes yet!</div>
          )}
        </Modal>

        <Modal
          title={
            <h1
              style={{fontSize: "180%", marginTop: "10px", color: "Dodgerblue"}}
            >
              Retweeted by{" "}
            </h1>
          }
          style={{textAlign: "left"}}
          cancelButtonProps={{style: {display: "none"}}}
          visible={isretweetModalVisible}
          bodyStyle={{
            height: "inherit",
            width: "inherit",
            font: "Helvetica",
            textAlign: "left",
          }}
          alignItems={{top: Window}}
          onCancel={() => setretweetModalVisible(false)}
          footer={null}
          maskClosable={false}
        >
          {retweet_no !== 0 ? (
            <div>
              {ret.map((users, index) => (
                <FollowersList key={index} FollowerAccount={users} />
              ))}
            </div>
          ) : (
            <div>no retweets yet!</div>
          )}
        </Modal>
        <Modal
          title={
            <h1
              style={{fontSize: "180%", marginTop: "10px", color: "Dodgerblue"}}
            >
              No user FOUND !!{" "}
            </h1>
          }
          style={{textAlign: "center"}}
          cancelButtonProps={{style: {display: "none"}}}
          visible={mentionModel}
          alignItems={{top: Window}}
          onCancel={() => setmentionModel(false)}
          footer={null}
          maskClosable={false}
        ></Modal>
      </div>
    </div>
  );
};

export default Post;
