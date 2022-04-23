import React from "react";
import "./Notifications.css";
import "./Home.css";
import Trends from "./Widgets/Trends";
import FollowedYou from "./FollowedYou";
import SettingsBox from "./SettingsBox/SettingsBox";
import LikedYou from "./LikedYou";
import getFollowingUsers from "./NotificationsMock";
import {getLikedUsers} from "./NotificationsMock";
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
  const [followingUser, setFollowingUser] = React.useState([]);
  const [LikedUser, setLikedUser] = React.useState([]);
  
  const [isAll, setIsAll] = React.useState(true);
  document.title = "Notifications / Twitter";
  React.useEffect(() => {
    (async () => {
      const resp = await getFollowingUsers();
      setFollowingUser(resp);
    })();
    (async () => {
      const resp = await getLikedUsers();
      setLikedUser(resp);
    })();
  }, []);

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
            id="LikedButton"
          >
            <span>Liked</span>
          </div>
        </div>
        <article>
          {isAll ? (
            <>
              {followingUser.map((userNotification, index) => (
                <FollowedYou key={index} followingUser={userNotification} />
              ))}
              {LikedUser.map((userNotification, index) => (
              <LikedYou key={index} likePost={userNotification} />
              ))}
            </>
          ) : (
            <>
              {LikedUser.map((userNotification, index) => (
              <LikedYou key={index} likePost={userNotification} />
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
