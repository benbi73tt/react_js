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
            // arrLang:[
            //     {en:'Monday',rus:'Понедельник'},
            //     {en:'Tuesday',rus:'Вторник'},
            //     {en:'Wednesday',rus:'Среда'},
            //     {en:'Thursday',rus:'Четверг'},
            //     {en:'Friday',rus:'Пятница'},
            //     {en:'Saturday',rus:'Суббота'},
            //     {en:'Sunday',rus:'Воскресенье'},
                
            // ],
            // lang:'rus',
            // items:[
            //     {id:1,name:'anton', surname:'burmistr',age:25, salary: 2000, done:false},
            //     {id:0,name:'artem', surname:'ananichev', age:20, salary: 5000, done:false},
            //     {id:2,name:'dima', surname:'semen',age:30, salary:4000, done:false},
            //     {id:-1,name:'cnton', surname:'zurmistr',age:25, salary: 3000, done:false},
            // ],
            
            // routes:[
            //     {id:0,name:'Ульяновск-Москва'},
            //     {id:1,name:'Москва-Ульяновск'},
            //     {id:2,name:'Питер-Москва'}
            // ],
            // notes:[ ],
            // id:0,
            // buf:''
            long:''
        }
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }

handleChange(event){
    this.setState({
        long:event.target.value
    })
}


    
    render() {
        const long=this.state.long.length;

        return (
            <div>
                <input onChange={this.handleChange.bind(this)} style={
                    long<4||long>9?{background:'red'}:{background:'green'}}/>
            </div>


        )
    }
}




//!rcc классовые компоненты