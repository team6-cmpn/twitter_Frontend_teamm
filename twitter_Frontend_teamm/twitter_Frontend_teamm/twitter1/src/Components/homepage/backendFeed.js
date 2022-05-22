import axios from "axios";
import Configure from "../../Configure";
import React, {useState, useEffect} from "react";

export async function Post_Tweet(body) {
  var messgae;

  //   localStorage.getItem("id");
  await axios
    .post(`${Configure.backURL}tweets/update`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      //console.log(response);
      if (response.status === 201) {
        messgae = response.data;
        console.log(response.data);
        localStorage.setItem("ID_tweet", response.data._id);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
export async function Get_newTweet() {
  var messgae;
  var id = localStorage.getItem("ID_tweet");
  await axios
    .get(`${Configure.backURL}tweets/show/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        messgae = response.data;
        // console.log(response.data);
        localStorage.setItem("ID", response.data._id);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
export async function getTweet(id) {
  var messgae;
  await axios
    .get(`${Configure.backURL}tweets/show/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        messgae = response.data;
        // console.log(response.data);
        localStorage.setItem("ID", response.data._id);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
export async function likePost(id) {
  var messgae;
  //var id = localStorage.getItem("ID");
  const body = {};
  await axios
    .post(`${Configure.backURL}tweets/favorites/create/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        messgae = response.data;
        // console.log(response.data);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}

export async function dislikePost(id) {
  var messgae;
  const body = {};
  await axios
    .post(`${Configure.backURL}tweets/favorites/destroy/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        messgae = response.data;
        // console.log(response.data);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
export async function DeleteTweet(id) {
  var messgae;
  const body = {};
  await axios
    .post(`${Configure.backURL}tweets/destroy/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        messgae = response.data;
        // console.log(response.data);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}

export async function UploadImg(imageFile) {
  var Image;
  var bodyFormData = new FormData();

  for (var i = 0; i < imageFile.length; i++) {
    bodyFormData.append("image", imageFile[i]);
    // console.log(imageFile[i]);
  }

  await axios
    .post(`${Configure.backURL}image/tweet/upload`, bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        Image = response;
        console.log(Image);
      }
    })
    .catch((error) => {
      console.log();
    });
  return Image;
}
// export function UploadImg(imageFile) {
//   const [dashBoard, setDashBoard] = useState([]);
//   var Image;
//   var bodyFormData = new FormData();
//   for (var i = 0; i < imageFile.length; i++) {
//     bodyFormData.append("image", imageFile[i]);
//     // console.log(imageFile[i]);
//   }
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const dashBoard = await axios.get(
//         `${Configure.backURL}image/tweet/upload`,
//         bodyFormData,
//         {
//           headers: {
//             "Content-Type": "application/json; charset=utf-8",
//             "x-access-token": `${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       setDashBoard(dashBoard);
//     };
//     fetchProduct();
//   }, []);
//   if (!dashBoard) return null;
//   return dashBoard;
// }

export async function Tweets_lookup(page, tweet_no) {
  var messgae;
  await axios
    .get(`${Configure.backURL}tweets/lookup/${page}/${tweet_no}`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      // console.log(response.data.message);
      if (response.status === 200) {
        messgae = response;
        // console.log(response);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}

export async function Retweet_tweet(id) {
  var messgae;
  const body = {};

  await axios
    .post(`${Configure.backURL}tweets/retweet/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        messgae = response.data;
        console.log("retweet" + response.data);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
export async function UNRetweet_tweet(id) {
  var messgae;
  const body = {};

  await axios
    .post(`${Configure.backURL}tweets/unretweet/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        messgae = response.data;
        console.log("unretweet" + response.data);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
export async function Retweeters_list(id) {
  var messgae;

  await axios
    .get(`${Configure.backURL}tweets/retweeters/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      // console.log(response.data);
      if (response.status === 200) {
        messgae = response.data;
        // console.log(response.data);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}

export async function likes_list(id) {
  var messgae;

  await axios
    .get(`${Configure.backURL}tweets/favoritelist/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      //console.log(response.data);
      if (response.status === 200) {
        messgae = response.data;
        //console.log(response.data);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
export async function GetUserInfo(id) {
  const [dashBoard, setDashBoard] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const dashBoard = await axios.get(`${Configure.backURL}user/show/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setDashBoard(dashBoard.data.user);
    };
    fetchProduct();
  }, []);
  if (!dashBoard) return null;
  console.log(dashBoard);
  return dashBoard;
}
