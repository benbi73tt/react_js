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
            checked:false,
            disabled:true
        }
        this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            disabled:!this.state.disabled,
            checked:!this.state.checked
        })
    }

    
    render() {
        return (
            <div>
                <input checked={this.state.checked} type='checkbox' onChange={this.handleChange}/>
                <input disabled={this.state.disabled}/>
            </div>
        )
    }
}




//!rcc классовые компоненты