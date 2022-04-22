import axios from 'axios';
import Configure from '../../Configure'

/**
 * post
 * adds to SignUp Modal inputs 
 * @param  payload 
 * @returns sign up completion
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
/**
 * logInpost
 * adds Login Form inputs 
 * @param payload 
 * @returns login form completion
 */

 logInGet : async (payload) => {

  let go = false;
  await axios
    .get(`${Configure.mockURL}signUpUsers/`, {
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

  backEndLogIn:async( payload)=>{

    let go = false;
    const {
      data, password,
    } = payload;
    await axios
      .post(`${Configure.backURL}auth/signin/`, {

        headers: {
          'content-type': 'application/json',
        },

        data,
        password,
      })
      .then((response) => {
        // console.log(response.data.message);
        if (response.status === 200) {
          
          // go = true;
          // localStorage.setItem('access token', response.data.accessToken);
          console.log(response.data)
        } else if (response.status === 401 ) {

          go = false;
          console.log(response.status);
        }
      }).catch(error => {
          console.log(error.response.data.message)
          });
    return go;
},

/**
 * googlepost
 * adds GoogleSignUp Modal inputs 
 * @param  payload 
 * @returns google sign up completion
 */
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

// export const backEndGooglePost=async payload=>{

//   let go = false;
//     const {
//       googleId, username, email, dateOfBirth, password,
//     } = payload;
//     await axios
//       .post(`${Configure.backURL}OAuth/google/signup/`, {

//         headers: {
//           'content-type': 'application/json',
//         },

//         name,
//         username,
//         email,
//         dateOfBirth,
//         password,
//       })
//       .then((response) => {
//         console.log(response);
//         if (response.status === 201) {
//           go = true;
//         } else if (response.status === 400) {
//           go = false;
//         }
//       });
//     return go;
// };
/**
 * googleProfilePost
 * adds to list of google accounts' profiles 
 * @param payload 
 * @returns sign up completion
 */
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