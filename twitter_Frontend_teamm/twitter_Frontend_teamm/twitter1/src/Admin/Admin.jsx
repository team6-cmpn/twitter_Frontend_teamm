import React from "react";
import TopBar from "./TopBar";
import AdminSidebar from "./AdminSideBar";
import "./Admin.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import FinalUser from "./FinalUser";
import "./Admin.css";
import Statistics from "./statistics";
import AdminHome from "./Home";

function AdminApp() {
  const [location] = React.useState(useLocation().pathname);
  let path = useLocation().pathname;

  return (
    <h3>admin page</h3>
  );
}

export default AdminApp;
