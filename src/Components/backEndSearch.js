import axios from 'axios';
import Configure from '../Configure'

/**
 *Search top BE Integration
 *
 *get search top data from BE server
 * 
 * @returns {string} -message from BE
 */
export async function backEndTop(){
    const body = {};
    var message;
    var message1;
      //console.log(localStorage.getItem("searchData"))
      await axios
        .get(`${Configure.backURL}search/top?text=${localStorage.getItem("searchData")}`, 
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message = response.data.tweets[0].text;
            //message[1] = response.data.tweets[0].user;
            localStorage.setItem("userI",response.data.tweets[0].user);
            console.log(message);
        }
       
       console.log(response.data); 
      }).catch(error => {
          //console.log(error);
          //message = error.response.data.message;
          console.log(message);
          });
    return message;
  };

/**
 *Search people BE Integration
 *
 *get search people data from BE server
 * 
 * @returns {string} -message from BE
 */

export async function backEndPeople(){
  
  var message=[];
  //var message1;
      await axios
        .get(`${Configure.backURL}search/people?text=${localStorage.getItem("searchData")}`,
         {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
         })
        
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
           message[0] = response.data.user[1][0].name;
           message[1] = response.data.user[1][0].username;
            console.log(message);
           // console.log(message1);
        } 
        else if (response.status=== 404){
          console.log(message);
        }
      }).catch(error => {
        message = error.response.data.message;
        console.log(message);
         
          });
    return message;
    };

  /**
 *search latest BE Integration
 *
 * get search latest data from BE server
 *
 * @returns {string} -message from BE
 */

export async function backEndLatest(){
  const body = {};
  var message;
      
      await axios
        .get(`${Configure.backURL}search/latest/?text=${localStorage.getItem("searchData")}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        })
       
       .then((response) => {
         console.log(response);
         if (response.status === 200) {
           message = response.data.tweets[0].text;
           console.log(message);
       } 
       else if (response.status=== 404){
         console.log(message);
       }
     }).catch(error => {
       message = error.response.data.message;
       console.log(message);
        
         });
   return message;
   };


export async function backEndPhotos(){
    
    var message;
        
        await axios
          .get(`${Configure.backURL}search/photos?text=${localStorage.getItem("searchData")}`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": `${localStorage.getItem("token")}`,
            },
          })
         
         .then((response) => {
           console.log(response);
           if (response.status === 200) {
             message = response.data.tweets[0].text;
             console.log(message);
         } 
         else if (response.status=== 404){
           console.log(message);
         }
       }).catch(error => {
         message = error.response.data.message;
         console.log(message);
          
           });
     return message;
     };


export async function Put_SaveUser(){
    var message;
    var id = sessionStorage.getItem("userId");
    //var id = localStorage.getItem("ID");
    const body={};
      console.log(id)
      console.log(`${localStorage.getItem('userId')}`)
      console.log(`${localStorage.getItem('token')}`)
      await axios
        .put(`${Configure.backURL}search/saveUser/${id}`, body,{
          
  
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
          else if(response.status === 401 ){
            message=response.data.message;
          }

        }).catch(error => {
            console.log(error);
            });
      return message;
};   

export async function Delete_SaveUser(){
  var message;
  var id = localStorage.getItem("ID");
  const body={};
    console.log(`${localStorage.getItem('token')}`)
    await axios
      .put(`${Configure.backURL}search/deleteSaved/${id}`, body,{
        

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
        else if(response.status === 401 ){
          message=response.data.message;
        }

      }).catch(error => {
          console.log(error);
          });
    return message;
};   

export async function backEndSavedSearch(){
  const body = {};
  var message;
      
      await axios
        .get(`${Configure.backURL}search/getsaved`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        })
       
       .then((response) => {
         console.log(response);
         if (response.status === 200) {
           message = response.data;
           console.log(message);
       } 
       else if (response.status=== 404){
         console.log(message);
       }
     }).catch(error => {
       message = error.response.data.message;
       console.log(message);
        
         });
   return message;
   };