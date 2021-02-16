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
            items:[
                {id:0,name:'anton', surname:'burmistr',age:25, salary: 2000, done:false},
                {id:1,name:'art', surname:'anan', age:20, salary: 5000, done:false},
                {id:2,name:'dima', surname:'semen',age:30, salary:4000, done:false},
            ],
            sum:0,
        }
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleClick(index){
        let arr=this.state.items.map((item,i)=>{
            if(i===index){
                return{...item,name:this.state.buf,done:!item.done}}
            else{
                return item;
            }
        })
        this.setState({
            items:arr,
            buf:''
        })
    }

    handleChange(event){
        this.setState({
            buf:event.target.value
        })

    }



    
    render() {


        const list=this.state.items.map(item=>{
            return(<li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
                {item.name}{item.done?<input autoFocus={true} onBlur={this.handleClick.bind(this,item.id)}
                onChange={this.handleChange.bind(this)}/>:''}
            </li>)
        })
        return (
            <div>
                <ul>
                    {list}
                </ul>
        
            </div>
        )
    }
}




//!rcc классовые компоненты