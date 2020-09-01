import React from "react";


const UserCard = ({ user }) => {
  // console.log(user)


  return (
    <div>
      <img src={user.avatar_url}/><br />
      {user.name}<br />
      Handle:
        <a href={user.html_url} >
          @{user.login}
        </a>
      <br />
      Followers: {user.followers}<br />
      Following: {user.following}<br />
      Location: {user.location}<br />
      {/* repos will need it's own specialness, it returns an api??? */}
      {/* {user.repos_url}<br /> */}
      {user.html_url}<br />
      User Since: {user.created_at}<br />

    </div>
  )
}

export default UserCard;