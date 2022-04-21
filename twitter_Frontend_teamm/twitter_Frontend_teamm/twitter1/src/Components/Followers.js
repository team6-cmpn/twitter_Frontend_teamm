import './Notifications.css'
import React from 'react';
import  { useState } from 'react';
function Followers(){
    const [isFollowers, setIsFollowers] = useState(true);
    return(
        <div className="notificationsCategory">
            <div
            className={isFollowers && "notificationActive"}
            onClick={() => setIsFollowers(true)}
            >
            <span>Followers</span>
            </div>
            
            <div id="Following"
            className={!isFollowers && "notificationActive"}
            onClick={() => setIsFollowers(false)}
            >
            <span>Following</span>
            </div>
            
        </div>
    )
}
 


 export default Followers;