import React from "react";
import "./Notifications.css";
import "./Home.css";
import Trends from "./Widgets/Trends";
import Blocked_days from "./FollowedYou";
import SettingsBox from "./SettingsBox/SettingsBox";
import LikedYou from "./LikedYou";
import getFollowingUsers from "./NotificationsMock";
import { GetPostTweet } from "./homepage/feedmock";
import {getLikedUsers} from "./NotificationsMock";
import Post from "./homepage/Post";
import { RecoilRoot } from "recoil";
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
  const [twetted, postedtweet] = React.useState([]);

  const [isAll, setIsAll] = React.useState(true);
  document.title = "Notifications / Twitter";
  React.useEffect(() => {
    (async () => {
      const resp = await GetPostTweet();
      postedtweet(resp);
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

  return (
    <RecoilRoot>
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
              {Blockeddays.map((Blockeddays,index)=>(
              <Blocked_days
              key={index}
              numberOfDays={Blockeddays.numberOfDays}
              
              />
              ))}
              {LikedUser.map((userNotification, index) => (
              <LikedYou key={index} likePost={userNotification} />
              ))}
            {twetted.map((userlist, index) => (
            <Post
              key={index}
              displayName={userlist.displayName}
              username={userlist.username}
              text={userlist.text}
              image={userlist.image}
              avatar={userlist.avatar}
              date={userlist.date}
            />
          ))}
            </>
          ) : (
            <>
             {twetted.map((userlist, index) => (
            <Post
              key={index}
              displayName={userlist.displayName}
              username={userlist.username}
              text={userlist.text}
              image={userlist.image}
              avatar={userlist.avatar}
              date={userlist.date}
            />
          ))}
            </>
          )}
        </article>
      </div>

      <Trends />
    </SettingsBox>
    </RecoilRoot>
  );
}
export default Notifications;
