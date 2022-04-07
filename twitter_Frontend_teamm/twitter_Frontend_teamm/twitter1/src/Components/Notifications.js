import React from "react";
import './Notifications.css';
import './Home.css';
import Sidebar from "./Sidebar/Sidebar";
import Trends from "./Widgets/Trends";

function Notifications() {
    const [isAll, setIsAll] = React.useState(true);
  document.title = "Notifications / Twitter";
  
  return (
    <div className="twitter">
       <Sidebar />
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
                
                
                </div>

        <Trends />

        
    </div>
  );
}
export default Notifications;



