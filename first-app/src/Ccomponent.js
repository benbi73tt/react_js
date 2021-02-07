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
                {id:0,title:'HTML',done:false},
                {id:1,title:'JS',done:false},
                {id:2,title:'React',done:false},
            ],
        }
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(index){
        this.setState(state=>{
            let {items} = state;
            if(items[index].done===false){
                items[index].done=true;
                return items;
            }
   
        })


    }


    
    render() {
        const list=this.state.items.map((item,index)=>{
            return(<li className={item.done?'complete':'NoComplete'} key={index}>
                <input onChange={this.handleChange.bind(this,index)} checked={this.state.items.done} 
                disabled={item.done} 
                 type='checkbox' />
                {item.title}
            </li>)
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}




//!rcc классовые компоненты