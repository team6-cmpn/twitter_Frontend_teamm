import axios from 'axios';
import Configure from '../../Configure'

/**
 *SignUp BE Integration
 *
 *post signup data into BE server
 * @param {string} payload 
 * @returns {string} -message from BE
 */
export const backEndPost=async payload=>{
  var message;
      const {
        name, username, email,phoneNumber, dateOfBirth, password,
      } = payload;
      await axios
        .post(`${Configure.backURL}auth/signup/`, {
  
          headers: {
            'Content-Type': 'application/json',
          },
          name,
          username,
          email,
          phoneNumber,
          dateOfBirth,
          password,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message='';
            localStorage.setItem('emailToken', response.data.emailtoken);
            
          }
        }).catch(error => {
            message=error.response.data.message;
            });
      return message;
  };

/**
 *Login BE Integration
 *
 *post login data into BE server
 * @param {string} payload 
 * @returns {string} -message from BE
 */

export const backEndLogIn=async payload=>{
    var message;
      const {
        data, password,
      } = payload;
      await axios
        .post(`${Configure.backURL}auth/signin/`, {
  
          headers: {
            'Content-Type': 'application/json',
          },
          data,
          password,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message='';
            
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('name', response.data.user.name);
            localStorage.setItem('joinedAt', response.data.user.created_at);
            localStorage.setItem('userId', response.data.user._id);
            localStorage.setItem('getUsername', response.data.user.username);
            localStorage.setItem('getName', response.data.user.name);
       
         
            
          }
        }).catch(error => {
            message=error.response.data.message;
            });
      return message;
  };

  /**
 *Email Verification BE Integration
 *
 *post verification code sent from BE on user's email
 * @param {string} payload 
 * @returns {string} -message from BE
 */

export const verifyEmail=async payload=>{
    var message;
      const {
        verificationCode,
      } = payload;
      await axios
        .post(`${Configure.backURL}auth/confirmation/`, {
  
          headers: {
            'Content-Type': 'application/json',
          },
         verificationCode,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message='';
            // localStorage.setItem('logInAccessToken', response.data.accessToken);
            
          }
        }).catch(error => {
            message=error.response.data.message;
            });
      return message;
  };

/**
 *Resend Email BE Integration
 *
 *post emailtoken to request for resending of confirmation email
 * @returns {boolean} -a check to verify the process is done correctly or not
 */

export async function resendEmail  (){
     let go=false;
     
     console.log(`${localStorage.getItem('emailToken')}`)
     const body = {};
     
      await axios
        .post(`${Configure.backURL}auth/resendEmail/`, body,{
            
          headers: {
            
            'Content-Type': 'application/json',
            'x-access-token': ` ${localStorage.getItem('emailToken')}`,
            
          },
         
         
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // localStorage.setItem('access token', response.data.emailtoken);
            go=true;
          } 
          else if (response.status=== 401){
              go=false;
          }
        }).catch(error => {
            console.log(error);
           
            });
      return go;
  };
/**
 *Resend SMS BE Integration
 *
 *post emailtoken to request for resending of confirmation email
 * @returns {boolean} -a check to verify the process is done correctly or not
 */

export async function resendSMS  (){
    let go=false;
    
    console.log(`${localStorage.getItem('emailToken')}`)
    const body = {};
    
     await axios
       .post(`${Configure.backURL}auth/resendSMS/`, body,{
           
         headers: {
           
           'Content-Type': 'application/json',
           'x-access-token': ` ${localStorage.getItem('emailToken')}`,
           
         },   
       })
       .then((response) => {
         console.log(response);
         if (response.status === 200) {
           // localStorage.setItem('access token', response.data.emailtoken);
           go=true;
         } 
         else if (response.status=== 401){
             go=false;
         }
         else if (response.status=== 500){
          go=false;
      }
       }).catch(error => {
           console.log(error);
          
           });
     return go;
 };







