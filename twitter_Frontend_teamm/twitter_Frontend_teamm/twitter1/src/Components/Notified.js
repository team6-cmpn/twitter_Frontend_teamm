import React from "react";
import "./LikedYou.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Avatar } from "@material-ui/core";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
const Notified = ({ notify, nType }) => {
  return (
    <div className="likedYou" id="likedyou">
      <NotificationsActiveIcon />
      {notify.notificationContent.text ? (
        <>
          {nType.notificationType === "block" && (
            <div>
              <span>
                <b>{notify.notificationHeader.text}</b>
              </span>
            </div>
          )}
          {nType.notificationType === "unblock" && (
            <div>
              <span>
                <b>{notify.notificationHeader.text}</b>
              </span>
            </div>
          )}

          {nType.notificationType === "favourite" && (
            <div>
              <div>
                <Avatar src={notify.notificationHeader.images} />
              </div>
              <span>
                <b>{notify.notificationHeader.text}</b>
              </span>
              <span>{notify.notificationContent.text}</span>
            </div>
          )}
          {nType.notificationType === "tweet" && (
            <div>
              <div>
                <Avatar src={notify.notificationHeader.images} />
              </div>
              <span>
                <b>{notify.notificationHeader.text}</b>
              </span>
              <span>{notify.notificationContent.text}</span>
            </div>
          )}
        </>
      ) : (
        <>
          <div>
            <span>
              <b>{notify.notificationHeader.text}</b>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Notified;
