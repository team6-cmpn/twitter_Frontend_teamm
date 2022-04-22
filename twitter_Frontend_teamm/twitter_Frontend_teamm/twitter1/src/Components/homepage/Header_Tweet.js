import React, {useState} from "react";
import "./feed.css";
import {Button} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import Tooltip from "@mui/material/Tooltip";
import "emoji-mart/css/emoji-mart.css";
import {Picker} from "emoji-mart";
import * as mockAPI from "./feedmock";

//import Tweetarea from "./textinput"

function Tweetbox(props) {
  const [input, setinput] = useState("");
  const [mentions, setmentions] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setinput(input + emoji);
  };

  function submitTweet(event) {
    props.onAdd(input + "   " + mentions);
    props.onmention(mentions);
    setinput("");
    setmentions("");
    mockAPI.tweetmock(body);
    event.preventDefault();
    console.log(input + "," + mentions);
  }

  var body = {
    tweet: input,
    mentions: mentions,
  };

  function inputmention(value) {
    if (value[0] !== "@") {
      //do nothing
    } else {
      setmentions(value);
    }
  }

  //<Tweetarea onChange={(e) => setTweet(e.target.value)}  />
  return (
    <div className="tweetBox">
      <div className="paddedin">
        <form className="app">
          <div className="img_circle">
            <img
              src="https://images.unsplash.com/photo-1516727003284-a96541e51e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
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

        <div className="app">
          <div className="iconbar">
            <Button id="button choose image " className="iconss">
              <Tooltip title="image">
                <ImageOutlinedIcon />
              </Tooltip>
            </Button>

            <Button
              id="button choose emojis"
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
