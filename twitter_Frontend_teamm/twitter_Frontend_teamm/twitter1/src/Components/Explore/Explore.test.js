import React from "react";
import ReactDOM from "react-dom";
import Explor from "./Explor";
import Explore from "./Explore";

import Router from "json-server/lib/server/router";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Explore />
    </Router>,
    div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Explor />
    </Router>,
    div);
});
