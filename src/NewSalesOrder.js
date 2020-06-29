import React from 'react';
import './App.css';

class NewSalesOrder extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            items: [],
            manufacturers: [],
            today: new Date().toISOString().substr(0, 10)

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    // id serial PRIMARY KEY,
    // user_id INT REFERENCES users(id),
    // manufacturer INT REFERENCES manufacturers(id),
    // item INT REFERENCES items(id),
    // qty_ordered INT,
    // date_ordered DATE,
    // date_recieved DATE


    handleSubmit(event) {
        event.preventDefault();
    
        let data ={}
          data.user = event.target.user.value;
          data.manufacturer = event.target.manufacturer.value;
          data.item = event.target.item.value;
          data.qty_ordered = event.target.qty_ordered.value;
          data.date_ordered = Date.now();
          
        
        console.log("Data: ", data)
        let url = 'http://localhost:3000/';

      
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


      componentDidMount(){
            let url = "http://localhost:3000/items";
  
            fetch(url)
              .then((res) => res.json())
            //   .then((data) => Object.values(data['name']))
              .then((result) => {
                this.setState({
                  items: result,
                });
              })
              .then(fetch("http://localhost:3000/manufacturers"))
                    .then((res) => res.json())
                    .then((result) => {
                      this.setState({
                        manufacturers: result,
                      });
                    });
                    
        }
    
    
      
    


render(){
    const{items, manufacturers} =  this.state

    return (
        <form onSubmit={this.handleSubmit} >
            <input type="text" name = "user" placeholder ="User..."/><br></br>
            <select name = "item">

                {items.map(item=>{
                 return(
                    <option value ={item['name']}>{item['name']}</option>
                 )
                 })}


            </select>
            <select name = "manufacturer">

                {manufacturers.map(manufacturer=>{
                return(
                    <option value ={manufacturer['companyname']}>{manufacturer['companyname']}</option>
                )
                })}


            </select>
            <input type ="text" name = "qty_ordered" placeholder ="Qty.."/><br></br>
            <div>Date: {this.state.today}</div> 
            <button type="submit">Submit</button>
        </form>
    )
                }
}
 

export default NewSalesOrder