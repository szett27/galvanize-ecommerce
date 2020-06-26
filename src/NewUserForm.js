import React from 'react';
import './App.css';

function NewUserForm(props){
    return (
        <form onSubmit={props.onSubmit} >
            <input type="text" name = "firstname"/>
            <input type ="text" name = "lastname" />
            <input type ="email" name = "email" />
            <button type="submit">Submit</button>
        </form>
    );
}   

export default NewUserForm;