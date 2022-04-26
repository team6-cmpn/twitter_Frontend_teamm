import React from "react";
import ReactDOM from "react-dom";
import Feed from "./feed";
import Header from "./Header_Tweet";
import Post from "./Post";
import {RecoilRoot} from "recoil";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Feed />, div);
});
// eslint-disable-next-line jest/no-identical-title
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});
// eslint-disable-next-line jest/no-identical-title
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <RecoilRoot>
      <Post />
    </RecoilRoot>,
    div
  );
});
