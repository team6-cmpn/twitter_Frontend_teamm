import axios from 'axios';
import Configure from '../../Configure'

export async function getUserInfo() {
    var user;
    var id = sessionStorage.getItem("userId");
   
    await axios
      .get(`${Configure.backURL}user/show/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          user = response.data.user[0].username;
          console.log(response.data.user[0].username);
        }
      })
      .catch((error) => {
        user = error.response.data.message;
      });
  
    return user;
  }

 

  export async function getFollowingList(id) {
    var user;
    // var id = localStorage.getItem("userId");
   
    await axios
      .get(`${Configure.backURL}user/followingList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          user = response.data;
        }
      })
      .catch((error) => {
        user = error.response.data.message;
      });
  
    return user;
  }
  export async function getFollowersList(id) {
    var user;
    // var id = localStorage.getItem("userId");
   
    await axios
      .get(`${Configure.backURL}user/followersList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          user = response.data;
        }
      })
      .catch((error) => {
        user = error.response.data.message;
      });
  
    return user;
  }
  export async function gettweetlist() {
    var tweet;
    await axios
      .get(`${Configure.backURL}user/tweetsList/`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          tweet = response.data;
          console.log(response.data);
        }
      })
      .catch((error) => {
       console.log(error);
      });
  
    return tweet;
  }
  
  export const UpdateProfile=async payload=>{
    var message;
      const {
        name,
        description,
      } = payload;
      await axios
        .post(`${Configure.backURL}user/update/`, {
  
          headers: {
            'Content-Type': 'application/json',
            "x-access-token": `${localStorage.getItem("token")}`,
          },
          name,
          description,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message=response.data;
            
            
          }
        }).catch(error => {
            console.log(error)
            });
      return message;
  };
  export async function getlikedtweetlist() {
    var tweet;
    await axios
      .get(`${Configure.backURL}user/likedTweetsList/`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          tweet = response.data;
          console.log(response.data);
        }
      })
      .catch((error) => {
       console.log(error);
      });
  
    return tweet;
  }

  // export async function UpdateProfile(){
  //   var message;
  //   const body =  {
  //       name: sessionStorage.getItem("name"),
  //       description: sessionStorage.getItem("description"),
  //     }
  //     console.log(`${localStorage.getItem('token')}`)
  //     await axios
  //       .post(`${Configure.backURL}user/update/`,body, {
          
  
  //         headers: {
  //           'Content-Type': 'application/json; charset=utf-8',
  //           'x-access-token': `${localStorage.getItem('token')}`,
  //         },
         
          
  //       })
  //       .then((response) => {
  //         console.log(response);
  //         if (response.status === 200) {
  //           message=response;
  //           console.log(response.data.message);
  //         }
  //         else if (response.status === 403) {
  //           message=response;
  //           console.log(response.data.message);
  //         }
  //         else if(response.status === 401 || response.status === 404 ){
  //           message=response;
  //         }

  //       }).catch(error => {
  //           console.log(error);
  //           });
  //     return message;
  // };

  // export const UploadImageProfile=async payload=>{
  //   var Image;
  //     const {
  //       src,
  //       alt,
  //     } = payload;
  //     await axios
  //       .post(`${Configure.backURL}image/profile/upload`, {
  
  //         headers: {
  //           'Content-Type': 'application/json',
  //           "x-access-token": `${localStorage.getItem("token")}`,
  //         },
  //        src,
  //        alt,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //         if (response.status === 200) {
  //           Image='';
  //           // localStorage.setItem('logInAccessToken', response.data.accessToken);
            
  //         }
  //       }).catch(error => {
  //           console.log()
  //           });
  //     return Image;
  // };
