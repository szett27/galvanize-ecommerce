import React from "react";
import "./App.css";

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let data = {};
    data.firstname = event.target.firstname.value;
    data.lastname = event.target.lastname.value;
    data.email = event.target.email.value;

    console.log("Data: ", data);
    let url = "http://localhost:3000/createUser";

    fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstname" placeholder="First Name..." />
        <br></br>
        <input type="text" name="lastname" placeholder="Last Name..." />
        <br></br>
        <input type="email" name="email" placeholder="Email.." />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewUserForm;
