import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";
export default function SwitchButton() {
    useEffect(() => {
        if (localStorage.getItem('dark') === 'false') {
            theme.dispatch({ type: "LIGHTMODE" });
          } else if((localStorage.getItem('dark') === 'true')) {
            theme.dispatch({ type: "DARKMODE" });
          }
    },[])
  const theme = useContext(ThemeContext);

  const SwitchModes = () => {
    if (theme.state.darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <button id="DarkMode_Button" className={`btn ${theme.state.darkMode ? "btn-dark" : "btn-light"}`} onClick={SwitchModes}>
      {theme.state.darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}