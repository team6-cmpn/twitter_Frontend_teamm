import '../Notifications.css'
import React from 'react';
import { useState } from 'react';
import Trends from "../Widgets/Trends";
import Sidebar from "../Sidebar/Sidebar";
import { getFollowerUsers } from "./FollowersMock";
import { getFollowingUsers } from "./FollowersMock";
import FollowersList from './FollowersList';
import FollowingList from './FollowingList';

function Followers() {
    const [FollowerUsers,setFollowerUsers]=React.useState([])
    React.useEffect(()=>{
        (async () => {
            const resp = await getFollowerUsers();
            setFollowerUsers(resp);
          })();
    
        },[])
    const [FollowingUsers,setFollowingUsers]=React.useState([])
    React.useEffect(()=>{
        (async () => {
            const resp = await getFollowingUsers();
            setFollowingUsers(resp);
          })();
    
        },[])
    const [isFollowers, setIsFollowers] = useState(true);
    return (
        <div>
            <Sidebar />
            <div className='Expmenu'>
                <div id="FollowersTab" className="notificationsCategory">
                    <div
                        className={isFollowers && "notificationActive"}
                        onClick={() => setIsFollowers(true)}
                    >
                        <span>Followers</span>
                    </div>
                   
                    <div id="FollowingTab"
                        className={!isFollowers && "notificationActive"}
                        onClick={() => setIsFollowers(false)}
                    >
                        <span>Following</span>
                    </div>
                </div>
                <article>
          {isFollowers ? (
            <>
              {FollowerUsers.map((FollowerUsers,index)=>(
                <FollowersList key={index} FollowerAccount={FollowerUsers}/>))}
            
            </>
          ) : (
            <>
             {FollowingUsers.map((FollowingUsers,index)=>(
                <FollowingList key={index} FollowingAccount={FollowingUsers}/>))}
            </>
          )}
        </article>
                <div >
                    <Trends />
                </div>
            </div>
        </div>
    )
}



export default Followers;