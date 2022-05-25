import   * as mockAPI  from './ProfileMock'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "../../ThemeContext";
import Profile from "./Profile";

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
        <Profile />
      </ThemeProvider>
    </Router>,
    div
  );
});

  var body={
    name: "Menna",
    bio: "Heyy",
    location: "Cairo",
    website: "www.me.com",
    img: {
        "alt": "Screenshot (1).png",
        "src": "blob:http://localhost:3000/e26010d9-cd96-436a-8888-241fa7424824"
      },
}

  test('Profile information', () => {
    expect(mockAPI.Profile(body)).toBeTruthy();
  });