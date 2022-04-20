import React from "react";
import "./Notifications.css";
import "./Home.css";
import Trends from "./Widgets/Trends";
import FollowedYou from "./FollowedYou";
import SettingsBox from "./SettingsBox/SettingsBox";
import LikedYou from "./LikedYou";
import getFollowingUsers from "./NotificationsMock";
import {getLikedUsers} from "./NotificationsMock";

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
      <div className="Notimenu">
        <div className="notificationsTitle">
          <span>Notifications</span>
        </div>
        <div className="notificationsCategory">
          <div
            className={isAll && "notificationActive"}
            onClick={() => setIsAll(true)}
          >
            <span>All</span>
          </div>
          <div
            className={!isAll && "notificationActive"}
            onClick={() => setIsAll(false)}
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
