import axios from 'axios';
import Configure from '../../Configure'
import React, {useEffect} from "react";
/**
 *Search top BE Integration
 *
 *get search top data from BE server
 * 
 * @returns {string} -message from BE
 */
var userid=[];
export async function backEndTop(){
    const body = {};
    var message;
  
    var tex = [];
    var message1;
      //console.log(localStorage.getItem("searchData"))
      await axios
        .get(`${Configure.backURL}search/top?text=${localStorage.getItem("searchData")}`, 
        {
          
          headers: {
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
          // query: {
            
          //   "text": `${localStorage.getItem("searchData")}`,
          // },
        })
        .then((response) => {
          //console.log(response);
          if (response.status === 200) {
            message = response.data.tweets;
            // for(let i=0; i< response.data.tweets.length; i++){
            //   tex += response.data.tweets[i].text + ",";
            //   userid += response.data.tweets[i].user + ",";
            //   localStorage.setItem(`it ${i}`, response.data.tweets[i].text)
            // }
            tex=tex.slice(0,-1);
            userid=userid.slice(0,-1);
            console.log(message);
            //message[1] = response.data.tweets[0].user;
            //localStorage.setItem("userI",response.data.tweets[0].user);
            //console.log(message);
        }
       
      // console.log(response.data); 
      }).catch(error => {
          //console.log(error);
          //message = error.response.data.message;
          //console.log(message);
          });
    return message;
  };

  var userridd=[];
  
  export function GetSearchTop() {
    const [searched, setSearched] = React.useState([]);
    
    useEffect(() => {
      const fetchProduct = async () => {
        const search = await axios.get(`${Configure.backURL}search/top?text=${localStorage.getItem("searchData")}`, 
        {
          
          headers: {
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        })
        setSearched(search);
        for (let i = 0; i < search.data.tweets.length; i++) {
          console.log("farahhhhhhhhhhhhh",search.data.tweets[i].user)
          userridd += search.data.tweets[i].user + ",";
          localStorage.setItem(`userridd ${i}`,search.data.tweets[i].name)
          localStorage.setItem('idd',search.data.tweets[i].user)
        }
        userridd=userridd.slice(0,-1);
       
      };
      fetchProduct();
    }, []);
    if (!searched) return null;
    return searched;
  }  



export async function getUserLook(){
  var userInfo=[];
  await axios     
      .get(`${Configure.backURL}user/lookup/${userridd}`, {
        headers: {
          "Content-Type": "application/json; charset=ut-8",
          "x-access-token": `${sessionStorage.getItem("token")}`,
        },
      }) 
      .then((response) => {
        //console.log(response);
        if (response.status === 200) {
          for (let i=0; i<response.data.user.length; i++){
            userInfo += response.data.user[i].name + ",";
            localStorage.setItem(`usernametweet ${i}`, response.data.user[i].username);
            localStorage.setItem(`nametweet ${i}`, response.data.user[i].name)
          }
          userInfo=userInfo.slice(0,-1);
          console.log(userInfo);
        }
      })
     
      .catch((error) => {
        userInfo = error.response.data.message;
      });
  
    return userInfo;
  }  

  export function GetTweetsName() {
    const [searched, setSearched] = React.useState([]);
  
    useEffect(() => {
      const fetchProduct = async () => {
        const search = await axios.get(`${Configure.backURL}user/lookup/${userridd}`, 
        {
          
          headers: {
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        })
        setSearched(search);
      };
      fetchProduct();
    }, []);
    if (!searched) return null;
    return searched;
  }  


// export async function getUser() {
//     var user=[];
//     var id = localStorage.getItem("userI");
//     await axios
//       .get(`${Configure.backURL}user/lookup/${id}`, {
//         headers: {
//           "Content-Type": "application/json",
//           "x-access-token": `${sessionStorage.getItem("token")}`,
//         },
//       })
//       .then((response) => {
//         //console.log(response);
//         if (response.status === 200) {
//           user[0] = response.data.user[0].username;
//           user[1] = response.data.user[0].name;
//           //console.log(response.data.user[0].username);
//           //console.log(user);
//         }
//       })
//       .catch((error) => {
//         user = error.response.data.message;
//       });
  
//     return user;
//   }  


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
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
         })
        
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
           message[0] = response.data.user[1][0].name;
           message[1] = response.data.user[1][0].username;
           //message[2] = response.data.user[1][0].name;
           //message[3] = response.data.user[1][0].username;
           //message[2] = response.data.user[1][0]._id;
           localStorage.setItem('user',response.data.user[1][0]._id)
           //console.log(message);
           //console.log(`${localStorage.getItem('searchData')}`);
        } 
        else if (response.status=== 404){
         // console.log(message);
        }
      }).catch(error => {
        message = error.response.data.message;
       console.log(message);
         
          });
    return message;
    };




