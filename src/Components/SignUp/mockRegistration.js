import axios from 'axios';
import Configure from '../../Configure'

/**
 * Mock Registration forms
 * 
 * connects to a mock service, json-server,to post registration forms into a mock database
 * @returns mock api integration
 */
const mock={
  
  post : async (payload) => {
    let go = false;
    await axios
      .post(`${Configure.mockURL}signUpUsers/`, {
        data: payload,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          go = true;
        }
       
      });

    return go;
  },

  

 
  logInPost : async (payload) => {

    let go = false;
    await axios
      .post(`${Configure.mockURL}logInUsers/`, {
        data: payload,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          go = true;
        }
      });

    return go;
  },

  
   googlePost : async (payload) => {

    let go = false;
    await axios
      .post(`${Configure.mockURL}googleUsers/`, {
        data: payload,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          go = true;
        }
      });

    return go;},



   googleProfilePost : async (payload) => {

    let go = false;
    await axios
      .post(`${Configure.mockURL}googleProfiles/`, {
        data: payload,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          go = true;
        }
      });

    return go;
   },
   resetPasswordPost : async (payload) => {

    let go = false;
    await axios
      .post(`${Configure.mockURL}resetPassword/`, {
        data: payload,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          go = true;
        }
      });

    return go;
}


    
};
export default mock;