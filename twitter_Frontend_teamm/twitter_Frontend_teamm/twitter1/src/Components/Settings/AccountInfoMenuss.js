import React from "react";
import "./settingsSubmenus.css";
/**component to veiew the settings menu */
function AccountInfoMenuss({ Icon ,text, data,active }) {
  return (
    <div className={`SettingsContentInMenus ${active && "SettingsContentActive"}`}>
    <div className="Accountinfo_discrip">

      <h5>{text}</h5>
      <h6>{data}</h6>
      </div>
      <Icon className="leftArrowIcons2" active={active && true} />
      
    </div>
  );
}

export default AccountInfoMenuss;