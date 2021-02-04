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
            submit:[]
            
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            change:event.target.value,

        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            submit:[...this.state.submit,this.state.change]
        })
    }

    
    render() {
        const text=this.state.submit.map((item,index)=>{
            return(<option key={index}>{item}</option>)
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange}/>
                <button type='submit'>submit</button>
                </form>
                <select >
                    <option>Выберите знаечние</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    {text}
                </select>


    
                
            </div>
        )
    }
}




//!rcc классовые компоненты