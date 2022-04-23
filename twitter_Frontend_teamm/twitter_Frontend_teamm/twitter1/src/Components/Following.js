import './Notifications.css'
import React from 'react';
import  { useState } from 'react';
import Trends from "./Widgets/Trends";
import Sidebar from "./Sidebar/Sidebar";
function Following(){
    const [isFollowers, setIsFollowers] = useState(true);
    return(
        <div>
            <Sidebar />
            <div className='Expmenu'>
                <div id="FollowersTab" className="notificationsCategory">
                    <div
                    className={!isFollowers && "notificationActive"}
                    onClick={() => setIsFollowers(false)}
                    >
                    <span>Followers</span>
                    </div>
                    
                    <div id="FollowingTab"
                    className={isFollowers && "notificationActive"}
                    onClick={() => setIsFollowers(true)}
                    >
                    <span>Following</span>
                    </div>
                    
                </div>
                <div > 
                    <Trends />  
                </div>
            </div>
      </div>
    )
}
 


 export default Following;