import axios from 'axios';

export default async function getUserInformation() {
    let response = '';
    try {
      response = await axios.get(`${Configure.mockURL}UserInfo/`).then((res) => res.data);
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
      const response = await axios(`${Configure.mockURL}FollowingAccounts/`, {
        method: 'post',
        data: payload,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };