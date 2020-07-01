import React from "react";
import "./App.css";
import NewUserForm from "./NewUserForm";
import DisplayUsers from "./DisplayUsers";
import NewPurchaseOrder from "./NewPurchaseOrder"
import NewSalesOrder from "./NewSalesOrder"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFormvis: false,
      allUsersVis: false,
      purchaseOrderVis: false,
      businessVis: false,
      consumerVis: false,
      salesOrderVis: false,
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
    const { userFormvis, allUsersVis, businessVis, consumerVis } = this.state;

    return (
      <div className="App">
      <h1>Welcome to E-Commerce!</h1>
      
      <ul className = "mainScreen">
      <li style={{display: "inline"}}><button name = "consumer" onClick={()=>this.setState({businessVis: false, consumerVis: true})}>Consumer</button></li>
      <li style={{display: "inline"}}><button name = "businessVis" onClick={()=>this.setState({businessVis: true, consumerVis: false})}>Business</button></li>
       {this.state.consumerVis ? <li><button name="newUser" onClick={() => this.toggle("userFormvis")}>
          New User
        </button></li>: null}
        {this.state.userFormvis ? <NewUserForm /> : null}
      {businessVis ? <li><button name="allUsers" onClick={() => this.toggle("allUsersVis")}>
          Display All Users
        </button></li> : null}
        {this.state.allUsersVis &&  businessVis ? <DisplayUsers /> : null}
        {businessVis ? <li><button name="purchaseOrder" onClick={() => this.toggle("purchaseOrderVis")}>
          New Purchase Order
        </button></li>: null}
        {this.state.purchaseOrderVis &&  businessVis? <NewPurchaseOrder /> : null}
        {/* {consumerVis ? <li><button name="salesOrder" onClick={() => this.toggle("salesOrderVis")}>
          New Sales Order
        </button></li>: null} */}
        {consumerVis? <NewSalesOrder /> : null}
        </ul>
      </div>
    );
  }
}
export default App;
