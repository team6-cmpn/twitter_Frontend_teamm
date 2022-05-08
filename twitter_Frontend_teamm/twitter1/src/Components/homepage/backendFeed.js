import axios from "axios";
import Configure from "../../Configure";

export async function Post_Tweet() {
  var messgae;
  const body = {
    text: localStorage.getItem("input_set"),
    mention: localStorage.getItem("mention_set"),
  };
  //   localStorage.getItem("id");
  await axios
    .post(`${Configure.backURL}tweets/update`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        messgae = response.data;
        sessionStorage.setItem("ID_tweet", response.data._id);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
export async function getTweet() {
  var messgae;

  var id = sessionStorage.getItem("ID_tweet");
  await axios
    .get(`${Configure.backURL}tweets/show/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        messgae = response.data;
        console.log(response.data);
        localStorage.setItem("ID", response.data._id);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
export async function likePost() {
  var messgae;
  var id = localStorage.getItem("ID");
  const body = {};
  await axios
    .post(`${Configure.backURL}tweets/favorites/create/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        messgae = response.data;
        console.log(response.data);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}

export async function dislikePost() {
  var messgae;
  var id = localStorage.getItem("ID");
  const body = {};
  await axios
    .post(`${Configure.backURL}tweets/favorites/destroy/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        messgae = response.data;
        console.log(response.data);
      }
    })
    .catch((error) => {
      messgae = error.response.data.message;
    });

  return messgae;
}
