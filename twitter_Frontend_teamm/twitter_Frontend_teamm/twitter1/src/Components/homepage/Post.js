import React, {useState, useEffect} from "react";
import "./feed.css";
import {modalState, postIdState} from "../atoms/modalAtom";
import {useRecoilState} from "recoil";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";
import {HeartIcon, ShareIcon, TrashIcon} from "@heroicons/react/outline";
import FollowersList from "../Profile/FollowersList";
import * as BE from "../Bookmarks/backEndBookmarks";
import * as mocked from "./feedmock";
import * as backend from "./backendFeed";
import {likes_list} from "./backendFeed";
import {Modal, Result, Popover} from "antd";
import timeDifference from "./date";
import {style} from "@mui/system";
import ImageBox from "./ImageBox";
import {useNavigate} from "react-router";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {hover} from "@testing-library/user-event/dist/hover";
import {FaRegBookmark} from "react-icons/fa";
import {click} from "@testing-library/user-event/dist/click";

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
}) => {
  const navigate = useNavigate();
  var timeStamp = timeDifference(new Date(), new Date(date));

  const [if_liked, setif_liked] = useState();
  const [if_retweeted, setif_retweeted] = useState();
  const [like_no, setlike_no] = useState(likes);
  const [retweet_no, setretweet_no] = useState(retweets);
  const [like_color, setlike_color] = useState("");
  const [retweet_color, setretweet_color] = useState("");
  const [islikeModalVisible, setlikeModalVisible] = useState(false);
  const [isretweetModalVisible, setretweetModalVisible] = useState(false);
  const [mentioned, setmentioned] = useState(false);
  const [lie, setlikeslist] = useState([]);
  const [ret, setretweeters] = useState([]);
  const [likes_ids_tweet, setlikes_ids_tweet] = useState([]);
  const [retween_ids_tweet, setretween_ids_tweet] = useState([]);
  const [book_mark_color, setbook_mark_color] = useState("black");
  const [add, setAdd] = useState("");
  // localStorage.setItem('bookmarkFlag',false);
  const [BookmarkState, setBookmarkState] = useState("add");
  const toggleBookmarkState = () => {
    setBookmarkState((state) => (state === "Unadd" ? "add" : "Unadd"));
  };

  const if_blocked = localStorage.getItem("isblocked");
  function addOrDeleteBookmarks() {
    localStorage.setItem("clicked.ID", tweet_id);
    if (BookmarkState === "add") {
      toggleBookmarkState();
      setbook_mark_color("#1d9cf0");
      BE.addBookmarks();
      console.log("added");
      localStorage.setItem("dummy", true);
      // setAdd('add')
    } else if (BookmarkState === "Unadd") {
      toggleBookmarkState();
      setbook_mark_color("black");
      BE.deleteBookmark();
      console.log("unadded");
      localStorage.setItem("dummy", false);
    }
  }

  const content = (
    <div>
      <Link
        to=""
        onClick={() => {
          addOrDeleteBookmarks();
        }}
      >
        {BookmarkState}
      </Link>
    </div>
  );

  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const in_tweet = backend.getTweet(tweet_id);
  console.log("in post likes number" + likes);

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
      console.log("retweeeet number " + retweet_no);
    });
  } else {
    setif_retweeted(user_retweted_tweet);
  }

  /**
   * function like post toggle like button set tweet liked in database
   */

  function likePost() {
    console.log("liked" + if_liked);
    if (if_liked === false) {
      //post is liked
      (async () => {
        const like_post = backend.likePost(tweet_id);
        console.log(tweet_id);
        setlike_color("#e21f05");
        console.log(like_post);
        like_post.then((text) => {
          console.log(text);
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
    console.log("retweeted==" + if_retweeted);
    if (if_retweeted === false) {
      //retweet
      (async () => {
        console.log("ini false");
        const retweet = backend.Retweet_tweet(tweet_id);
        console.log(retweet);
        retweet.then(function (tempresult) {
          setretweet_no(tempresult?.retweet_count);
          console.log(tempresult?.retweetUsers.length);
        });
        setretweet_color("#14fe10");
        setif_retweeted(true);
        console.log("after seytting " + if_retweeted);
      })();
    } else if (if_retweeted === true) {
      (async () => {
        console.log("ini true");
        //unretwett
        const unretweet = backend.UNRetweet_tweet(tweet_id);
        console.log(unretweet);
        unretweet.then(function (tempresult) {
          console.log(tempresult?.retweet_count);
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
  var clicked = "";

  const openPost = async () => {
    if (tweet_id === "undefined") {
    } else {
      navigate("/post");
      clicked = localStorage.setItem("clicked.ID", tweet_id);

      if (mentioned === true) {
        get_mention();
      }
    }
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
  const deleteTweet = async () => {
    const deleteTweet = backend.DeleteTweet(tweet_id);
    if (open === true) {
      navigate("/home");
    }
  };
  const get_mention = async () => {
    open = false;
    setmentioned(true);
    navigate("/Notifications");
  };
  /**
   * store the clicked name's user id in storage
   */
  const store_userID = () => {
    localStorage.setItem("clicked_userID", user_tweeted_id);
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
      <div className="border">
        <div className="post">
          <div className="img_circle">
            <span>
              <img
                key="user imag "
                src={avatar}
                onerror="this.style.display='none'"
                alt=""
              />
            </span>
          </div>
          <div className="post__body">
            <div className="inherted">
              <div className="post__headerText app">
                <div onClick={store_userID}>
                  <h3 className="bolding " id="user @ displayname">
                    <Link to={`/${username}`}>{displayName}</Link>
                  </h3>
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

              <div
                className="post__tweet app"
                onClick={() => {
                  openPost();
                }}
              >
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
              <div onClick={openPost}>
                {image && <ImageBox images={image} deleteEnabled />}
              </div>
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
                      // e.stopPropagation();
                      setIsOpen(true);
                    }}
                  >
                    <div className="icon flex ">
                      <button
                        id="delete button "
                        className=" icon delete "
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteTweet();
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
                  {if_blocked === "false" ? (
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
      </div>
    </div>
  );
};

export default Post;
