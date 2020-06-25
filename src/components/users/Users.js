import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "id1",
        login: "mojo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "id2",
        login: "kino",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "i3d",
        login: "zoko",
        avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
        html_url: "https://github.com/mojombo",
      },
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
