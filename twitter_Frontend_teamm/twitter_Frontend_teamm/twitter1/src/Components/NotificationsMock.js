
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import Configure from '../Configure';

export default async function getFollowingUsers() {
    let response = '';
    try {
      response = await axios.get('http://localhost:8000/blockedUser_days').then((res) => res.data);
      return (response);
    } catch (error) {
      if (error.response) {
        /*
          * The request was made and the server responded with a
          * status code that falls out of the range of 2xx
          */
        return (error.response);
      }
    }
    return (response);
  }


 export  async function getLikedUsers() {
    let response = '';
    try {
      response = await axios.get('http://localhost:8000/LikePost').then((res) => res.data);
      return (response);
    } catch (error) {
      if (error.response) {
        /*
          * The request was made and the server responded with a
          * status code that falls out of the range of 2xx
          */
        return (error.response);
      }
    }
    return (response);
}
  export  async function getBlockedUsers() {
    let response = '';
    try {
      response = await axios.get('http://localhost:8000/BlockedAccounts').then((res) => res.data);
      return (response);
    } catch (error) {
      if (error.response) {
        /*
          * The request was made and the server responded with a
          * status code that falls out of the range of 2xx
          */
        return (error.response);
      }
    }
    return (response);
  }
  export  async function getMutedUsers() {
    let response = '';
    try {
      response = await axios.get('http://localhost:8000/MutedAccounts').then((res) => res.data);
      return (response);
    } catch (error) {
      if (error.response) {
        /*
          * The request was made and the server responded with a
          * status code that falls out of the range of 2xx
          */
        return (error.response);
      }
    }
    return (response);
  }

  export const PostChangeUsername = async payload => {
    try {
      const response = await axios(`http://localhost:8000/UserChange_UserName`, {
        method: 'post',
        data: payload,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const PostChangePassword = async payload => {
    try {
      const response = await axios(`http://localhost:8000/UserChange_Password`, {
        method: 'post',
        data: payload,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const PostChangePhone = async payload => {
    try {
      const response = await axios(`http://localhost:8000/UserChange_Phone`, {
        method: 'post',
        data: payload,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const PostChangeEmail = async payload => {
    try {
      const response = await axios(`http://localhost:8000/UserChange_Email`, {
        method: 'post',
        data: payload,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export function GetNotificationsFavourites() {
    const [notifications, setNotifications] = React.useState([]);
  
    useEffect(() => {
      const fetchProduct=async ()=>{
        const dashBoard= await axios.get(`${Configure.backURL}notifications/favourites`, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        });
        setNotifications(dashBoard.data)
        };
        fetchProduct();
    }, []);
    if (!notifications) return null;
    console.log("notifications",notifications)
    return notifications;
  }