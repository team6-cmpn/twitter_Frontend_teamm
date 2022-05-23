import React from "react";
import "./FollowedYou.css";
import BlockIcon from '@mui/icons-material/Block';

/**the blocked days due given from the admin
 * 
 * returns the number of days of the block
 */
const Blocked_days = ({ numberOfDays }) => {
  return (
    <div className="BlockedYou" id="blockedyou">
      <BlockIcon className="BlockedYouIcon" />
      <div>
        <span>
          you were blocked <b>{numberOfDays}</b> days 
        </span>
      </div>
    </div>
  );
};

export default Blocked_days;
