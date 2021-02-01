import React, { Component } from 'react';
import './style.css';
// import { Button } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
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
            input:'',
        
             
        }   
        this.handleChange=this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({
            input:event.target.value
        })
    }



    
    render() {
        const date=new Date();
        let year=date.getFullYear();
        return (
            <div>
                <input onChange={this.handleChange}/>
                <h3>{year-this.state.input.toUpperCase()}</h3>
            </div>
        )
    }
}



//!rcc классовые компоненты