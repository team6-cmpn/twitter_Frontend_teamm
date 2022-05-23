import React from "react";
import ReactDOM from "react-dom";
import Settings from "./Settings";
import ChangeUsername from "./changeUsername";
import Changepassword from "./changepassword";
import ChangeEmail from "./ChangeEmail";
import Changephone from "./ChangePhone";
import DeactivateAcc from "./DeactiviateAcc";
import YourAccount from "./YourAccount";
import PrivacyAndSafety from "./PrivacyAndSafety";
import MuteandBlock from "./MuteandBlock";
import AccountInformation from "./AccountInfo";
import BlockedAccounts from "./BlockedAccounts";
import MutedAccounts from "./MutedAccounts";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "../../ThemeContext";
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
        <Settings />
      </ThemeProvider>
    </Router>,
    div
  );
});

it("renders without crashing username", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <ChangeUsername />
    </Router>,
    div
  );
});

it("renders without crashing password", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Changepassword />
    </Router>,
    div
  );
});

it("renders without crashing email", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <ChangeEmail />
    </Router>,
    div
  );
});

it("renders without crashing phone", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Changephone />
    </Router>,
    div
  );
});

it("renders without crashing your account", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <YourAccount />
    </Router>,
    div
  );
});

it("renders without crashing deactivte account", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <DeactivateAcc />
    </Router>,
    div
  );
});

it("renders without crashing privacy", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <PrivacyAndSafety />
    </Router>,
    div
  );
});

it("renders without crashing muteandblock", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <MuteandBlock />
    </Router>,
    div
  );
});

it("renders without crashing accinfo", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <AccountInformation />
    </Router>,
    div
  );
});

it("renders without crashing blocked accounts", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <BlockedAccounts />
    </Router>,
    div
  );
});

it("renders without crashing mutedaccounts", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <MutedAccounts />
    </Router>,
    div
  );
});
