import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ThemeProvider } from "../ThemeContext";

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};
it('Notifications renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Router>
    <ThemeProvider>
    <Notifications />
    </ThemeProvider>
  </Router>, div);
});