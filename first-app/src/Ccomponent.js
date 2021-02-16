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
            // items:[
            //     {id:0,name:'anton', surname:'burmistr',age:25, salary: 2000, done:false},
            //     {id:1,name:'art', surname:'anan', age:20, salary: 5000, done:false},
            //     {id:2,name:'dima', surname:'semen',age:30, salary:4000, done:false},
            // ],
            routes:[
                {id:0,name:'Ульяновск-Москва'},
                {id:1,name:'Москва-Ульяновск'},
                {id:2,name:'Питер-Москва'}
            ]
        }
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleRadioChange(event){
        this.setState({
            option:event.target.value
        })
    }



    
    render() {
        const list=this.state.routes.map(item=>{
            return(<li key={item.id}>
                <input value={item.name} onChange={this.handleRadioChange.bind(this)} checked={this.state.option===item.name} type='radio'/>{item.name}

            </li>)
        })
        return (
            <div>
                <ul>
                    {list}
                </ul>
                <p>{this.state.option}</p>
        
            </div>
        )
    }
}




//!rcc классовые компоненты