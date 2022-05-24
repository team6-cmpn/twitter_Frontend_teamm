import '../Notifications.css'
import React from 'react';
import  { useState } from 'react';
import Trends from "../Widgets/Trends";
import Sidebar from "../Sidebar/Sidebar";
// import { getFollowerUsers } from "../Profile/FollowersMock";
// import { getFollowingUsers } from "../Profile/FollowersMock";
import FollowersList from '../Profile/FollowersList';
import FollowingList from '../Profile/FollowingList';
// import {getFollowersList,getFollowingList} from './backEndProfile';
import axios from 'axios';
import Configure from '../../Configure'
/**Following page
 * Shows following pages
 *  
 * @returns (Layout of following page)
 */
function Following(){
    async function getFollowersList() {
        var id = localStorage.getItem("clicked_userID");
        await axios
          .get(`${Configure.backURL}user/followersList/${id}`, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": `${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            // console.log(response);
            // console.log("zeft");
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
        var id = localStorage.getItem("clicked_userID");
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
                <article>
                    {isFollowers ? (
                        <>
                        {/* <div>{FollowingUsers.map((FollowingUsers,index)=>(
                            <FollowingList key={index} FollowingAccount={FollowingUsers}/>))}</div> */}
                            <div>
                            {FollowingLists.map((FollowingUsers,index)=>(
                            <FollowingList key={index} FollowingAccount={FollowingUsers}/>))}</div>
                        </>
                    ) : (
                        <>
                        {/* <div>{FollowerUsers.map((FollowerUsers,index)=>(
                            <FollowersList key={index} FollowerAccount={FollowerUsers}/>))}</div> */}
                            <div> 
                            {FollowersLists.map((FollowerUsers,index)=>(
                            <FollowersList key={index} FollowerAccount={FollowerUsers}/>))}</div>
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
 


 export default Following;