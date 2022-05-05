
import axios from 'axios';



export default async function getFollowingUsers() {
    let response = '';
    try {
      response = await axios.get('http://localhost:8000/followingUser').then((res) => res.data);
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
