import axios from 'axios';
import Configure from '../../Configure'
import React, {useState} from "react";


var userIds=[];
export async function addBookmarks(){
    var message;
    const body =  {}
      var tweetId=  localStorage.getItem("clicked.ID");
      var id='627f9a78055a48cb594008b3'
      await axios
        .put(`${Configure.backURL}bookmarks/add/${tweetId}`,body, {
          
  
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': `${localStorage.getItem('token')}`,
          },
         
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message=response.data.message;
            localStorage.setItem('userIdBookmarks', response.data.savedbookMark.user);
            
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
  
  export async function deleteBookmark(){
    var message;
    // const body =  {}
    var tweetId=  localStorage.getItem("clicked.ID");
      await axios
        .delete(`${Configure.backURL}bookmarks/remove/${tweetId}`, {
          
  
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

  export async function deleteAllBookmarks(){
    var message;
   
      await axios
        .delete(`${Configure.backURL}bookmarks/removeAll/`, {
          
  
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': `${localStorage.getItem('token')}`,
          },
         
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message= response.data.message;
            
          }
          else if (response.status === 403 || response.status === 401   ) {
            message=response.data.message;
            console.log(response.data.message);
          }
        }).catch(error => {
            console.log(error);
            });
      return message;
  };
  
  export async function GetBookmarks(){
    var bookmark;
    
    // const body =  {}
    //   var tweetId=sessionStorage.getItem("ID_tweet");
      await axios
        .get(`${Configure.backURL}bookmarks/get/`, {
          
  
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': `${localStorage.getItem('token')}`,
          },
         
        })
        .then((response) => {
          // console.log(response);
          if (response.status === 200) {
            bookmark=response.data.bookmarks;
            // for (let i = 0; i < response.data.bookmarks.length; i++) {
            //     userIds += response.data.bookmarks[i].user +",";
               
            //   }
            //   userIds=userIds.slice(0,-1)
            //   console.log(userIds)
            
            
          }
          else if (response.status === 403 || response.status === 401) {
            bookmark=response.data.message;
            console.log(response.data.message);
          }
          
        }).catch(error => {
            console.log(error);
            });
      return bookmark;
  };
  
  export async function getUserNameAndName(){
    var userInfo;
    // const body =  {}
    //   var tweetId=sessionStorage.getItem("ID_tweet");
    var userId=localStorage.getItem('userIdBookmarks')
      await axios
        .get(`${Configure.backURL}user/show/${userId}`, {
          
  
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': `${localStorage.getItem('token')}`,
          },
         
        })
        .then((response) => {
          console.log(response);
          
          if (response.status === 200) {
            let i=0
            userInfo=response.data.user[0].name;
            i++;
         
            // localStorage('userNameForBM',response.data.user[0].username)
            // localStorage('NameForBM',response.data.user[0].name)
            
          }
          else if (response.status === 403 || response.status === 401) {
            userInfo=response.data.message;
            console.log(response.data.message);
          }
          
        }).catch(error => {
            console.log(error);
            });
      return userInfo;
  };
  

  export async function getUserLookup(){
    var userInfo=[];
    var user;
    // const body =  {}
    //   var tweetId=sessionStorage.getItem("ID_tweet");
    var userId=localStorage.getItem('userIdBookmarks')
      await axios
        .get(`${Configure.backURL}user/lookup/${localStorage.getItem('tag')}`, {
          
  
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': `${localStorage.getItem('token')}`,
          },
         
        })
        .then((response) => {
          console.log(response);
          
          if (response.status === 200) {
            user=response.data
            for (let i = 0; i < response.data.user.length; i++) {
                userInfo += response.data.user[i].name +",";
                localStorage.setItem(`nameForBookmarks ${i}`,response.data.user[i].name)
                localStorage.setItem(`usernameForBookmarks ${i}`,response.data.user[i].username)
               
              }
            userInfo=userInfo.slice(0,-1);
            console.log(userInfo);
         
            
          }
          else if (response.status === 403 || response.status === 401) {
            userInfo=response.data.message;
            console.log(response.data.message);
          }
          
        }).catch(error => {
            console.log(error);
            });
      return user;
  };
  