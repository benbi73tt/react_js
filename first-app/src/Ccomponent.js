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
            //     {id:0,name:'anton', surname:'burmistr',age:25, salary: 2000,  gender:'men', done:false},
            //     {id:1,name:'artem', surname:'ananichev', age:20, salary: 5000,gender:'men', done:false},
            //     {id:2,name:'kami', surname:'semen',age:30, salary:4000, gender:'women', done:false},
            //     {id:3,name:'cnton', surname:'zurmistr',age:25, salary: 3000, gender:'men', done:false},
            // ],
            
            // routes:[
            //     {id:0,name:'Ульяновск-Москва'},
            //     {id:1,name:'Москва-Ульяновск'},
            //     {id:2,name:'Питер-Москва'}
            // ],
            notes:[ ],
            //id:4,
            // buf:''
            //long:''
        }
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            buf:event.target.value
        })

    }
    handleClick(event){
        event.preventDefault();
        
        this.setState({
            notes:[...this.state.notes,{name:this.state.buf}],
            buf:''
        })
    }
    changeSelect(event){
        this.setState({
            buf1:event.target.value
        })
    }

    
    render() {
        const list=this.state.notes.map(item=>{
            return(<option key={item.id}>
                {item.name}

            </option>)
        })

        return (
            <div>
                <select onChange={this.changeSelect.bind(this)}>
                    {list}
                </select><br/>
                <input value={this.state.buf} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>Click me</button>
                <h3>{this.state.buf1}</h3>
            </div>


        )
    }
}




//!rcc классовые компоненты