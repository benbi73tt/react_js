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
            number:'',
            submit:'',
            sum:''
             
        }   
        this.handleChange1=this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleChange3=this.handleChange3.bind(this);
        this.Sum=this.Sum.bind(this);
    }

    handleChange1(event){
        this.setState({
            number1:event.target.value,
        })
    }
    handleChange2(event){
        this.setState({
            number2:event.target.value,
        })
    }
    handleChange3(event){
        this.setState({
            number3:event.target.value,
        })
    }
Sum(event){
    event.preventDefault();
    this.setState({
        submit:this.state.number1+ ' '+this.state.number2+' '+this.state.number3

    })
}

    
    render() {
        const num=this.state.submit;
        return (
            <div>
                <h3>Фио</h3>
                <form onSubmit={this.Sum}>
                    <input placeholder='Фамилия' onChange={this.handleChange1}/><br/>
                    <input placeholder='Имя'  onChange={this.handleChange2}/><br/>
                    <input placeholder='Отчество'  onChange={this.handleChange3}/><br/>
                    <button type='submit'>Enter</button>
                </form>
                <h3>{num}</h3>

            </div>
        )
    }
}



//!rcc классовые компоненты