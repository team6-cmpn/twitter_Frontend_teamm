import React from "react";
import "./settingsSubmenus.css";

function SubsettingsContent({ discrip,Icon ,text, active,Icon2 }) {
  return (
    <div className={`SubsettingsContent `}>
      <Icon2 className="SubsettingsIcons" active={active && true} />
      <div className="text_discrip">
        <h5>{text}</h5>
        <h6>{discrip}</h6>
      </div>
      <Icon className="leftArrowIcons" active={active && true} />
      
    </div>
  );
}

export default SubsettingsContent;