import axios from 'axios';
// import { useEffect, useState } from "react";
// import Configure from '../../Configure'
export const Profile = async payload => {
    try {
      const response = await axios(`http://www.twi-jay.xyz:8000/Users`, {
        method: 'post',
        data: payload,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export default async function getUsernames() {
    let response = '';
    try {
      response = await axios.get('http://www.twi-jay.xyz:8000/Usernames').then((res) => res.data);
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
  // export function GetUsernames() {
  //   const [Username, setUsername] = useState([]);
  
  //   useEffect(() => {
  //     fetch("http://www.twi-jay.xyz:8000/Usernames")
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setUsername(result);
  //       });
  //   }, []);
  //   return Username;
  // }
  

