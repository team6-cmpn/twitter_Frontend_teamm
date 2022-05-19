import axios from 'axios';
import Configure from '../../Configure'
import React from 'react';
import { useEffect } from 'react';
/**
 * it's responsible for connecting with backend  
 * @returns [returns the states if it okay or not while connecting with backend]
 */

export async function Post_ChangePassword(){
    var message;
    const body =  {
        currentPassword:sessionStorage.getItem('currentPassword'),password:sessionStorage.getItem('password'),confirmNewPassword:sessionStorage.getItem('confirmNewPassword')
      }
      console.log(`${localStorage.getItem('token')}`)
      await axios
        .post(`${Configure.backURL}settings/changePassword/`,body, {
          
  
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


export async function Post_ChangeEmail(){
  var message;
  const body =  { email:sessionStorage.getItem('email')
      }
    console.log(`${localStorage.getItem('token')}`)
    await axios
      .post(`${Configure.backURL}user/changeemail/`,body, {
        

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
export async function Post_ChangeUsername(){
  var message;
  const body =  { username:sessionStorage.getItem('username')
      }
    console.log(`${localStorage.getItem('token')}`)
    await axios
      .post(`${Configure.backURL}user/changeusername/`,body, {
        

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
export async function Post_ChangePhone(){
  var message;
  const body =  { phone_number:sessionStorage.getItem('phone_number')
      }
    console.log(`${localStorage.getItem('token')}`)
    await axios
      .post(`${Configure.backURL}user/changePhoneNumber/`,body, {
        

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
export async function Put_DeactivateAccount(){
    var message;
    const body={};
      console.log(`${localStorage.getItem('token')}`)
      await axios
        .put(`${Configure.backURL}settings/deactivateAccount/`, body,{
          
  
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






export function Get_BlockedList(id) {
  const [notifications, setNotifications] = React.useState([]);
  var id = localStorage.getItem("userId");
  useEffect(() => {
    const fetchProduct=async ()=>{
      const dashBoard= await axios.get(`${Configure.backURL}user/blockedList/${id}`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setNotifications(dashBoard.data.blocks)
      };
      fetchProduct();
  }, []);
  if (!notifications) return null;
  return notifications;
}

export function Get_MutedList(id) {
  const [notifications, setNotifications] = React.useState([]);
  var id = localStorage.getItem("userId");
  useEffect(() => {
    const fetchProduct=async ()=>{
      const dashBoard= await axios.get(`${Configure.backURL}user/mutedList/${id}`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      });
      setNotifications(dashBoard.data.muted)
      };
      fetchProduct();
  }, []);
  if (!notifications) return null;
  return notifications;
}