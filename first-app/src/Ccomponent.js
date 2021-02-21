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
            arrLang:[
                {en:'Monday',rus:'Понедельник'},
                {en:'Tuesday',rus:'Вторник'},
                {en:'Wednesday',rus:'Среда'},
                {en:'Thursday',rus:'Четверг'},
                {en:'Friday',rus:'Пятница'},
                {en:'Saturday',rus:'Суббота'},
                {en:'Sunday',rus:'Воскресенье'},
                
            ],
            lang:'rus',
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
        }
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(){
        if(this.state.lang==='rus')
        this.setState({
            lang:'en'
        })
        else{
            this.setState({
                lang:'rus'
            })
        }

    }



    
    render() {
        const list = this.state.arrLang.map((item,index)=>{
            return(<option key={index}>{this.state.lang==='en'?item.en:item.rus}
                </option>)
                })

        return (
            <div>
                <select onChange={this.handleChange.bind(this)}>
                    <option value={this.state.lang}>Английский</option>
                    <option selected value={this.state.lang}>Русский</option>
                </select>
                <select>
                    {list}
                </select>

            </div>


        )
    }
}




//!rcc классовые компоненты