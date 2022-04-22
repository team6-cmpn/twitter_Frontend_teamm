import axios from "axios";
import Configure from "../../Configure";
import React, {useState, useEffect} from "react";

export const gettweet = async (payload) => {
  try {
    const response = await axios(`${Configure.mockURL}tweet/`, {
      method: "get",
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getcontenttweet = async (payload) => {
  try {
    const response = await axios(`${Configure.mockURL}posttweet/`, {
      method: "get",
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export function GetPostTweet() {
//   const [posttweet, setPostTweet] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/posttweet")
//       .then((res) => res.json())
//       .then((result) => {
//         setPostTweet(result);
//       });
//   }, []);
//   return posttweet;
// }

export async function GetPostTweet() {
  let response = "";
  try {
    response = await axios
      .get("http://localhost:8000/posttweet")
      .then((res) => res.data);
    console.log(response);
    return response;
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      return error.response;
    }
  }
  return response;
}

export const tweetmock = async (payload) => {
  try {
    const response = await axios(`${Configure.mockURL}tweet/`, {
      method: "post",
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function GetPostLikes() {
  let response = "";
  try {
    response = await axios
      .get("http://localhost:8000/likes")
      .then((res) => res.data);
    console.log(response);
    return response;
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      return error.response;
    }
  }
  return response;
}
export const PostLikes = async (payload) => {
  try {
    const response = await axios(`${Configure.mockURL}likes/`, {
      method: "post",
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
