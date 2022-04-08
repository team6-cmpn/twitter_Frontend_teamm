import React from "react";
import "./Settings.css";

function SettingsContent({ Icon ,text, active }) {
  return (
    <div className={`SettingsContent ${active && "SettingsContentActive"}`}>
      <span>{text}</span>
      <Icon className="leftArrIcons" active={active && true} />
      
    </div>
  );
}

export default SettingsContent;