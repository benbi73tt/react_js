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
                {id:0,name:'anton', surname:'burmistr', salary: 2000, done:false},
                {id:1,name:'art', surname:'anan', salary: 5000, done:false},
                {id:2,name:'dima', surname:'semen', salary:4000, done:false},
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
        })}
        else{
            this.setState(state=>{
                let {items} = state;
                this.state.items[index].done=false;
                return items;
            })} 
    }



    
    render() {

        const list=this.state.items.map(item=>{
            return(<tr key={item.id}>
                <input onChange={this.handleChange.bind(this,item.id)} checked={item.done} 
                 type='checkbox' />{item.id+1}
                <td>{item.name}</td><td>{item.surname}</td> {item.done? item.salary:'no'}
            </tr>)
        })
        return (
            <div>
                <table>
                    {list}
                </table>
        
            </div>
        )
    }
}




//!rcc классовые компоненты