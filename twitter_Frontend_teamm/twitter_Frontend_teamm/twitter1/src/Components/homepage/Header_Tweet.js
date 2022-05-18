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
  const [path, setpath] = useState("");
  const [image_value, setimage] = useState("");
  const [image_array, setimage_array] = useState([]);
  const [image_urls, set_urls] = useState([]);
  const [selectedFile, setselectedFile] = useState(false);
  const [array_body, setbody] = useState([]);
  const [mentions, setmentions] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [content, getcontent] = useState([]);
  const filePickerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [model, setmodel] = useState();

  /**
   *
   * @param {*} e
   */
  const addImageToPost = (e) => {
    setselectedFile(true);
    const tempImages = [];
    const arr_obj = [];

    const filesLen = Object.keys(e.target.files).length;
    console.log(filesLen + images.length);
    sessionStorage.setItem("lengthof_selected", filesLen + images.length);

    if (filesLen + images.length <= 4) {
      for (var i = 0; i < filesLen; i++) {
        const tempUrl = URL.createObjectURL(e.target.files[i]);
        tempImages.push(tempUrl);

        // const image_urlBE = backend.UploadImg();
        // image_urlBE.then((text) => {
        //   setImages_BE(text.path);
        //   console.log(text.path);
        // });
        arr_obj.push({
          imageObj: e.target.files[i],
          imageId: tempUrl,
        });
      }

      setImages([...images, ...tempImages]);
      setimage_array([...image_array, ...arr_obj]);
      console.log(image_array);
      sessionStorage.setItem("image_obj", image_array);

      console.log(body);
    }
  };
  const handleRemoveImage = (imageUrl) => {
    let tempImages = [...images];
    let tempImagesObj = [...image_array];

    tempImages = tempImages.filter((image) => image !== imageUrl);
    tempImagesObj = tempImagesObj.filter((image) => image.imageId !== imageUrl);
    setImages(tempImages);
    setimage_array(tempImagesObj);
    console.log(image_array);
    if (tempImages.length === 0) {
      setselectedFile(false);
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

  /**
   *
   * @param {*} event
   */
  var body = {
    text: input,
    mentions: mentions,
    imageUrl: "any",
  };
  function submitTweet(event) {
    setinput("");
    setmentions("");
    const imagesToSend = image_array.map(({imageId, imageObj}) => imageObj);
    console.log(imagesToSend);

    const tweet = backend.Post_Tweet(body);
    const tweet_user = localStorage.setItem("new_tweet", true);
    localStorage.setItem("input_set", input);
    localStorage.setItem("mention_set", mentions);
    if (showEmoji) {
      setShowEmoji(!showEmoji);
    }
    if (selectedFile === false) {
      setimage(" ");
    }
    sessionStorage.setItem("image_obj", imagesToSend);
    const image_urlBE = backend.UploadImg(imagesToSend);
    image_urlBE.then((text) => {
      setpath(text);
    });
    console.log(image_urlBE);
    console.log(path);

    if (props.model) {
      //setmodel(!props.model);
      props.onSubmit(false);
    }
  }

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
            disabled={!input}
            onClick={submitTweet}
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
