import axios from 'axios';
import Configure from '../../Configure'
import React from 'react';
import  {useEffect} from 'react';

export async function GetUserInfo(id) {
  const [info, setInfo] = React.useState([]);
  // var id = localStorage.getItem("clicked_userID"); 

  useEffect(() => {
    const fetchProduct = async () => {
      const info = await axios.get(`${Configure.backURL}user/show/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setInfo(info.data.user);
      console.log(info.data)
    };
    fetchProduct();
  }, [id]);
  if (!info) return null;
  console.log(info);
  return info;
}

export function GetTweetList() {
  const [tweetList, setTweetList] = React.useState([]);
  var id = localStorage.getItem("clicked_userID");

  useEffect(() => {
    const fetchProduct = async () => {
      const tweetList = await axios.get(`${Configure.backURL}user/tweetsList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setTweetList(tweetList.data);
    };
    fetchProduct();
  }, [id]);
  if (!tweetList) return null;
  console.log(tweetList);
  return tweetList;
}
var idss=[];

export function GetLikedTweetList() {
  const [tweetList, setTweetList] = React.useState([]);
  var id = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProduct = async () => {
      const tweetList = await axios.get(`${Configure.backURL}user/likedTweetsList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setTweetList(tweetList.data);
      for (let i = 0; i < tweetList.data.tweets.length; i++) {
        
        idss += tweetList.data.tweets[i].user + ",";
        localStorage.setItem(`idss ${i}`,idss)
      }
      idss=idss.slice(0,-1);
    };
    fetchProduct();
  }, [id]);
  if (!tweetList) return null;
  console.log(tweetList);
  return tweetList;
}

export async function getUserLook(){
  var userInfo=[];
  await axios     
      .get(`${Configure.backURL}user/lookup/${idss}`, {
        headers: {
          "Content-Type": "application/json; charset=ut-8",
          "x-access-token": `${sessionStorage.getItem("token")}`,
        },
      }) 
      .then((response) => {
        if (response.status === 200) {
          for (let i=0; i<response.data.user.length; i++){
            userInfo += response.data.user[i].name + ",";
            localStorage.setItem(`usernamelikedtweet ${i}`, response.data.user[i].username);
            localStorage.setItem(`namelikedtweet ${i}`, response.data.user[i].name)
            localStorage.setItem(`imagesss ${i}`, response.data.user[i].profile_image_url)
          }
          userInfo=userInfo.slice(0,-1);
        
        }
      })
     
      .catch((error) => {
        userInfo = error.response.data.message;
      });
  
    return userInfo;
  }

export function GetMediaList() {
  const [tweetList, setTweetList] = React.useState([]);
  var id = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProduct = async () => {
      const tweetList = await axios.get(`${Configure.backURL}user/mediaList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setTweetList(tweetList.data);
    };
    fetchProduct();
  }, [id]);
  if (!tweetList) return null;
  console.log(tweetList);
  return tweetList;
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

  


