import React, {useState, useEffect, useRef} from "react";
import "./feed.css";
import {Button} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import Tooltip from "@mui/material/Tooltip";
import "emoji-mart/css/emoji-mart.css";
import {Picker} from "emoji-mart";
import ImageBox from "./ImageBox";
import Configure from "../../Configure";

import * as mocked from "./feedmock";
import * as backend from "./backendFeed";
import {useNavigate} from "react-router";
import * as profile from "../Profile/backEndProfile";
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
  const [path, setpath] = useState([]);
  const [image_array, setimage_array] = useState([]);
  const [image_urls, set_urls] = useState([]);
  const [selectedFile, setselectedFile] = useState(false);
  const [array_body, setbody] = useState([]);
  const [mentions, setmentions] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [content, getcontent] = useState([]);
  const filePickerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [Awaitcolor, setAwaitcolor] = useState("transparent");
  const [clicked, setclicked] = useState(false);

  const [if_blocked, setif_blocked] = useState();

  const [loading, setLoading] = useState(false);
  const [model, setmodel] = useState();

  const logedin_user_id = localStorage.getItem("userId");
  // const if_blocked_resp = profile.GetUserInfo(logedin_user_id);
  // if_blocked_resp.then((text) => {
  //   setif_blocked(text.admin_block?.blocked_by_admin);
  // });

  const user = backend.GetUserInfo(logedin_user_id);

  const [test, istest] = React.useState();
  user.then(function (result) {
    console.log("result", result);
    istest(result);
    setif_blocked(result?.admin_block.blocked_by_admin);
  });
  var Url_avatar = test?.profile_image_url;

  console.log(if_blocked);
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

        arr_obj.push({
          imageObj: e.target.files[i],
          imageId: tempUrl,
        });
      }

      setImages([...images, ...tempImages]);
      setimage_array([...image_array, ...arr_obj]);
      console.log(image_array);
      sessionStorage.setItem("image_obj", image_array);
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
  var image_urlBE = [];
  function submitTweet() {
    var path_try = [];
    const imagesToSend = image_array.map(({imageId, imageObj}) => imageObj);
    var body = [];
    let image_urlBE = {};
    (async () => {
      image_urlBE = await backend.UploadImg(imagesToSend);
      console.log(image_urlBE.data.url);
      path_try = image_urlBE.data.url;
      console.log("path = " + path_try);
      if (image_urlBE.status === 200) {
        body = {
          text: input,
          mention: mentions,
          imageUrl: path_try,
        };
        backend.Post_Tweet(body);
      }
      console.log("inbody " + body.imageUrl);
    })();
    console.log("length" + imagesToSend.length);

    console.log("inbody " + body.imageUrl);
    console.log("urlssss " + image_urlBE?.url);
    // console.log(backend.UploadImg(imagesToSend));
    console.log("body" + body);
    // console.log("path " + path);
    setinput("");
    setmentions("");
    setimage_array([]);
    setImages([]);
    if (imagesToSend.length === 0) {
      setpath([]);
    }

    if (showEmoji) {
      setShowEmoji(!showEmoji);
    }
    if (props.model) {
      //setmodel(!props.model);
      props.onSubmit(false);
    }
    // setAwaitcolor("#e6ecf0");
    setclicked(true);
    setTimeout(() => {
      // setAwaitcolor("#transparent");
      //setAwaitcolor("#e6ecf0");
    }, 2000);
  }

  if (clicked === true) {
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
    <div className="tweetBox" style={{background: Awaitcolor}}>
      <div className="paddedin">
        <form className="head_line">
          <div className="img_circle">
            <img src={`${Configure.backURL}${Url_avatar}`} alt="" />
          </div>
          <div className="tweetBox__input">
            <textarea
              id="tweet text area"
              value={input}
              style={{background: Awaitcolor}}
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
            style={{background: Awaitcolor}}
            placeholder="mentions"
            value={mentions}
            onChange={(e) => inputmention(e.target.value)}
          ></input>
        </div>
        <ImageBox images={images} onDeleteImage={handleRemoveImage} />
        <div>
          <div className="emo border">
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
                id
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
            {if_blocked === "false" ? (
              <Button
                id="post tweet button"
                disabled={!input}
                onClick={submitTweet}
                className="tweet__Button  "
              >
                Tweet
              </Button>
            ) : null}
          </div>
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
