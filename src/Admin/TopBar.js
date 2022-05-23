import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { GetUserInfo } from "../Components/Profile/backEndProfile";
import Configure from "../Configure";

/**
 *
 * topbar of the admin pages
 * @returns
 */
export default function Topbar() {
  var info = GetUserInfo();
  const [test, istest] = React.useState();
  info.then(function (result) {
    console.log("result", result);
    istest(result);
  });
  console.log(info);
  var Url = test?.profile_image_url;
  return (
    <div className="topbar" id="AdminTopBar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <Link to={`/profile`}>
            {" "}
            <img
              src={`${Configure.backURL}${Url}`}
              alt=""
              className="topAvatar"
            ></img>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
