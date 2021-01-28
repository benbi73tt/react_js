import React, { Component } from 'react';
import './style.css';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

//!Контролируемый input

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            TextField :'',
            submit:''
            
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
         TextField : event.target.value
        });
     }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
         submit: this.state.TextField 
        });
     }



    
    render() {
        
        return (
          <div>
             <form onSubmit={this.handleSubmit}>
                <h1>Who are you?</h1>
                <TextField 
                    value={this.state.TextField } 
                    onChange ={this.handleChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                /> 
                    <Button  variant="contained" color="primary" type='submit'>
                    Primary
                </Button>
               </form>
               <h3>hello, {this.state.submit}</h3>
               

        </div>
        )
    }
}



//!rcc классовые компоненты