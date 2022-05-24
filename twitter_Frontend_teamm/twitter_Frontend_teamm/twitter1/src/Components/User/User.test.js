import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "../../ThemeContext";
import User from "./User";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
  
it("renders without crashing settings", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <ThemeProvider>
        <User />
      </ThemeProvider>
    </Router>,
    div
  );
});