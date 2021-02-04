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
            texts:[],
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            text:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        event.target.reset();
        if(this.state.text==='')return;
        else{        
            this.setState({
            texts:[...this.state.texts,this.state.text],
            text:''})}


    }
    
    render() {
        const text=this.state.texts.map((item,index)=>{
            return(<p key={index}>{item}</p>)
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea placeholder='Введите текст'value={this.state.value} onChange={this.handleChange}/>
                    <button type='submit'>submit</button>
                </form>
        
                {text}
                
            </div>
        )
    }
}




//!rcc классовые компоненты