import React from "react";
import "./FollowedYou.css";
import BlockIcon from '@mui/icons-material/Block';
const Blocked_days = ({ numberOfDays }) => {
  return (
    <div className="followedYou" id="followedyou">
      <BlockIcon className="followedYouIcon" />
      <div>
        <span>
          you were blocked <b>{numberOfDays}</b> days 
        </span>
      </div>
    </div>
  );
};

export default Blocked_days;
