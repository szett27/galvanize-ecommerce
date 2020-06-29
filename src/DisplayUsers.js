import React from "react";
import "./App.css";

class DisplayUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
    };

    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    let url = "http://localhost:3000/users";

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          allUsers: result,
        });
      });
  }

  render() {
    this.getUsers();

    return (
      <div>
        {this.state.allUsers.map((user) => {
          return (
            <ul>
              <li> First Name: {user.firstname} </li>
              <li> Last Name: {user.lastname} </li>
              <li> Email: {user.email} </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default DisplayUsers;
