import React from 'react';
import './App.css';
import ItemDisplay from "./ItemDisplay"

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



    handleSubmit(event) {
        console.log("Event Happened")
        event.preventDefault();

        console.log("Event: ", event.target.qty_ordered.id)
        let data ={}
        //   data.user = event.target.user.value;
        //   data.manufacturer = event.target.manufacturer.value;
          data.item = 5;
          data.qty_ordered = event.target.qty_ordered.value;
          data.date_ordered = this.state.today;
          data.user_id = 1;
          data.manufacturer = 1;
          data.date_recieved = this.state.today;
          
        
        console.log("Data: ", data)
        let url = 'http://localhost:3000/sales';

      
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
        }
    
    
      
    


render(){
    const{items, manufacturers} =  this.state

    return (
        <div>
        <h2>What will you buy today?</h2>
        <ul>
           
        {items.map(item=>{
            return(
               <ItemDisplay onSubmit = {this.handleSubmit.bind(this)} name={item.name} description={item.description} />
            )
            })}
        </ul>
        </div>
       
    )
                }
}
 

export default NewSalesOrder