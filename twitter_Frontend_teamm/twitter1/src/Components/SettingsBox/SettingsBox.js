import React from "react";
import "./SettingsBox.css";
import Sidebar from "../Sidebar/Sidebar";

const SettingsBox = ({ children }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeBox">{children}</div>
    </div>
  );
};

export default SettingsBox;
