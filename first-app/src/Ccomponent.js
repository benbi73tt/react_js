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
            change:event.target.value,

        })
    }

    
    render() {

        return (
            <div>
                <select onChange={this.handleChange}>
                    <option>Выберите знаечние</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                {this.state.change==='2'?<p>Работай</p>:this.state.change==='1'?
                <p>Развлекайся</p>:this.state.change==='3'?<p>Ничего не делай</p>:''}
    
                
            </div>
        )
    }
}




//!rcc классовые компоненты