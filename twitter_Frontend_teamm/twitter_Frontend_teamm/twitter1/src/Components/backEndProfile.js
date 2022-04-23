// import axios from 'axios';
// import Configure from '../../Configure'
// import React, {useState} from 'react';

// export const backEndProfile=async payload=>{
//     var message;
//       const {
//         name, username, email, dateOfBirth, password,
//       } = payload;
//       await axios
//         .post(`${Configure.backURL}auth/signup/`, {
  
//           headers: {
//             'content-type': 'application/json',
//           },
//           name,
//           username,
//           email,
//           dateOfBirth,
//           password,
//         })
//         .then((response) => {
//           console.log(response);
//           if (response.status === 200) {
//             message='';
//             localStorage.setItem('emailToken', response.data.emailtoken);
            
            
//           }
//         }).catch(error => {
//             message=error.response.data.message;
//             });
//       return message;
//   };

// export const backEndLogIn=async payload=>{
//     var message;
//       const {
//         data, password,
//       } = payload;
//       await axios
//         .post(`${Configure.backURL}auth/signin/`, {
  
//           headers: {
//             'content-type': 'application/json',
//           },
//           data,
//           password,
//         })
//         .then((response) => {
//           console.log(response);
//           if (response.status === 200) {
//             message='';
//             const { token } = response.data.accessToken;
//             localStorage.setItem('token', token);
       
         
            
//           }
//         }).catch(error => {
//             message=error.response.data.message;
//             });
//       return message;
//   };

//   export const verifyEmail=async payload=>{
//     var message;
//       const {
//         verificationCode,
//       } = payload;
//       await axios
//         .post(`${Configure.backURL}auth/confirmation/`, {
  
//           headers: {
//             'content-type': 'application/json',
//           },
//          verificationCode,
//         })
//         .then((response) => {
//           console.log(response);
//           if (response.status === 200) {
//             message='';
//             // localStorage.setItem('logInAccessToken', response.data.accessToken);
            
//           }
//         }).catch(error => {
//             message=error.response.data.message;
//             });
//       return message;
//   };
//   export  const resendEmail =async ()=>{
//      let go=false;
     
//      console.log(localStorage.getItem('emailToken'))
//       await axios
//         .post(`${Configure.backURL}auth/resendEmail/`, {
            
//           headers: {
            
//             'content-type': 'application/json',
//             "x-access-token": `${localStorage.getItem('emailToken')}`,
            
//           },
         
         
//         })
//         .then((response) => {
//           console.log(response);
//           if (response.status === 200) {
//             // localStorage.setItem('access token', response.data.emailtoken);
//             go=true;
//           } 
//           else if (response.status=== 401){
//               go=false;
//           }
//         }).catch(error => {
//             console.log(error);
           
//             });
//       return go;
//   };

// export const backEndGooglePost=async payload=>{
//     var message;
//       const {
//         googleId, imageUrl, name, username, email,
//       } = payload;
//       await axios
//         .post(`${Configure.backURL}OAuth/google/signup/`, {
  
//           headers: {
//             'content-type': 'application/json',
//           },
//           googleId,
//           imageUrl,
//           name,
//           username,
//           email,
//         })
//         .then((response) => {
//           console.log(response);
//           if (response.status === 200) {
//             message='';
//             sessionStorage.setItem('googleAccessToken', response.data.accessToken);
            
            
//           }
//         }).catch(error => {
//             message=error.response.data.message;
//             });
//       return message;
//   };

//   export const backEndGoogleLogIn=async payload=>{
//     var message;
//       const {
//         googleId,
//       } = payload;
//       await axios
//         .post(`${Configure.backURL}OAuth/google/signin/`, {
  
//           headers: {
//             'content-type': 'application/json',
//           },
//           googleId,
          
//         })
//         .then((response) => {
//           console.log(response);
//           if (response.status === 200) {
//             message='';
            
//           }
//         }).catch(error => {
//             message=error.response.data.message;
//             });
//       return message;
//   };

// export const forgetPassword=async payload=>{
//     var message;
//       const {
//         username,email
//       } = payload;
//       await axios
//         .post(`${Configure.backURL}settings/forgetPassword/`, {
  
//           headers: {
//             'content-type': 'application/json',
//           },
//           username,
//           email,
          
//         })
//         .then((response) => {
//           console.log(response);
//           if (response.status === 200) {
//             message='';
            
//           }
//         }).catch(error => {
//             message=error.response.data.message;
//             });
//       return message;
//   };

// export const resetPassword=async payload=>{
//     var message;
//       const {
//         password,confirmNewPassword
//       } = payload;
//       var k=localStorage.getItem('logInAccessToken')
//       await axios
//         .post(`${Configure.backURL}settings/resetForgetPassword/`, {
  
//           headers: {
//             'content-type': 'application/json',
//             "x-access-token": `${localStorage.getItem('token')}`,
//           },
//           password,
//           confirmNewPassword,
          
//         })
//         .then((response) => {
//           console.log(response);
//           if (response.status === 200) {
//             message='';
            
//           }
//           else if (response.status === 403) {
//             message='  ';
//             console.log(response.data.message);
//           }
//           else if(response.status === 401 || response.status === 404 || response.status === 500 ){
//             message=response.data.message;
//           }

//         }).catch(error => {
//             console.log(error);
//             });
//       return message;
//   };