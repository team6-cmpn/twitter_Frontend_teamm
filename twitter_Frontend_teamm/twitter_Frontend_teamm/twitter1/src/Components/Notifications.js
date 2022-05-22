import React from "react";
import "./Notifications.css";
import "./Home.css";
import Trends from "./Widgets/Trends";
import Blocked_days from "./YouBlocked";
import FollowedYou from "./FollowedYou";
import SettingsBox from "./SettingsBox/SettingsBox";
import LikedYou from "./LikedYou";
import getFollowingUsers from "./NotificationsMock";
import { getfollowedUsers } from "./NotificationsMock";
import {getLikedUsers} from "./NotificationsMock";
import { GetNotificationsFavourites } from "./NotificationBackend";
import { GetNotifications } from "./NotificationBackend";
import LikedYouBe from "./LikedYouBe";
import Notified from "./Notified";

/**
 * [the notification component is mainly used to get the notifications from the server to the user to see it 
 *  and it contains all the mentions and liked posts and followers you got and i made a menu to scoope on the mentioned posts only
 * no need to scroll down to see the mentioned post you need to see
 * ]
 * @param [it doesnt take any parameters]
 * @returns[it doesnt return any thing ]
 * 
 */
function Notifications() {
  const [Blockeddays, setBlockeddays] = React.useState([]);
  const [LikedUser, setLikedUser] = React.useState([]);
  const [followedyou, setfollowedyou] = React.useState([]);
  const [BE,setNotifications]=React.useState([]);
  const [notifi,setNotificationsFavs]=React.useState([]);
  const [isAll, setIsAll] = React.useState(true);
  document.title = "Notifications / Twitter";
  React.useEffect(() => {
    (async () => {
      const resp = await getfollowedUsers();
      setfollowedyou(resp);
    })();
    (async () => {
      const resp = await getFollowingUsers();
      setBlockeddays(resp);
    })();
    (async () => {
      const resp = await getLikedUsers();
      setLikedUser(resp);
    })();
  }, []);
  React.useEffect(()=>{ 
     (async () => {
    const resp = await GetNotifications();
    setNotifications(resp);
     })();
  },[])
  React.useEffect(()=>{ 
    (async () => {
   const resp = await GetNotificationsFavourites();
   setNotificationsFavs(resp);
    })();
    },[])
  return (
    <SettingsBox>
      <div className="Notimenu" id="NotificationMenu">
        <div className="notificationsTitle" id="NotificationsTitle">
          <span>Notifications</span>
        </div>
        <div className="notificationsCategory" id="NotificationsCAT">
          <div
            className={isAll && "notificationActive"}
            onClick={() => setIsAll(true)}
            id="AllButton "
          >
            <span>All</span>
          </div>
          <div
            className={!isAll && "notificationActive"}
            onClick={() => setIsAll(false)}
            id="MentionsButton"
          >
            <span>Favourites</span>
          </div>
        </div>
        <article>
          {isAll ? (
            <>

              {BE.map((Notifications, index) => (
              <Notified key={index} notify={Notifications} nType={Notifications} />
              ))}

              {/* {Blockeddays.map((Blockeddays,index)=>(
              <Blocked_days
              key={index}
              numberOfDays={Blockeddays.numberOfDays}
              
              />
              ))} */}
              {/* {LikedUser.map((userNotification, index) => (
              <LikedYou key={index} likePost={userNotification} />
              ))}
              {followedyou.map((userNotification, index) => (
              <FollowedYou key={index} followingUser={userNotification} />
              ))} */}
            
              
            </>
          ) : (
            <>
              {/* {LikedUser.map((userNotification, index) => (
              <LikedYou key={index} likePost={userNotification} />
              ))} */}
              {notifi.map((favourites, index) => (
              <LikedYouBe key={index} liked={favourites} />
              ))}
            </>
          )}
        </article>
      </div>

      <Trends />
    </SettingsBox>
  );
}
export default Notifications;
