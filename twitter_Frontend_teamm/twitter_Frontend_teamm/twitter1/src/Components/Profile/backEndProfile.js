import axios from 'axios';
import Configure from '../../Configure'

export async function getUserInfo() {
    var user;
    var id = sessionStorage.getItem("userId");
   
    await axios
      .get(`${Configure.backURL}user/lookup/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          user = response.data.user[0].username;
          console.log(response.data.user[0].username);
        }
      })
      .catch((error) => {
        user = error.response.data.message;
      });
  
    return user;
  }

  export async function getFollow() {
    var user;
    var id = localStorage.getItem("userId");
   
    await axios
      .get(`${Configure.backURL}friendships/create/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          user = response.data.message;
        }
      })
      .catch((error) => {
        user = error.response.data.message;
      });
  
    return user;
  }

  export async function getFollowingList() {
    var user;
    var id = localStorage.getItem("userId");
   
    await axios
      .get(`${Configure.backURL}user/followingList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          user = response.data;
        }
      })
      .catch((error) => {
        user = error.response.data.message;
      });
  
    return user;
  }