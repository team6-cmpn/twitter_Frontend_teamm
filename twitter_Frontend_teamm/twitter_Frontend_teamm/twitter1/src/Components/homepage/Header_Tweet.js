import React, {useState, useRef} from "react";
import "./feed.css";
import {Picker} from "emoji-mart";
import ImageBox from "./ImageBox";
import Configure from "../../Configure";
import * as backend from "./backendFeed";
import ref from "../rere";

import {Button} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import Tooltip from "@mui/material/Tooltip";
import "emoji-mart/css/emoji-mart.css";
import {WindowRounded} from "@mui/icons-material";
import {Modal} from "antd";

/**
 *function of header tweet
 * @param {*} props
 * @returns layout of header tweet
 *
 */
function Tweetbox(props, flaged_color) {
  const [input, setinput] = useState("");
  const [image_array, setimage_array] = useState([]);
  const [mentions, setmentions] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const filePickerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [COLOR, setCOLRO] = useState("transparent");
  const [model_tweeted, setmodel_tweeted] = useState(false);

  const logedin_user_id = localStorage.getItem("userId");

  const [if_blocked, setif_blocked] = React.useState();
  const [test, istest] = React.useState();

  const user = backend.GetUserInfo(logedin_user_id);

  user.then(function (result) {
    istest(result);
    setif_blocked(result.admin_block?.blocked_by_admin);
  });
  var Url_avatar = test?.profile_image_url;

  /**
   *
   * @param {*} e
   * add image to the header tweet set hook of selected images
   */
  const addImageToPost = (e) => {
    const tempImages = [];
    const arr_obj = [];
    const filesLen = Object.keys(e.target.files).length;

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
    }
  };
  /**
   * handle removing image in header twet
   * @param {array string} imageUrl
   */
  const handleRemoveImage = (imageUrl) => {
    let tempImages = [...images];
    let tempImagesObj = [...image_array];

    tempImages = tempImages.filter((image) => image !== imageUrl);
    tempImagesObj = tempImagesObj.filter((image) => image.imageId !== imageUrl);
    setImages(tempImages);
    setimage_array(tempImagesObj);
  };
  /**
   *
   * @param {*} e
   * add emojy to the input
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
   * submit tweet in the database and
   */
  function submitTweet() {
    var path_try = [];
    var body = [];
    let image_urlBE = {};
    const imagesToSend = image_array.map(({imageId, imageObj}) => imageObj);
    setCOLRO("#e6ecf0");
    (async () => {
      image_urlBE = await backend.UploadImg(imagesToSend);
      path_try = image_urlBE.data.url;

      if (image_urlBE.status === 200) {
        body = {
          text: input,
          mention: mentions,
          imageUrl: path_try,
        };
        setCOLRO("transparent");
        const tweeted = await backend.Post_Tweet(body);
        if (tweeted.status === 201) {
          setTimeout(() => {
            ref();
          }, 2000);
        }
        if (tweeted === "tweet duplication") {
          setmodel_tweeted(true);
        }

        // window.location.reload();
      }
    })();

    setinput("");
    setmentions("");
    setimage_array([]);
    setImages([]);

    if (showEmoji) {
      //close emoji model if tweet button is clicked
      setShowEmoji(!showEmoji);
    }
    if (props.model) {
      //close model if tweet is tweeted from model
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
    <div className="tweetBox" style={{background: COLOR}}>
      <div className="paddedin">
        <form className="head_line">
          <div className="img_circle">
            <img src={`${Configure.backURL}${Url_avatar}`} alt="" />
          </div>
          <div className="tweetBox__input">
            <textarea
              id="tweet text area"
              value={input}
              style={{background: "transparent"}}
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
            style={{background: "transparent"}}
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
                id="image f post "
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
            {if_blocked === false ? (
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
        <span className="border"></span>
        <div>
          <Modal
            title={
              <h1
                style={{
                  fontSize: "180%",
                  marginTop: "10px",
                  color: "red",
                  textAlign: "center",
                }}
              >
                This tweet is duplicated !!{" "}
              </h1>
            }
            style={{textAlign: "left"}}
            cancelButtonProps={{style: {display: "none"}}}
            visible={model_tweeted}
            alignItems={{top: Window}}
            onCancel={() => setmodel_tweeted(false)}
            footer={null}
            maskClosable={false}
          >
            <div>You have already tweeted this tweet before</div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Tweetbox;
