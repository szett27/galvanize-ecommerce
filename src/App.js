import React from 'react';
import './App.css';
import NewUserForm from './NewUserForm'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userFormvis: false,

    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();

    let data ={}
      data.firstname = event.target.firstname.value;
      data.lastname = event.target.lastname.value;
      data.email = event.target.email.value;
    

    let url = 'http://localhost:3000/createUser'


  
    fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }  


  render(){
    console.log(this.state)
  return (
    <div className="App">
    <button name ="newUser" onClick={this.setState({userFormvis: true})}>New User</button>
    {this.state.userFormvis ? <NewUserForm onSubmit = {this.handleSubmit.bind(this)} />: null}

    </div>
  );
}

}
export default App;
