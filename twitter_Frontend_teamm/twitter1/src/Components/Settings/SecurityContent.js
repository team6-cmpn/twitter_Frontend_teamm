import React from "react";
import "./settingsSubmenus.css";

function SecurityContent({ Icon ,text, active }) {
  return (
    <div className={`SecurityContent` }>
      <span>{text}</span>
      <Icon className="leftArrowSec" active={active && true} />
      
    </div>
  );
}

export default SecurityContent;