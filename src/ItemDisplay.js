import React from 'react';
import './App.css';


function ItemDisplay(props){
    return(

    <li>   
        <form onSubmit={props.onSubmit}>
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
            <input type = "number" placeholder = "Quantity" name = "qty_ordered" id = {props.name} />
            <button type = "submit">Place Order</button>
        </form>
    </li>

    )
}


export default ItemDisplay