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
            value:'Ульяновск',
            town:['Ульяновск','Москва','Питер','Казань'],
            option:''
        }   

        this.handleChange=this.handleChange.bind(this);
        this.handleRadioChange=this.handleRadioChange.bind(this);

    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleRadioChange(event){
        this.setState({
            option:event.target.value
        })
    }


 

    
    render() {
        const town=this.state.town.map((item,index)=>{
            return(<option key={index}>{item}</option>)
        })

        return (
            <div>
                <select onChange={this.handleChange}>
                    {town}
                </select>
                <h3>{this.state.value}</h3>

                <input onChange={this.handleRadioChange} checked={this.state.option === '1.touch'} value='1.touch' type='radio'/>
                <input onChange={this.handleRadioChange} checked={this.state.option === '2.touch'} value='2.touch' type='radio'/>
                <input onChange={this.handleRadioChange} checked={this.state.option === '3.touch'} value='3.touch' type='radio'/>
                <h3>{this.state.option}</h3>


            </div>
        )
    }
}



//!rcc классовые компоненты