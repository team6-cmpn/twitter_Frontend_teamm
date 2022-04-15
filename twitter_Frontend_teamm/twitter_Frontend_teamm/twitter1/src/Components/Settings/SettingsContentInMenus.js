import React from "react";
import "./settingsSubmenus.css";

function SettingsContentInMenus({ Icon ,text, active }) {
  return (
    <div className={`SettingsContentInMenus ${active && "SettingsContentActive"}`}>
      <span>{text}</span>
      <Icon className="leftArrowIcons2" active={active && true} />
      
    </div>
  );
}

export default SettingsContentInMenus;