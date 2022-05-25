import React from "react";
import ReactDOM from "react-dom";
import Feed from "./feed";
import Header from "./Header_Tweet";
import Post from "./Post";
import {RecoilRoot} from "recoil";
import Home_look from "./Home_feed";
import Router from "json-server/lib/server/router";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Feed />
    </Router>,
    div
  );
});
// eslint-disable-next-line jest/no-identical-title
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Router><Header /></Router>, div);
});
// eslint-disable-next-line jest/no-identical-title
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Router>
    <RecoilRoot>
      <Post />
    </RecoilRoot></Router>,
    div
  );
});
// eslint-disable-next-line jest/no-identical-title
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Home_look />
    </Router>,
    div
  );
});
