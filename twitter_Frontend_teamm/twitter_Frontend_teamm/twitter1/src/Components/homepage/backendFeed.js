import axios from "axios";
import Configure from "../../Configure";
import React, {useEffect} from "react";

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
        messgae = response.data.tweet;
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
        messgae = response.data.tweet;
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

// export async function UploadImg(image) {
//   var messgae;

//   await axios
//     .post(`${Configure.backURL}image/tweet/upload`, image, {
//       headers: {
//         "Content-Type": "application/json",
//         "x-access-token": `${localStorage.getItem("token")}`,
//       },
//     })
//     .then((response) => {
//       //console.log(response);
//       if (response.status === 200) {
//         messgae = response.data.file.path;
//         //console.log(response.data);
//       }
//     })
//     .catch((error) => {
//       messgae = error.response.data.message;
//     });

//   return messgae;
// }
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
        Image = response.data;
        console.log(Image);
      }
    })
    .catch((error) => {
      console.log();
    });
  return Image;
}

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
      // console.log(response.data.retweetUsers);
      if (response.status === 200) {
        messgae = response.data.retweetUsers.length;
        // console.log(response.data);
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
      // console.log(response.data);
      if (response.status === 200) {
        messgae = response.data.retweetUsers.length;
        // console.log(response.data);
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
