import React from "react";
import "./Settings.css";
/**show you type of menu you have chosen */
function SettingsContent({ Icon ,text, active }) {
  return (
    <div className={`SettingsContent ${active && "SettingsContent--active"}`}>
      <span>{text}</span>
      <Icon className="leftArrIcons" active={active && true} />
      
    </div>
  );
}

export default SettingsContent;