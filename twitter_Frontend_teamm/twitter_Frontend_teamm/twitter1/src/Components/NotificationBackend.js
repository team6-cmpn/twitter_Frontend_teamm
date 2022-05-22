import axios from 'axios'
import Configure from '../Configure'
export async function GetNotificationsFavourites() {
   
  let response=''
   
         response= await axios.get(`${Configure.backURL}notifications/favourites`, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          }
        });
        

    if (!response) return null;
    return response.data;
}



export async function GetNotifications() {
    
  let response=''
   
         response= await axios.get(`${Configure.backURL}notifications`, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          }
        });
        

    if (!response) return null;
    return response.data;
  }



