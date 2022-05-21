import axios from 'axios';
import Configure from '../../Configure'
import React from 'react';
import  {  useEffect} from 'react';

export async function GetUserInfo() {
  const [dashBoard, setDashBoard] = React.useState([]);
  var id = localStorage.getItem("userId");

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
  }, [id]);
  if (!dashBoard) return null;
  console.log(dashBoard);
  return dashBoard;
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
      };
      fetchProduct();
    }, [id]);
    if (!tweetList) return null;
    console.log(tweetList);
    return tweetList;
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
            Image=response.data.path;
            console.log(Image)
            
            
          }
        }).catch(error => {
            console.log()
            });
      return Image;
  };
