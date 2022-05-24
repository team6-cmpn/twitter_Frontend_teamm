import React from "react";
import "./welcomepage.css"

/**
 *
 * this function returns a welcome page component without 
 * topbar and side bar
 * 
 */
export default function welcomePage() {
  return (
    <div className="welcomepage">
      <div className="welcomepageItem">
        <span className="welcomepageTitle">Welcome To The Home Page Of Admin</span>
      </div>
    </div>
  );
}
