import React, {useState, useEffect} from "react";
import "./feed.css";
import {modalState, postIdState} from "../atoms/modalAtom";
import {useRecoilState} from "recoil";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";
import {HeartIcon, ShareIcon, TrashIcon} from "@heroicons/react/outline";
import * as mocked from "./feedmock";
import * as backend from "./backendFeed";

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
  id_user,
  mention,
  post,
  postPage,
  tweeted_id,
}) => {
  const [liked, setLiked] = useState(false);
  const [like_no, setcount] = useState([]);
  //const [likes, setLikes] = useState([]);
  //const [dislikes, setdisLikes] = useState([]);

  /**
   * function like post toggle like button
   */

  const likePost = async () => {
    if (liked === false) {
      //post is liked
      const like_post = backend.likePost();
      like_post.then((text) => {
        setcount(text.favorite_count);
      });
      setLiked(true);
    } else if (liked === true) {
      //post disliked
      const dislike_post = backend.dislikePost();
      dislike_post.then((text) => {
        setcount(text.favorite_count);
      });
      setLiked(false);
    }
  };

  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const user_tweet = backend.getTweet();

  return (
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
            <div className="post__headerText">
              <h3 className="bolding " id="user @ displayname">
                {displayName}
              </h3>
              {"  "}
              <p className="post__headerSpecial">{username} </p>{" "}
              <h5 className="dateflex">{date}</h5>
            </div>
            <div className="post__tweet">
              <span class="input" role="textbox" contenteditable>
                {text}
                {"  "}
                {mention}
              </span>
            </div>
            <img
              className="post__body__img rounded-2xl max-h-[700px] object-cover mr-2"
              src={image}
              alt=""
            />
            <div className="post__footer">
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
                    {liked ? (
                      <HeartIconFilled className="liked" />
                    ) : (
                      <HeartIcon />
                    )}
                  </div>
                </button>
              </div>

              {tweeted_id === id_user ? (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                  }}
                >
                  <div className="icon flex ">
                    <button id="delete button " className=" icon delete ">
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="blocked">
                  <button id=" share button" className=" icon share ">
                    <ShareIcon fontSize="small" />
                  </button>
                </div>
              )}

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
