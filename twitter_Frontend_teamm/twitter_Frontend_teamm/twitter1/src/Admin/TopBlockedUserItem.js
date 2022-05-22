import React from 'react'
import { GetUserList } from './MockRegistrationAdmin';
/**
 * 
 * this function returns component for each most five blokced users
 * @returns 
 */

export default function TopBlockedUserItem(user) {
  const [blockedusers, setBlockedUser] = React.useState(undefined);
  React.useEffect(() => {
    (async () => {
      const resp = await GetUserList();
      let temptweetsPerMonth = [...resp.data[9].tweets_Per_Month];
      temptweetsPerMonth.forEach((element, index) => {
        temptweetsPerMonth[index].user = element.username;
      });
      setBlockedUser(temptweetsPerMonth);
    })();
  }, []);
  console.log(blockedusers)
  return (
    <div className="newUsersListItem" id="TopUsersItem">
    <div className="newUsersUser">
      <span className="newUsersUserTitle">{user.username}</span>
      <span className='blockuserName' >{user.name}</span>
    </div>
  </div>
  )
}
