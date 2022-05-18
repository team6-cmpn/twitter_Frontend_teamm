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
// // // // // // // // // // // // // // import {toast, ToastContainer} from 'react-toastify';
// // // // // // // // // // // // // // import 'react-toastify/dist/ReactToastify.css';
// // // // // // // // // // // // // // import Pusher from 'pusher-js'

//import {TwitterShareButton};

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
}) => {
  const navigate = useNavigate();
  var timeStamp = timeDifference(new Date(), new Date(date));

  const [if_liked, setif_liked] = useState(false);
  const [if_retweeted, setif_retweeted] = useState(false);
  const [like_no, setcount] = useState(likes);
  const [retwee_no, setretwee_no] = useState(retweets);
  const [tryy, settry] = useState();
  const [btnColor, setBtnClass] = useState("black");
  const [like_color, setlike_color] = useState("black");
  const [islikeModalVisible, setlikeModalVisible] = useState(false);
  const [isretweetModalVisible, setretweetModalVisible] = useState(false);
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [mentioned, setmentioned] = useState(false);
  const [likes_list, setlikes_list] = useState([]);
  const [retweetname_list, setretweetname_list] = useState([]);
  const [res, setres] = useState([]);

  /**
   * function like post toggle like button
   */

  const likePost = async () => {
    if (if_liked === false) {
      //post is liked
      const like_post = backend.likePost(tweet_id);
      console.log(tweet_id);
      setlike_color("#e21f05");
      like_post.then((text) => {
        console.log(text);
        setcount(text);
      });
      setif_liked(true);
    } else if (if_liked === true) {
      //post disliked
      setlike_color("black");
      const dislike_post = backend.dislikePost(tweet_id);
      dislike_post.then((text) => {
        setcount(text);
      });
      setif_liked(false);
    }
  };

  /**
   * function open like modelof list of profiles who liked this post
   */
  const mocked_tweet = localStorage.getItem("ID_tweet");
  console.log(mocked_tweet);
  var clicked;
  const openPost = async () => {
    clicked = localStorage.setItem("clicked.ID", tweet_id);

    navigate("/post");
    if (mentioned === true) {
      get_mention();
    }
  };

  /**
   * function open post in seperat page navigate
   */
  var mocke_list = [];
  function openlikes() {
    setlikeModalVisible(true);
    mocke_list = backend.likes_list(mocked_tweet);
    console.log("test",mocke_list);
    
    var promiseB = mocke_list.then(function(tempresult) {
      setres(tempresult?.favoriteusers)
      console.log("what",tempresult)
      
   });
   console.log("tempp",promiseB)
  }
  console.log("res",res)
  /**
   * function open retweet modelof list of profiles who retweeted this post
   */
  const openretweet = async () => {
    setretweetModalVisible(true);
  };
  function retweeted() {
    if (btnColor === "black") {
      //retweet
      setBtnClass("#14fe10");
      const retweet = backend.Retweet_tweet(tweet_id);
      retweet.then((text) => {
        setretwee_no(text);
        //settry(text);
      });
    }
    if (btnColor === "#14fe10") {
      //unretwett
      setBtnClass("black");
      const retweet = backend.UNRetweet_tweet(tweet_id);
      retweet.then((text) => {
        setretwee_no(text);
      });
    }
  }
  const returnhome = async () => {
    navigate("/home");
  };
  const deleteTweet = async () => {
    const deleteTweet = backend.DeleteTweet(tweet_id);
    console.log(deleteTweet);
  };
  const get_mention = async () => {
    open = false;
    setmentioned(true);
    navigate("/Notifications");
  };
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
              <div className="post__tweet app" onClick={openPost}>
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
                    {like_no}likes
                  </div>

                  <div className="retweets" onClick={() => openretweet()}>
                    retweets
                  </div>
                </div>
              )}
              <div className="post__footer">
                {user_tweeted_id === logedin_user_id ? (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
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
                  {retwee_no > 0 && (
                    <span className="count" style={{color: btnColor}}>
                      {retwee_no}
                    </span>
                  )}

                  <div className="blocked">
                    <button id=" retweet button" className=" icon share">
                      <ShareIcon
                        style={{color: btnColor}}
                        strokeWidth={1}
                        fontSize="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          retweeted();
                        }}
                      />
                    </button>
                  </div>
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
              {res.map((users, index) => (
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
        ></Modal>
      </div>
    </div>
  );
};

export default Post;
