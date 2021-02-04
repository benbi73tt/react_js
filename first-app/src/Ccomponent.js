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
            checked:true
            
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            change:event.target.value,
            checked:!this.state.checked
        })
    }
    handleSubmit(event){

    }

    
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input checked={this.state.checked} type='checkbox'/>
                    <select onChange={this.handleChange}>
                        <option>Отмечено</option>
                        <option>Не отмечено</option>
                    </select>
                </form>
    
                
            </div>
        )
    }
}




//!rcc классовые компоненты