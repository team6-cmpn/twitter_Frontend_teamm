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
                {isAll ? (
              <>
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "MohamedFathy",
                  }}
                  
                />
                
                <LikedYou
                  likePost={{
                    id: 1,
                    likeUser: [
                      {
                        displayName: "Mohamed",
                        userImage:
                          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
                      },
                      {
                        displayName: "fathy",
                        userImage:
                          "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
                      },
                      {
                        displayName: "jr",
                        userImage:
                          "https://pbs.twimg.com/profile_images/1278357302601347072/BGZIBPH9_200x200.jpg",
                      },
                    ],
                    post: "Hi tweet.",
                  }}
                />
                
                
              </>
            ) : (
              <>
                <FollowedYou
                  followingUser={{
                    userImage:
                      "https://pbs.twimg.com/profile_images/1348390204810407937/BmUVaYGD_400x400.jpg",
                    displayName: "Mohamed Fathy",
                  }}
                />
              </>
            )
                }
         
                  </article>
                  
                  </div>
               
        <Trends />
        </SettingsBox>

        
  );
}
export default Notifications;



