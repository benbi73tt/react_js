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
            name:'Иван',
            age:25,
            flag:true,
            show:true
            
        }
        this.ChangeUsers=this.ChangeUsers.bind(this);
        this.BtnHi=this.BtnHi.bind(this);
        this.ShowText=this.ShowText.bind(this);
    }

BtnHi(){

        this.setState({
            flag:!this.state.flag
    })
}

ChangeUsers(){
    if(this.state.name==='Иван'){
    this.setState({
        name:'Коля',
        age:30
    })}
    else{
        this.setState({
            name:'Иван',
            age:25
        })
    }
}

ShowText(){
        this.setState({
            show:!this.state.show
    })
}



    
    render() {
        return (
          <div>
              
              <p>{this.state.show?<p>{this.state.flag?'Привет':'Пока'} {this.state.name} {this.state.age}</p>:" "}</p>
              <button onClick={this.ChangeUsers}>Смена</button>
              <button onClick={this.BtnHi}>{this.state.flag?'Попращаться':'Поприветствовать'}</button>
              <button onClick={this.ShowText}>{this.state.show?'Скрыть':'Показать'}</button>

        </div>
        )
    }
}



//!rcc классовые компоненты