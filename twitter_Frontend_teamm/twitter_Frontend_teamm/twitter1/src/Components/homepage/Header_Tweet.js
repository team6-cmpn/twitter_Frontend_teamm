import React, {useState, useEffect} from "react";
import "./feed.css";
import {Button} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import Tooltip from "@mui/material/Tooltip";
import "emoji-mart/css/emoji-mart.css";
import {Picker} from "emoji-mart";
import * as mocked from "./feedmock";
import * as backend from "./backendFeed";

//import Tweetarea from "./textinput"
/**
 *function of header tweet
 * @param {*} props
 * @returns layout of header tweet
 *
 */
function Tweetbox(props) {
  const [input, setinput] = useState("");
  const [mentions, setmentions] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [content, getcontent] = useState([]);
  /**
   *
   * @param {*} e
   */

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setinput(input + emoji);
  };

  useEffect(() => {
    (async () => {
      const resp = await mocked.GetUserContent();
      getcontent(resp);
    })();
  }, []);
  /**
   *
   * @param {*} event
   */

  function submitTweet(event) {
    setinput("");
    setmentions("");
    const tweet = backend.tweetmock(body);

    //mocked.tweetmock(body);
    //props.onAdd(input + "  " + mentions);
    // console.log(tweet);
    //props.onmention(mentions);
    event.preventDefault();
    //console.log(input + "," + mentions);
  }
  localStorage.setItem("input_set", input);
  localStorage.setItem("mention_set", mentions);
  var body = {
    text: input,
    mentions: mentions,
  };
  // id: 123,
  //login user id
  /**
   *conditioning mentions
   * @param {*} value
   */

  function inputmention(value) {
    if (value[0] !== "@") {
      //do nothing
    } else {
      setmentions(value);
    }
  }
  //console.log(content);

  //<Tweetarea onChange={(e) => setTweet(e.target.value)}  />
  return (
    <div className="tweetBox">
      <div className="paddedin">
        <form className="app">
          <div className="img_circle">
            {content.map((tweetItem, index) => {
              return <img src={tweetItem.avatar} alt="" />;
            })}
          </div>
          <div className="tweetBox__input">
            <textarea
              id="tweet text area"
              value={input}
              placeholder="What is happening"
              onChange={(e) => setinput(e.target.value)}
              className="min-h-[50px]"
              maxLength="250"
              rows="2"
            ></textarea>
          </div>
        </form>
        <div className="mention">
          <input
            id="mentions text area"
            maxLength={50}
            placeholder="mentions"
            value={mentions}
            onChange={(e) => inputmention(e.target.value)}
          ></input>
        </div>

        <div className="app border">
          <div className="iconbar">
            <Button id="button choose image " className="iconss">
              <Tooltip title="image">
                <ImageOutlinedIcon />
              </Tooltip>
            </Button>

            <Button
              key="button choose emojis"
              className="emojisicon"
              onClick={() => setShowEmoji(!showEmoji)}
            >
              <Tooltip title="Emoji">
                <EmojiEmotionsOutlinedIcon />
              </Tooltip>
            </Button>
          </div>
          <Button
            id="post tweet button"
            disabled={!input}
            onClick={submitTweet}
            className="tweet__Button"
          >
            Tweet
          </Button>
        </div>
        {showEmoji && (
          <Picker
            onSelect={addEmoji}
            style={{
              position: "absolute",
              marginTop: "-5px",
              marginLeft: -200,
              maxWidth: "320px",
              borderRadius: "20px",
            }}
            theme="light"
          />
        )}
      </div>
      <span className="border"></span>
    </div>
  );
}

export default Tweetbox;
