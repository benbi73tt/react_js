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
                {id:0,name:'anton', surname:'burmistr',age:25, salary: 2000, done:true},
                {id:1,name:'art', surname:'anan', age:20, salary: 5000, done:true},
                {id:2,name:'dima', surname:'semen',age:30, salary:4000, done:true},
            ],
            sum:0,
        }
        this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(index){
        if(this.state.items[index].done===false){
            this.setState(state=>{
                let {items} = state;
                this.state.items[index].done=true;
                return items;
        })
    console.log(this.state.items)
}
        else{
            this.setState(state=>{
                let {items} = state;
                this.state.items[index].done=false;
                return items;
            })}
    }



    
    render() {


        const list=this.state.items.map(item=>{
            return(<p key={item.id}>
                <input onChange={this.handleChange.bind(this,item.id)} checked={item.done} 
                 type='checkbox' />{item.id+1}
                 <span>{item.name}</span>
                 {item.done? <span>  {item.surname} {item.age}</span>:""}
            </p>)
        })
        return (
            <div>
                <h4>
                    {list}
                </h4>
        
            </div>
        )
    }
}




//!rcc классовые компоненты