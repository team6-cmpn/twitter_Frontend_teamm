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
        });
        setNotifications(dashBoard.data)
        };
        fetchProduct();
    }, []);
    if (!notifications) return null;
    console.log("notificationsFav",notifications)
    return notifications;
}



export function GetNotifications() {
    const [notifications, setNotifications] = React.useState([]);
  
    useEffect(() => {
      const fetchProduct=async ()=>{
        const dashBoard= await axios.get(`${Configure.backURL}notifications`, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-access-token": `${localStorage.getItem("token")}`,
          },
        });
        setNotifications(dashBoard.data)
        };
        fetchProduct();
    }, []);
    if (!notifications) return null;
    console.log("notificationsAll",notifications)
    return notifications;
  }