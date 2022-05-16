import React, {useState, useEffect, useRef} from "react";
import "./feed.css";
import {Button} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import Tooltip from "@mui/material/Tooltip";
import "emoji-mart/css/emoji-mart.css";
import {Picker} from "emoji-mart";
import ImageBox from "./ImageBox";
import * as mocked from "./feedmock";
import * as backend from "./backendFeed";
import {useNavigate} from "react-router";
// // // // // // // // // // // // // // import Pusher from 'pusher-js'
// // // // // // // // // // // // // // import {toast, ToastContainer} from 'react-toastify';
// // // // // // // // // // // // // // import 'react-toastify/dist/ReactToastify.css';
/**
//import Tweetarea from "./textinput"
/**
 *function of header tweet
 * @param {*} props
 * @returns layout of header tweet
 *
 */
function Tweetbox(props) {
  const navigate = useNavigate();
  const [input, setinput] = useState("");
  const [mentions, setmentions] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [content, getcontent] = useState([]);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [model, setmodel] = useState();

  /**
   *
   * @param {*} e
   */
  const addImageToPost = (e) => {
    const tempImages = [];
    const filesLen = Object.keys(e.target.files).length;
    console.log(filesLen + images.length);

    if (filesLen + images.length <= 4) {
      for (var i = 0; i < filesLen; i++) {
        tempImages.push(URL.createObjectURL(e.target.files[i]));
        setSelectedFile(filesLen + images.length);
      }
      console.log(selectedFile);

      console.log([...images, ...tempImages]);
      setImages([...images, ...tempImages]);
    }
  };
  const handleRemoveImage = (imageUrl) => {
    let tempImages = [...images];
    tempImages = tempImages.filter((image) => image !== imageUrl);
    setImages(tempImages);
    if (tempImages.length === 0) {
      setSelectedFile(0);
    }
  };
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
  // // // // // // // // var pusher;
  // // // // // // // // var userid=localStorage.getItem('userId');
  // // // // // // // // var dataTemp;
  // // // // // // // //  useEffect(async() => {
    
  // // // // // // // //   Pusher.logToConsole = true;
  // // // // // // // //   pusher = new Pusher('a02c7f30c561968a632d', {
  // // // // // // // //     appId : "1406245",

  // // // // // // // //     secret : "5908937248eea3363b9e",
  // // // // // // // //     cluster : "eu",
  // // // // // // // //     useTLS: true,

  // // // // // // // //   });
  // // // // // // // // });
  // // // // // // // // function liveNotifications(){
  // // // // // // // //   var channel = pusher.subscribe(String(userid));
  // // // // // // // //   channel.bind('tweet-event', function(data) {
  // // // // // // // //     dataTemp=data;
  // // // // // // // //     {notify()}
  // // // // // // // //   });


  // // // // // // // // }
  // // // // // // // // const notify = () =>{
  // // // // // // // //   toast.info(+dataTemp.notificationHeader.text+".",
  // // // // // // // //   {position: toast.POSITION.TOP_CENTER})}

  // // // // // // // // useEffect(() => {
  // // // // // // // //   (async () => {
  // // // // // // // //     const resp = await mocked.GetUserContent();
  // // // // // // // //     getcontent(resp);
  // // // // // // // //   })();
  // // // // // // // // }, []);

  /**
   *
   * @param {*} event
   */

  function submitTweet(event) {
    setinput("");
    setmentions("");
    const tweet = backend.Post_Tweet(body);
    const tweet_user = localStorage.setItem("new_tweet", true);
    localStorage.setItem("input_set", input);
    localStorage.setItem("mention_set", mentions);
    event.preventDefault();
    if (showEmoji) {
      setShowEmoji(!showEmoji);
    }
    if (props.model) {
      //setmodel(!props.model);
      props.onSubmit(false);
    }
    // navigate("/home");
  }

  var body = {
    text: input,
    mentions: mentions,
  };
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
        <ImageBox images={images} onDeleteImage={handleRemoveImage} />
        <div className=" app">
          <div className="app border">
            <div
              className="iconbar"
              onClick={() => filePickerRef.current.click()}
            >
              <Button id="button choose image " className="iconss">
                <Tooltip title="image">
                  <ImageOutlinedIcon />
                </Tooltip>
              </Button>{" "}
              <input
                //value={selectedFile}
                type="file"
                multiple
                ref={filePickerRef}
                hidden
                onChange={addImageToPost}
              />
            </div>

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
            disabled={!input && selectedFile === 0}
            onClick={()=>{
              {submitTweet()};
              //////////////////////////////////////////////////// liveNotifications()
            }}
            className="tweet__Button"
          >
            Tweet
          </Button>
          {/* <ToastContainer/> */}

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
