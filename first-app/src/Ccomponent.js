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
            users: [
                {name: 'Коля', age: 30},
                {name: 'Вася', age: 40},
                {name: 'Петя', age: 50},
            ]
        }   

        this.handleChange1=this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

handleChange1(event){
    this.setState({
        name:event.target.value
    })
}
handleChange2(event){
    this.setState({
        age:event.target.value
    })
}

handleSubmit(event){
    event.preventDefault();
    this.setState({
        users:[...this.state.users,{name:this.state.name,age:this.state.age}]
    })
}

 

    
    render() {
        const table=this.state.users.map((item,index)=>{
            return(<tr key={index}><td>{index+1}. {item.name}</td><td>{item.age}</td></tr>)
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table>{table}</table>
                    <input onChange={this.handleChange1} placeholder='Имя'/><br/>
                    <input onChange={this.handleChange2} placeholder='Возраст'/><br/>
                    <button type='submit'>submit</button>
                </form>



            </div>
        )
    }
}



//!rcc классовые компоненты