import React from 'react'

export default function TopBlockedUserItem(user) {
  return (
    <div className="newUsersListItem" id="TopUsersItem">
    <div className="newUsersUser">
      <span className="newUsersUserTitle">{user.username}</span>
      <span className='blockuserName' >{user.name}</span>
    </div>
  </div>
  )
}
