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
            items:['Коля', 'Вася', 'Петя', 'Иван', 'Дима'],
        
             
        }   
         this.NewList=this.NewList.bind(this);
         this.DelList=this.DelList.bind(this);
    }

    NewList(){
        this.state.items.push('пункт');
        this.setState({
            items:this.state.items
        })

    }
    DelList(index){
        this.state.items.splice(index,1);
        this.setState({
            items:this.state.items
        })

    }

    
    render() {
        const text=this.state.items.map((item,index)=>{
            return <li key={index}>{item}<button onClick={this.DelList.bind(this, index)}>
            удалить
        </button></li>
        });
        return (
            <div>
                <ul>{text}</ul>
                <button onClick={this.NewList}>Добавить</button>
            
            </div>
        )
    }
}



//!rcc классовые компоненты