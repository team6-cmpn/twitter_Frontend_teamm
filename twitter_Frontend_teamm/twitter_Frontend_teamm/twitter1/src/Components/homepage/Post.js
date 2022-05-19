import React, {useState, useEffect} from "react";
import "./feed.css";
import {modalState, postIdState} from "../atoms/modalAtom";
import {useRecoilState} from "recoil";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";
import {HeartIcon, ShareIcon, TrashIcon} from "@heroicons/react/outline";
import FollowersList from "../Profile/FollowersList";

import * as mocked from "./feedmock";
import * as backend from "./backendFeed";
import {likes_list} from "./backendFeed";
import {Modal, Result} from "antd";
import timeDifference from "./date";
import {style} from "@mui/system";
import ImageBox from "./ImageBox";
import {useNavigate} from "react-router";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {hover} from "@testing-library/user-event/dist/hover";

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
  show,
}) => {
  const navigate = useNavigate();
  var timeStamp = timeDifference(new Date(), new Date(date));

  const [if_liked, setif_liked] = useState(false);
  const [user_like, setuser_like] = useState(false);
  const [if_retweeted, setif_retweeted] = useState();
  const [like_no, setlike_no] = useState();
  const [retwee_number, setretwee_no] = useState();
  const [btnColor, setBtnClass] = useState("black");
  const [like_color, setlike_color] = useState("black");
  const [islikeModalVisible, setlikeModalVisible] = useState(false);
  const [isretweetModalVisible, setretweetModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [mentioned, setmentioned] = useState(false);
  const [lie, setlikeslist] = useState([]);
  const [ret, setretweeters] = useState([]);
  const [likes_ids_tweet, setlikes_ids_tweet] = useState([]);
  const [retween_ids_tweet, setretween_ids_tweet] = useState([]);

  const if_blocked = localStorage.getItem("is_blocked");

  /**
   * function like post toggle like button set tweet liked in database
   */
  if (user_liked_tweet === true) {
    setif_liked(true);
    console.log("liiiiiike");
  }
  const likePost = async () => {
    if (if_liked === false) {
      //post is liked
      const like_post = backend.likePost(tweet_id);
      console.log(tweet_id);
      setlike_color("#e21f05");
      like_post.then((text) => {
        console.log(text);
        setlike_no(text);
      });
      setuser_like(true);
      setif_liked(true);
    } else if (if_liked === true) {
      //post disliked
      setlike_color("black");
      setuser_like(false);

      const dislike_post = backend.dislikePost(tweet_id);
      dislike_post.then((text) => {
        setlike_no(text);
      });
      setif_liked(false);
    }
  };

  /**
   * function open post in seperat page navigate
   */

  var clicked;
  const openPost = async () => {
    if (tweet_id === "undefined") {
    } else {
      navigate("/post");
      clicked = localStorage.setItem("clicked.ID", tweet_id);
      // setlist_likes();
      // setretweet_list();
      if (mentioned === true) {
        get_mention();
      }
    }
  };
  // if (if_liked || if_retweeted) {
  useEffect((e) => {
    (async () => {
      const loop = backend.getTweet(tweet_id);
      loop.then(function (tempresult) {
        setlikes_ids_tweet(tempresult.tweet?.favorites);
        console.log("what likes id", tempresult.user.favorites);
      });
      // e.preventDefault();
      /////////////////////////////////////////////////////////////////////////////////////////////////
      for (var i = 0; i < 3; i++) {
        console.log(likes_ids_tweet);
        console.log(username);
        if ({likes_ids_tweet}?.likes_ids_tweet[i] === logedin_user_id) {
          setif_liked(true);
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const loop = backend.getTweet(tweet_id);

      loop.then(function (tempresult) {
        setretween_ids_tweet(tempresult.tweet?.retweetUsers);
        console.log("what likes id", tempresult.tweet.retweetUsers);
      });
      for (var j = 0; j < 3; j++) {
        // console.log(retween_ids_tweet[j]);
        if (retween_ids_tweet[j] === logedin_user_id) {
          setBtnClass("#14fe10");
          // setretwee_no(retweeters_list.length);
        }
      }
    })();
  }, []);
  // }
  /**
   * function open like modelof list of profiles who liked this post
   */
  var likes_list = [];
  var retweeters_list = [];

  function openlikes() {
    likes_list = backend.likes_list(tweet_id);
    likes_list.then(function (tempresult) {
      setlikeslist(tempresult?.favoriteusers);
    });
    setlikeModalVisible(true);
  }
  /**
   * function open retweet model of list of profiles who retweeted this post
   */
  const openretweet = async () => {
    retweeters_list = backend.Retweeters_list(tweet_id);

    retweeters_list.then(function (tempresult) {
      setretweeters(tempresult?.retweetersList);
    });
    setretweetModalVisible(true);
  };
  /**
   * function setting tweet as retweeted in database and changing color
   */
  function retweet() {
    if (btnColor === "black") {
      //retweet
      setBtnClass("#14fe10");

      const retweet = backend.Retweet_tweet(tweet_id);
      retweet.then((text) => {
        setretwee_no(text);
      });
      setif_retweeted(true);
    }
    if (btnColor === "#14fe10") {
      //unretwett
      setBtnClass("black");
      const retweet = backend.UNRetweet_tweet(tweet_id);
      retweet.then((text) => {
        setretwee_no(text);
      });
      setif_retweeted(true);
    }
  }
  /**
   * rtuern to home  button
   */
  const returnhome = async () => {
    navigate("/home");
  };
  const deleteTweet = async () => {
    const deleteTweet = backend.DeleteTweet(tweet_id);
    // console.log(deleteTweet);
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
                    {like_no > 0 && {like_no}}likes
                  </div>

                  <div className="retweets" onClick={() => openretweet()}>
                    {retwee_number > 0 && {retwee_number}} retweets
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
                  {like_no > 0 && <span className="count">{like_no}</span>}
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
                  {retwee_number > 0 && (
                    <span className="count" style={{color: btnColor}}>
                      {retwee_number}
                    </span>
                  )}
                  {if_blocked === "false" ? (
                    <div className="blocked">
                      <button id=" retweet button" className=" icon share">
                        <ShareIcon
                          style={{color: btnColor}}
                          strokeWidth={1}
                          fontSize="small"
                          onClick={(e) => {
                            e.stopPropagation();
                            retweet();
                          }}
                        />
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
          {retwee_number !== 0 ? (
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
