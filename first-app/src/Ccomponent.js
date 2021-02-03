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
            names:['Ваня','Петя','Коля','Вася'],
            input:''
             
        }   
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.NewList=this.NewList.bind(this);

    }

    handleChange(event){
        this.setState({
            name:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        event.target.reset(); 

        }


    NewList(){
        this.state.names.push(this.state.name)
        this.setState({
            names:this.state.names
        })
    }
    DelItem(index){
        this.state.names.splice(index,1)
        this.setState({
            names:this.state.names
        })

    }
 

    
    render() {
        const list=this.state.names.map((item,index)=>{
            return(<li key={index}>{item}<button onClick={this.DelItem.bind(this,index)}>Удалить</button></li>
        )})
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ul>{list}</ul>
                    <input onChange={this.handleChange}/>
                    
                    <button type='submit' onClick={this.NewList}>Enter</button>
                </form>

            </div>
        )
    }
}



//!rcc классовые компоненты