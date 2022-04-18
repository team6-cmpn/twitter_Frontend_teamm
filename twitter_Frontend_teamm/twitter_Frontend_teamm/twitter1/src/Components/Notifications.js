import React from "react";
import './Notifications.css';
import './Home.css';
import Trends from "./Widgets/Trends";
import FollowedYou from "./FollowedYou";
import SettingsBox from "./SettingsBox/SettingsBox"
import LikedYou from "./LikedYou"

function Notifications() {
    const [isAll, setIsAll] = React.useState(true);
  document.title = "Notifications / Twitter";
  
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
                        <span>Mentions</span>
                        </div>
                </div>
                <article>
                  <FollowedYou
                    followingUser={{
                      userImage:
                        "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                      displayName: "Mohamed Fathy",
                    }}
                  />
                  <LikedYou
                  likePost={{
                    id: 1,
                    likeUser: [
                      {
                        displayName: "Fathyjr",
                        userImage:
                          "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                      },
                      {
                        displayName: "Fathyjr",
                        userImage:
                          "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                      },{
                        displayName: "Fathyjr",
                        userImage:
                          "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                      },
                    ],
                    Tweet: "Hello Tweet.",
                  }}
                      />  
                  </article>
                  
                  </div>
               
        <Trends />
        </SettingsBox>

        
  );
}
export default Notifications;



