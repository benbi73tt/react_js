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
            name:'ivan',
            age:25
            
        }
        this.showMessage=this.showMessage.bind(this);
        this.ChangeUsers=this.ChangeUsers.bind(this);
    }



showMessage(){
  alert(this.state.name)

}
ChangeUsers(){
    if(this.state.name==='ivan'){
    this.setState({
        name:'Коля',
        age:30
    })}
    else{
        this.setState({
            name:'ivan',
            age:25
        })
    }
}



    
    render() {
        return (
          <div>
              <button onClick={this.showMessage}>Нажми на меня</button>
              <button onClick={this.ChangeUsers}>Смена</button>

        </div>
        )
    }
}



//!rcc классовые компоненты