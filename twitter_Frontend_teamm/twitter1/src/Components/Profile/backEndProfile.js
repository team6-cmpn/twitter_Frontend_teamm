import axios from 'axios';
import Configure from '../../Configure'




export async function getUserInfo() {
    var user;
    var id = sessionStorage.getItem("userId");
   
    await axios
      .get(`${Configure.backURL}user/show/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${sessionStorage.getItem("token")}`,
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