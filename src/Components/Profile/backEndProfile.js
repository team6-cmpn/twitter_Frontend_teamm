import axios from 'axios';
import Configure from '../../Configure'

export async function GetUserInfo() {
    var userinfo;
    var id = localStorage.getItem("userId");
   
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
          userinfo = response.data.user;
          console.log(response.data.user);
          localStorage.setItem("description",response.data.user.description);
          localStorage.setItem("numberOfFollowers",response.data.user.followings_count);
        }
      })
      .catch((error) => {
        userinfo = error.response.data.message;
      });
  
    return userinfo;
  
}
 

  // export async function getFollowingList() {
    
    
  //   var id = localStorage.getItem("userId");
   
  //  const followingList = await axios
  //     .get(`${Configure.backURL}user/followingList/${id}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-access-token": `${localStorage.getItem("token")}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       // console.log(response.data[0].name);
  //       console.log("zeft");
  //       // if (response.status === 200) {
  //         // user = response.data;
        
  //         // const followingname = response;
  //         console.log("mmmmmmm",response) 
  //       return response;
  //         // for (let i=0;i<response.data.length;i++){
            
  //         //   localStorage.setItem(`followingUser ${i}`,response.data[i].name);
  //         //   localStorage.setItem(`followingUsername ${i}`,response.data[i].username);
  //         // }
  //       // }
  //     })
  //     .catch((error) => {
  //       // following = error.response.data.message;
  //     });
  
  //   // return followingname;
  // }
  export async function getFollowersList() {
    var user;
    var id = localStorage.getItem("userId");
   
    await axios
      .get(`${Configure.backURL}user/followersList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        console.log("araf");
        if (response.status === 200) {
          user = response.data;
          console.log(response.data[0].name)
          for (let i=0;i<response.data.length;i++){
            localStorage.setItem(`followerUser ${i}`,response.data[i].name);
            localStorage.setItem(`followerUsername ${i}`,response.data[i].username);
          }
        }
      })
      .catch((error) => {
        user = error.response.data.message;
      });
  
    return user;
  }

  export async function gettweetlist() {
    var response='';
    var id = localStorage.getItem("userId");
    await axios
      .get(`${Configure.backURL}user/tweetsList/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // tweet = response.data;
          for (let i=0;i<response.data.tweet.length;i++){
            
            localStorage.setItem(`text ${i}`,response.data.tweet[i].text);
            localStorage.setItem(`imageUrl ${i}`,response.data[i].imageUrl);
            localStorage.setItem(`tweetdateat ${i}`,response.data[i].created_at);
          }
          console.log(response.data);
        }
      })
      .catch((error) => {
       console.log(error);
      });
  
    return response.data;
  }
  
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

  export async function UpdateProfile(body){
    var message;
    body =  {
        name: sessionStorage.getItem("name"),
        description: sessionStorage.getItem("description"),
      }
      // console.log(`${localStorage.getItem('token')}`)
      await axios
        .post(`${Configure.backURL}user/update/`,body, {
          
  
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'x-access-token': `${localStorage.getItem('token')}`,
          },
         
          
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            message=response;
            console.log(response.data.message);
          }
          else if (response.status === 403) {
            message=response;
            console.log(response.data.message);
          }
          else if(response.status === 401 || response.status === 404 ){
            message=response;
          }

        }).catch(error => {
            console.log(error);
            });
      return message;
  };

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
