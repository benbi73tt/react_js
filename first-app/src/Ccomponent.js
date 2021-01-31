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
            flag:true
            
        }
        this.showMessage=this.showMessage.bind(this);
        this.ChangeUsers=this.ChangeUsers.bind(this);
        this.BtnHi=this.BtnHi.bind(this);
    }



showMessage(){
    if(this.state.flag){
        alert('Привет ' + this.state.name + ' ' + this.state.age)
    }
    else{
        alert('Пока ' + this.state.name + ' ' + this.state.age)
    }


}

BtnHi(){
    if(this.state.flag){
        this.setState({
            flag:false
    })}
    else{
        this.setState({
            flag:true
        })}
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



    
    render() {
        return (
          <div>
              <button onClick={this.showMessage}>Нажми на меня</button>
              <button onClick={this.ChangeUsers}>Смена</button>
              <button onClick={this.BtnHi}>Привет/Пока</button>

        </div>
        )
    }
}



//!rcc классовые компоненты