/**
 *Google SignUp BE Integration
 *
 *post google signUp data into BE server
 * @param {string} payload 
 * @returns {string} -message from BE
 */


export const backEndGooglePost=async payload=>{
    var message;
      const {
        googleId, imageUrl, name, username, email,
      } = payload;
      await axios
        .post(`${Configure.backURL}OAuth/google/signup/`, {
  
          headers: {
            'Content-Type': 'application/json',
          },
          googleId,
          imageUrl,
          name,
          username,
          email,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message='';
   
            
            
          }
        }).catch(error => {
            message=error.response.data.message;
            });
      return message;
  };

  /**
 * Google Login BE Integration
 *
 *post google login data into BE server
 * @param {string} payload 
 * @returns {string} -message from BE
 */


export const backEndGoogleLogIn=async payload=>{
    var message;
      const {
        googleId,
      } = payload;
      await axios
        .post(`${Configure.backURL}OAuth/google/signin/`, {
  
          headers: {
            'Content-Type': 'application/json',
          },
          googleId,
          
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message='';
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('getUsername', response.data.user.username);
            localStorage.setItem('userId', response.data.user._id);
            
          }
        }).catch(error => {
            message=error.response.data.message;
            });
      return message;
  };

  /**
 *Forget Password BE Integration
 *
 *post user data into BE server to search for him/her
 * @param {string} payload 
 * @returns {string} -message from BE
 */

export const forgetPassword=async payload=>{
    var message;
      const {
        username,email
      } = payload;
      await axios
        .post(`${Configure.backURL}settings/forgetPassword/`, {
  
          headers: {
            'Content-Type': 'application/json',
          },
          username,
          email,
          
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message='';
            
            
          }
        }).catch(error => {
            message=error.response.data.message;
            });
      return message;
  };

  /**
 *Email verification for forget password BE Integration
 *
 *post verification code sent from BE on user's email
 * @param {string} payload 
 * @returns {boolean} -check if process is done correctly
 */

export const verifyEmailForgetPassword=async payload=>{
    let check=false;
      const {
        verificationCode,
      } = payload;
      await axios
        .post(`${Configure.backURL}settings/receiveforgetPassword/`, {
  
          headers: {
            'Content-Type': 'application/json',
          },
         verificationCode,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            check=true;
            localStorage.setItem('token', response.data.accessToken);
            
            
          }
        }).catch(error => {
            check=false;
            });
      return check;
  };

  /**
 *Reset Password BE Integration
 *
 *resets user's password by posting new password
 * @returns {string} -message from BE
 */
export async function resetPassword(){
    var message;
    const body =  {
        password:sessionStorage.getItem('password'),confirmNewPassword:sessionStorage.getItem('confirmPassword')
      }
      console.log(`${localStorage.getItem('token')}`)
      await axios
        .post(`${Configure.backURL}settings/resetForgetPassword/`,body, {
          
  
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': `${localStorage.getItem('token')}`,
          },
         
          
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message='';
            
          }
          else if (response.status === 403) {
            message='  ';
            console.log(response.data.message);
          }
          else if(response.status === 401 || response.status === 404 || response.status === 500 ){
            message=response.data.message;
          }

        }).catch(error => {
            console.log(error);
            });
      return message;
  };

 /**
 *Ractivate Account BE Integration
 *
 *reactivates an account that was deactivated by the user
 * @returns {string} -message from BE
 */
 export async function reactivateAccount(){
  var message;
  const body =  {}
    console.log(`${localStorage.getItem('token')}`)
    await axios
      .put(`${Configure.backURL}settings/reactivateAccount/`,body, {
        

        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'x-access-token': `${localStorage.getItem('token')}`,
        },
       
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          message='';
          
        }
        else if (response.status === 403) {
          message='  ';
          console.log(response.data.message);
        }
        else if(response.status === 401  || response.status === 500 ){
          message=response.data.message;
        }

      }).catch(error => {
          console.log(error);
          });
    return message;
};