export async function backEndP(){
      const body = {};
      var message;
    
      var people = [];
      var message1;
        //console.log(localStorage.getItem("searchData"))
        await axios
          .get(`${Configure.backURL}search/people?text=${localStorage.getItem("searchData")}`, 
          {
            
            headers: {
              "Content-Type": "application/json; charset=ut-8",
              "x-access-token": `${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            //console.log(response);
            if (response.status === 200) {
              message = response.data.user;
              // for(let i=0; i< response.data.user[1].length; i++){
              //   people += response.data.user[1][i].username + ",";
              //   localStorage.setItem(`people ${i}`, response.data.user[1][i].username)
                
              // }
              //console.log(response.data.user[1][0])
              
              people=people.slice(0,-1);
              console.log(message);
              //message[1] = response.data.tweets[0].user;
              //localStorage.setItem("userI",response.data.tweets[0].user);
              //console.log(message);
          }
         
        // console.log(response.data); 
        }).catch(error => {
            //console.log(error);
            //message = error.response.data.message;
           // console.log(message);
            });
      return message;
    };
//var u=[];
export function GetSearchedName() {
      const [searched, setSearched] = React.useState([]);
    
      useEffect(() => {
        const fetchProduct = async () => {
          const search = await axios.get(`${Configure.backURL}search/people?text=${localStorage.getItem("searchData")}`, 
          {
            
            headers: {
              "Content-Type": "application/json; charset=ut-8",
              "x-access-token": `${localStorage.getItem("token")}`,
            },
          })
          setSearched(search);
          localStorage.setItem('us',search.data.user[1][0]._id)
         
        };
        fetchProduct();
      }, []);
      if (!searched) return null;
      return searched;
    }  


    export function GetSearchedUserName() {
      const [searched, setSearched] = React.useState([]);
    
      useEffect(() => {
        const fetchProduct = async () => {
          const search = await axios.get(`${Configure.backURL}search/people?text=${localStorage.getItem("searchData")}`, 
          {
            
            headers: {
              "Content-Type": "application/json; charset=ut-8",
              "x-access-token": `${localStorage.getItem("token")}`,
            },
          })
          setSearched(search);
          localStorage.setItem('us',search.data.usernames[1][0]._id)
        };
        fetchProduct();
      }, []);
      if (!searched) return null;
      return searched;
    } 







export function GetSearched() {
      const [searched, setSearched] = React.useState([]);
    
      useEffect(() => {
        const fetchProduct = async () => {
          const search = await axios.get(`${Configure.backURL}search/people?text=${localStorage.getItem("searchData")}`, 
          {
            
            headers: {
              "Content-Type": "application/json; charset=ut-8",
              "x-access-token": `${localStorage.getItem("token")}`,
            },
          })
          setSearched(search);
        };
        fetchProduct();
      }, []);
      if (!searched) return null;
      return searched;
}  






export async function backEndUsername(){
  
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
              //console.log(response);
              if (response.status === 200) {
               message[0] = response.data.usernames[1][0].name;
               message[1] = response.data.usernames[1][0].username;
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
         //console.log(response);
         if (response.status === 200) {
           message = response.data.tweets[0].text;
           //console.log(message);
       } 
       else if (response.status=== 404){
         //console.log(message);
       }
     }).catch(error => {
       message = error.response.data.message;
      // console.log(message);
        
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
           //console.log(response);
           if (response.status === 200) {
             message = response.data.tweets[0].text;
           //  console.log(message);
         } 
         else if (response.status=== 404){
          // console.log(message);
         }
       }).catch(error => {
         message = error.response.data.message;
         //console.log(message);
          
           });
     return message;
     };

     

export function GetSearchedPhotos() {
      const [searched, setSearched] = React.useState([]);
    
      useEffect(() => {
        const fetchProduct = async () => {
          const search = await axios.get(`${Configure.backURL}search/photos?text=${localStorage.getItem("searchData")}`, 
          {
            
            headers: {
              "Content-Type": "application/json; charset=ut-8",
              "x-access-token": `${localStorage.getItem("token")}`,
            },
          })
          setSearched(search);
        };
        fetchProduct();
      }, []);
      if (!searched) return null;
      return searched;
}  






export async function Put_SaveUser(){
    var message;
    var id = localStorage.getItem("us");
    //var id = localStorage.getItem("ID");
    const body={};
      //console.log(id)
     // console.log(`${localStorage.getItem('user')}`)
      //console.log(`${localStorage.getItem('token')}`)
      await axios
        .put(`${Configure.backURL}search/saveUser/${id}`, body,{
          
  
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': `${localStorage.getItem('token')}`,
          },
         
          
        })
        .then((response) => {
          //console.log(response);
          if (response.status === 200) {
            message='';
            
          }
          else if (response.status === 403) {
            message='  ';
          //  console.log(response.data.message);
          }
          else if(response.status === 401 ){
            message=response.data.message;
          }

        }).catch(error => {
           // console.log(error);
            });
      return message;
};   

export async function Delete_SaveUser(){
  var message;
  var id = localStorage.getItem("ID");
  const body={};
   // console.log(`${localStorage.getItem('token')}`)
    await axios
      .put(`${Configure.backURL}search/deleteSaved/${id}`, body,{
        

        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'x-access-token': `${localStorage.getItem('token')}`,
        },
       
        
      })
      .then((response) => {
      //  console.log(response);
        if (response.status === 200) {
          message='';
          
        }
        else if (response.status === 403) {
          message='  ';
         // console.log(response.data.message);
        }
        else if(response.status === 401 ){
          message=response.data.message;
        }

      }).catch(error => {
         // console.log(error);
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
        // console.log(response);
         if (response.status === 200) {
           message = response.data.savedText[0];
         //  console.log(message);
       } 
       else if (response.status=== 404){
       //  console.log(message);
       }
     }).catch(error => {
       message = error.response.data.message;
     //  console.log(message);
        
         });
   return message;
   };


export function SavedSearch() {
    const [searched, setSearched] = React.useState([]);
  
    useEffect(() => {
      const fetchProduct = async () => {
        const search = await axios.get(`${Configure.backURL}search/getsaved`, 
        {
          
          headers: {
            "Content-Type": "application/json; charset=ut-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        })
        setSearched(search);
      };
      fetchProduct();
    }, []);
    if (!searched) return null;
    return searched;
}