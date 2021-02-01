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
            name:'',
            submit:''
             
        }   
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            name:event.target.value,
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            submit:this.state.name
        })
    }


    
    render() {
        const name=this.state.submit.split(' ');
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.name} onChange={this.handleChange}/>
                    <button type='submit'>submit</button>
                </form>


                <h3>name:{name[1]}</h3>
                <h3>surname: {name[0]}</h3>
                <h3>midname: {name[2]}</h3>
            </div>
        )
    }
}



//!rcc классовые компоненты