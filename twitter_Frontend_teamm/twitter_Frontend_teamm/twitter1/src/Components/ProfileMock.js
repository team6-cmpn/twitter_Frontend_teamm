import axios from 'axios';

// import Configure from '../../Configure'
export const Profile = async payload => {
    try {
      const response = await axios(`http://localhost:8000/Users`, {
        method: 'post',
        data: payload,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  // export default async function getUsers() {
  //   let response = '';
  //   try {
  //     response = await axios.get('http://localhost:8000/Users').then((res) => res.data);
  //     return (response);
  //   } catch (error) {
  //     if (error.response) {
  //       /*
  //         * The request was made and the server responded with a
  //         * status code that falls out of the range of 2xx
  //         */
  //       return (error.response);
  //     }
  //   }
  //   return (response);
  // }
  

