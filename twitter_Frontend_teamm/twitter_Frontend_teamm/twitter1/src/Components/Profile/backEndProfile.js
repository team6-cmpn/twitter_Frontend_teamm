import axios from 'axios';
import Configure from '../../Configure'
import React from 'react';
import  {  useEffect} from 'react';

export async function GetUserInfo() {
  const [info, setInfo] = React.useState([]);
  var id = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProduct = async () => {
      const info = await axios.get(`${Configure.backURL}user/show/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setInfo(info.data.user);
    };
    fetchProduct();
  }, [id]);
  if (!info) return null;
  console.log(info);
  return info;
}


  export function GetFollowingList() {
    const [followingList, setfollowingList] = React.useState([]);
    var id = localStorage.getItem("userId");
  
    useEffect(() => {
      const fetchProduct = async () => {
        const followingList = await axios.get(`${Configure.backURL}user/followingList/${id}`, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        });
        setfollowingList(followingList.data);
      };
      fetchProduct();
    }, [id]);
    if (!followingList) return null;
    console.log(followingList);
    return followingList;
  }


  export function GetFollowersList() {
    const [followerList, setfollowerList] = React.useState([]);
    var id = localStorage.getItem("userId");
  
    useEffect(() => {
      const fetchProduct = async () => {
        const followerList = await axios.get(`${Configure.backURL}user/followersList/${id}`, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        });
        setfollowerList(followerList.data);
      };
      fetchProduct();
    }, [id]);
    if (!followerList) return null;
    console.log(followerList);
    return followerList;
  }

  export function GetTweetList() {
    const [tweetList, setTweetList] = React.useState([]);
    var id = localStorage.getItem("userId");
  
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


  export async function UpdateProfile(body){
    var message;
    body =  {
        name: sessionStorage.getItem("name"),
        description: sessionStorage.getItem("description"),
      }
     
      await axios
        .post(`${Configure.backURL}user/update/`,body, {
          
  
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': `${localStorage.getItem('token')}`,
          },
         
          
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message=response;
            console.log(response.data.message);
          }
          else if (response.status === 403) {
            message=response;
            console.log(response.data.message);
          }
          else if(response.status === 401 || response.status === 404 ){
            message=response;
          }

        }).catch(error => {
            console.log(error);
            });
      return message;
  };

  export async function UploadImageProfile(imageFile){
    var Image;
    var bodyFormData = new FormData();
    bodyFormData.append('image', imageFile); 
    console.log(bodyFormData);
      await axios
        .post(`${Configure.backURL}image/profile/upload`, bodyFormData,{
  
          headers: {
            'Content-Type': 'multipart/form-data',
            "x-access-token": `${localStorage.getItem("token")}`,
          },

        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            Image=response.data;
            console.log(Image)
            
            
          }
        }).catch(error => {
            console.log()
            });
      return Image;
  };
