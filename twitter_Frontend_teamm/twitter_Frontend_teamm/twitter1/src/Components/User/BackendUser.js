import axios from 'axios';
import Configure from '../../Configure'

export async function getUserInfo() {
    var userinfo;
    var id = localStorage.getItem("clicked_userID"); 
   
    await axios
      .get(`${Configure.backURL}user/show/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          userinfo = response.data.user;
          console.log(response.data.user);
          localStorage.setItem("userClickedName",response.data.user.name);
          console.log(response.data.user.name);
          localStorage.setItem("userClickedUsername",response.data.user.username);
          localStorage.setItem("userdescription",response.data.user.description);
          localStorage.setItem("usernumberOfFollowers",response.data.user.followings_count);
        }
      })
      .catch((error) => {
        userinfo = error.response.data.message;
      });
  
    return userinfo;
  
}
 

  export async function gettweetlist() {
    var tweet;
    var id = localStorage.getItem("clicked_userID");
    await axios
      .get(`${Configure.backURL}user/tweetsList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          tweet = response.data.tweet[0].username;
          console.log(response.data.tweet[0].username);
        }
      })
      .catch((error) => {
        tweet = error.response.data.message;
      });
  
    return tweet;
  }

  export async function getlikedtweetlist() {
    var tweet;
    var id=localStorage.getItem("clicked_userID"); 
    await axios
      .get(`${Configure.backURL}user/likedTweetsList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          tweet = response.data;
          console.log(response.data);
        }
      })
      .catch((error) => {
       console.log(error);
      });
  
    return tweet;
  }
  
  export async function getMedialist() {
    var tweet;
    var id=localStorage.getItem("clicked_userID");
    await axios
      .get(`${Configure.backURL}user/mediaList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          tweet = response.data;
          console.log(response.data);
        }
      })
      .catch((error) => {
       console.log(error);
      });
  
    return tweet;
  }

  export async function Follow() {
    var user;
    var id = localStorage.getItem("clicked_userID");
    const body={

    }
   
    await axios
      .post(`${Configure.backURL}friendships/create/${id}`, body ,{
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
  
  export async function destroyFollow() {
    var user;
    var id=localStorage.getItem("clicked_userID");
    
    await axios
      .get(`${Configure.backURL}friendships/destroy/${id}`, {
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
  
  export async function Block() {
    var message;
    var id = localStorage.getItem("clicked_userID");
    const body={

    }
   
    await axios
      .post(`${Configure.backURL}friendships/block/${id}`, body ,{
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          message = response.data.message;
        }
      })
      .catch((error) => {
        message = error.response.data.message;
      });
  
    return message;
  }
  export async function Mute() {
    var message;
    var id = localStorage.getItem("clicked_userID");
    const body={

    }
   
    await axios
      .post(`${Configure.backURL}friendships/mute/${id}`, body ,{
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          message = response.data.message;
        }
      })
      .catch((error) => {
        message = error.response.data.message;
      });
  
    return message;
  }
  export async function unBlock() {
    var message;
    var id = localStorage.getItem("clicked_userID");
    const body={

    }
   
    await axios
      .post(`${Configure.backURL}friendships/unblock/${id}`, body ,{
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          message = response.data.message;
        }
      })
      .catch((error) => {
        message = error.response.data.message;
      });
  
    return message;
  }
  export async function Unmute() {
    var message;
    var id = localStorage.getItem("clicked_userID");
    const body={

    }
   
    await axios
      .post(`${Configure.backURL}friendships/unmute/${id}`, body ,{
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          message = response.data.message;
        }
      })
      .catch((error) => {
        message = error.response.data.message;
      });
  
    return message;
  }

  


