import React from "react";
import "./LikedYou.css";
import {useNavigate} from "react-router";
import { Avatar } from "@material-ui/core";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
const Notified = ({ notify, nType }) => {
  const navigate = useNavigate();
  function OnePost(){ navigate("/post");
    localStorage.setItem("clicked.ID",notify.notificationContent._id );
   
      }
  return (
    <div className="likedYou" id="likedyou">
      <NotificationsActiveIcon />
      {notify.notificationContent ? (
        <>
          

          {nType.notificationType === "favourite" && (
            <div  onClick={()=>OnePost()}>
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
            <div  onClick={()=>OnePost()}>
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
