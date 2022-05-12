import axios from 'axios';

export default async function getUserInformation() {
    let response = '';
    try {
      response = await axios.get('http://localhost:8000/UserInfo').then((res) => res.data);
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
  export const follow = async payload => {
    try {
      const response = await axios(`http://localhost:8000/FollowingAccounts`, {
        method: 'post',
        data: payload,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };