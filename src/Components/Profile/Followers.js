import '../Notifications.css'
import React from 'react';
import { useState } from 'react';
import Trends from "../Widgets/Trends";
import Sidebar from "../Sidebar/Sidebar";
// import { getFollowerUsers } from "./FollowersMock";
// import { getFollowingUsers } from "./FollowersMock";
import FollowersList from './FollowersList';
import FollowingList from './FollowingList';
import axios from 'axios';
import Configure from '../../Configure'
// import {getFollowersList} from './backEndProfile';

/**Followers page
 * Shows followers page
 *  
 * @returns (Layout of followers page)
 */


function Followers() {
    async function getFollowersList() {
        var id = localStorage.getItem("userId");
        await axios
          .get(`${Configure.backURL}user/followersList/${id}`, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": `${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            setFollowersList(response.data.follower);
            return response;
          })
          .catch((error) => {
          });}

    const [FollowersLists,setFollowersList]=React.useState([])
    React.useEffect(()=>{
        ( () => {
            getFollowersList();
          })();
    
        },[])

        async function getFollowingList() {
            var id = localStorage.getItem("userId");
            await axios
              .get(`${Configure.backURL}user/followingList/${id}`, {
                headers: {
                  "Content-Type": "application/json",
                  "x-access-token": `${localStorage.getItem("token")}`,
                },
              })
              .then((response) => {
                setFollowingList(response.data.following);
                
                return response;
              })
              .catch((error) => {
              });
          }
    
            const [FollowingLists,setFollowingList]=React.useState([])
            React.useEffect(()=>{
                ( () => {
                    getFollowingList();
                  })();
            
                },[])
        
    // const [FollowerUsers,setFollowerUsers]=React.useState([])
    // React.useEffect(()=>{
    //     (async () => {
    //         const resp = await getFollowerUsers();
    //         setFollowerUsers(resp);
    //       })();
    
    //     },[])
    // const [FollowingUsers,setFollowingUsers]=React.useState([])
    // React.useEffect(()=>{
    //     (async () => {
    //         const resp = await getFollowingUsers();
    //         setFollowingUsers(resp);
    //       })();
    
    //     },[])
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
             {/* <div> {FollowerUsers.map((FollowerUsers,index)=>(
                <FollowersList key={index} FollowerAccount={FollowerUsers}/>))}
              </div> */}
                <div>
                    {FollowersLists.map((FollowerUsers,index)=>(
                    <FollowersList key={index} FollowerAccount={FollowerUsers}/>))}
                </div>
            </>
          ) : (
            <>
                {/* <div>{FollowingUsers.map((FollowingUsers,index)=>(
                <FollowingList key={index} FollowingAccount={FollowingUsers}/>))}
                </div> */}
                <div>{FollowingLists.map((FollowingUsers,index)=>(
                <FollowingList key={index} FollowingAccount={FollowingUsers}/>))}
                </div>
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