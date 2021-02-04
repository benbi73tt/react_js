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

            
        }
        this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            change:event.target.value
        })
    }

    
    render() {

        return (
            <div>
                <select onChange={this.handleChange}>
                    <option>Выберите селект</option>
                    <option >green</option>
                    <option >red</option>
                    <option >yellow</option>
                    <option >blue</option>
                </select>
                <h3 style={{color:this.state.change}}>{this.state.change}</h3>
                
            </div>
        )
    }
}




//!rcc классовые компоненты