import axios from 'axios';
import Configure from '../../Configure'

/**
 * post
 * adds to SignUp Modal inputs 
 * @param  payload 
 * @returns sign up completion
 */
export const post = async payload => {
  try {
    const response = await axios(`${Configure.mockURL}signUpUsers/`, {
      method: 'post',
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const backEndPost=async payload=>{

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
        } else if (response.status === 400) {
          go = false;
        }
      });
    return go;
};
/**
 * logInpost
 * adds Login Form inputs 
 * @param payload 
 * @returns login form completion
 */
export const logInPost = async payload => {

  try {
    const response = await axios(`${Configure.mockURL}logInUsers/`, {
      method: 'post',
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

/**
 * googlepost
 * adds GoogleSignUp Modal inputs 
 * @param  payload 
 * @returns google sign up completion
 */
export const googlePost = async payload => {

  try {
    const response = await axios(`${Configure.mockURL}googleUsers/`, {
      method: 'post',
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

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
export const googleProfilePost = async payload => {

  try {
    const response = await axios(`${Configure.mockURL}googleProfiles/`, {
      method: 'post',
      data: payload,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};