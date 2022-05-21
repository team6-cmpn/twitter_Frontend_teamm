import axios from 'axios'
import Configure from '../Configure'
import React from 'react';
import { useEffect } from 'react';
export function GetNotificationsFavourites() {
    const [notifications, setNotifications] = React.useState([]);
  
    useEffect(() => {
      const fetchProduct=async ()=>{
        const dashBoard= await axios.get(`${Configure.backURL}notifications/favourites`, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        }).then((res)=>res.data);
        setNotifications(dashBoard.data)
        };
        fetchProduct();
    }, []);
    if (!notifications) return null;
    return notifications;
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



