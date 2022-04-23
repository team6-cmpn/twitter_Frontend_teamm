import React from "react";
import "./newusers.css";
import { Visibility } from "@material-ui/icons";
import BlockForm from "./Users/BlockForm";
import { Link, BrowserRouter } from "react-router-dom";
import { getTopUsers } from "./MockRegistrationAdmin";
import TopUserItem from "./TopUserComponent";

function NewUsers() {
  const [topusers, setTopusers] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await getTopUsers();
      setTopusers(resp);
    })();
  }, []);
  return (
    <article id="TopFiveUsersWithMostFollowers">
      <div className="newUsers">
      <span className="TopUserTitle"> Top 5 People With Most Followers</span>
        <ul className="newUsersList">
          {topusers.map((userlist, index) => (
            <TopUserItem key={index} user={userlist} />
          ))}
        </ul>
      </div>
    </article>
  );
}

export default NewUsers;
