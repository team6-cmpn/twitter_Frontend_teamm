import React from "react";
import "./topfiveusers.css";
import { GetAdminUserList, GetDashBoardstat, GetHashtags } from "./MockRegistrationAdmin";
import TopUserItem from "./TopUserComponent";
import TopHashtagComponent from "./TopHashtagComponent";
/**
 *
 * this function returns top five most followers
 * 
 */
function TopUsers() {
  const topUsers = GetDashBoardstat()[0];
  const hashtag = GetDashBoardstat()[5];
  const [topusersi, setTopUser] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await GetAdminUserList();
      let temptweetsPerMonth = [...resp.data];
      temptweetsPerMonth.forEach((element, index) => {
        temptweetsPerMonth[index].user = element?.username;
      });
      setTopUser(temptweetsPerMonth);
    })
    ();
  }, []);
  console.log(topusersi)
  

  return (
    // <article id="TopFiveUsersWithMostFollowers">
    <div className="blocks">
      <div className="newUsers">
        <span className="TopUserTitle">Top 5 People With Most Followers</span>
        <div className="topUserList">
          {topUsers?.users_With_Most_Followers.map((userlist, index) => (
            <TopUserItem key={index} user={userlist} />
          ))}
        </div>
      </div>
      <div className="toptweets">
        <span className="TopUserTitle"> Top 5 Tweets</span>
        <ul className="newUsersList">
          {hashtag?.top_Five_Liked_Tweets.map((userlist, index) => (
            <TopHashtagComponent key={index} hashtag={userlist} />
          ))}
        </ul>
      </div>
    </div>
    // </article>
  );
}

export default TopUsers;
