import React from 'react'

export default function TopBlockedUserItem(user) {
  return (
    <div className="newUsersListItem" id="TopUsersItem">
    <div className="newUsersUser">
      <span className="newUsersUserTitle">{user.username}</span>
      <span >{user.followers_count}</span>
    </div>
  </div>
  )
}
