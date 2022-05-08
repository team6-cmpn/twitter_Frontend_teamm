import axios from 'axios';

export  async function getFollowerUsers() {
    let response = '';
    try {
      response = await axios.get('http://localhost:8000/FollowersAccounts').then((res) => res.data);
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

  export  async function getFollowingUsers() {
    let response = '';
    try {
      response = await axios.get('http://localhost:8000/FollowingAccounts').then((res) => res.data);
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