import React from "react";
import "./App.css";
import NewUserForm from "./NewUserForm";
import DisplayUsers from "./DisplayUsers";
import NewPurchaseOrder from "./NewPurchaseOrder"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFormvis: false,
      allUsersVis: false,
      purchaseOrderVis: false,
    };
    this.toggle = this.toggle.bind(this);
    // this.DisplayUserstoggle = this.DisplayUserstoggle.bind(this)
  }

  toggle(view) {
    console.log("View: ", view);
    let currentstate = this.state[view];
    this.setState({ [view]: !currentstate });
  }

  render() {
    const { userFormvis, allUsersVis } = this.state;

    return (
      <div className="App">
      <ul className = "mainScreen">
        <button name="newUser" onClick={() => this.toggle("userFormvis")}>
          New User
        </button>
        {this.state.userFormvis ? <NewUserForm /> : null}
        <button name="allUsers" onClick={() => this.toggle("allUsersVis")}>
          Display All Users
        </button>
        {this.state.allUsersVis ? <DisplayUsers /> : null}
        <button name="purchaseOrder" onClick={() => this.toggle("purchaseOrderVis")}>
          New Purchase Order
        </button>
        {this.state.purchaseOrderVis ? <NewPurchaseOrder /> : null}
        </ul>
      </div>
    );
  }
}
export default App;
