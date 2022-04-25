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

  

  backEndPost:async( payload)=>{

    let go = false;
    const {
      name, username, email, dateOfBirth, password,
    } = payload;
    await axios
      .post(`${Configure.backURL}auth/signup/`, {

        headers: {
          'content-type': 'application/json',
          
        },

        name,
        username,
        email,
        dateOfBirth,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          go = true;
        }
      }).catch(error => {
        console.log(error.response.data.message)
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
};
export default mock;