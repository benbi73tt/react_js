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
            // notes:[ ],
            //id:4,
            // buf:''
            //long:''
            from:'rub',
            to:'doll',
            doll:74,
            uero:90,

        }
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleClick(event){
        event.preventDefault();

        
        if(this.state.from===this.state.to){
            this.setState({
                sum:this.state.buf,
            })
        }else{

            if(this.state.from==='rub'&&this.state.to==='doll'){
                this.setState({
                    sum:(this.state.buf*this.state.doll).toFixed(2),

                })}
            if(this.state.from==='rub'&&this.state.to==='uero'){
                this.setState({
                    sum:(this.state.buf*this.state.uero).toFixed(2),

                })}
            if(this.state.from==='doll'&&this.state.to==='rub'){
                this.setState({
                    sum:(this.state.buf/this.state.doll).toFixed(2),
                })}
            if(this.state.from==='doll'&&this.state.to==='uero'){
                this.setState({
                    sum:((this.state.buf*this.state.doll)/this.state.uero).toFixed(2)
                })}

            if(this.state.from==='uero'&&this.state.to==='rub'){
                this.setState({
                    sum:(this.state.buf/this.state.uero).toFixed(2),
                })}

            if(this.state.from==='uero'&&this.state.to==='doll'){
                this.setState({
                    sum:((this.state.buf*this.state.uero)/this.state.doll).toFixed(2)
                })}}
        this.setState({
            buf:''
        })
    }
    handleChange(event){
        this.setState({
            buf:event.target.value
        })
    }

        
    handleChangeTransferFrom(event){
        this.setState({
            from:event.target.value
        })
        
    }
    
    handleChangeTransferTo(event){
        this.setState({
            to:event.target.value
        })


    }

    
    
    
    
    
    
    render() {

        return (
            <div>
                <input value={this.state.buf}onChange={this.handleChange.bind(this)}/>
                <select value={this.state.from} onChange={this.handleChangeTransferFrom.bind(this)}>
                    <option name='rub' selected>rub</option>
                    <option name='doll'>doll</option>
                    <option name='uero'>uero</option>
                </select>
                <select value={this.state.to} onChange={this.handleChangeTransferTo.bind(this)}>
                    <option name='doll' selected>doll</option>
                    <option name='rub' >rub</option>
                    <option name='uero' >uero</option>
                </select>
                <br/><button onClick={this.handleClick.bind(this)} >click me</button>

                <h3>{this.state.from}</h3>
                <h3>{this.state.to}</h3>
                <h3>{this.state.sum}</h3>
            </div>


        )
    }
}




//!rcc классовые компоненты