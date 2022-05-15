import axios from 'axios';
import Configure from '../../Configure'

export  async function getFollowerUsers() {
    let response = '';
    try {
      response = await axios.get(`${Configure.mockURL}FollowersAccounts/`).then((res) => res.data);
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
      response = await axios.get(`${Configure.mockURL}FollowingAccounts/`).then((res) => res.data);
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