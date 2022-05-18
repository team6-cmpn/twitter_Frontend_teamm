
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import Configure from '../Configure';

export default async function getFollowingUsers() {
    let response = '';
    try {
      response = await axios.get(`${Configure.mockURL}blockedUser_days`).then((res) => res.data);
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
      response = await axios.get(`${Configure.mockURL}LikePost`).then((res) => res.data);
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
      response = await axios.get(`${Configure.mockURL}BlockedAccounts`).then((res) => res.data);
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
    export  async function getfollowedUsers() {
    let response = '';
    try {
      response = await axios.get(`${Configure.mockURL}followed_you`).then((res) => res.data);
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
      response = await axios.get(`${Configure.mockURL}MutedAccounts`).then((res) => res.data);
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
      const response = await axios(`${Configure.mockURL}UserChange_UserName`, {
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
      const response = await axios(`${Configure.mockURL}UserChange_Password`, {
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
      const response = await axios(`${Configure.mockURL}UserChange_Phone`, {
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
      const response = await axios(`${Configure.mockURL}UserChange_Email`, {
        method: 'post',
        data: payload,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


