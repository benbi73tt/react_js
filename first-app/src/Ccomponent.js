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
            // items:[
            //     {id:0,name:'anton', surname:'burmistr',age:25, salary: 2000, done:false},
            //     {id:1,name:'art', surname:'anan', age:20, salary: 5000, done:false},
            //     {id:2,name:'dima', surname:'semen',age:30, salary:4000, done:false},
            // ],
            // routes:[
            //     {id:0,name:'Ульяновск-Москва'},
            //     {id:1,name:'Москва-Ульяновск'},
            //     {id:2,name:'Питер-Москва'}
            // ],
            notes:[ ],
            id:0,
            buf:''
        }
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            buf:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        event.target.reset();
        if(this.state.buf==='')return;
        else{
            const date=new Date();
            const Time = (date.getHours() +':'+ date.getMinutes() +':'+ date.getSeconds());
            this.setState({
                notes:[...this.state.notes,{id:this.state.id++,name:this.state.buf,time:Time,done:false}],
                buf:'',
                // id:this.state.id+1,
            
            })
        }
    }

    handleRedactorSubmit(event){
        event.preventDefault();

    }

    handleRedactorClick(index){
        let arr=this.state.notes.map((item,i)=>{
            if(i===index){
                return{...item,done:!item.done}
            }
            else return item;
        })
        this.setState({
            notes:arr,
        })
    }

    handleRedactorChange(index){
        
    }



    
    render() {
        const list=this.state.notes.map(item=>{
            return(<div style={{border:'10px',color:'red'}} key={item.id}><h3>Заметка {item.id+1}</h3> 
            <form onSubmit={this.handleRedactorSubmit.bind(this)}><span>{item.name}
                <span style={{fontSize:'11px'}}>{item.time}</span>
                <button onClick={this.handleRedactorClick.bind(this,item.id)} type='submit'>red</button>
                    {item.done?<input onChange={this.handleRedactorChange.bind(this,item.id)}/>:''}
            </span></form></div>)
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <textarea value={this.state.value} onChange={this.handleChange.bind(this)} placeholder='Введите заметку'></textarea>  
                    <button type='submit'>Добавить</button>
                </form>
                <div>{list}</div>
            </div>

        )
    }
}




//!rcc классовые компоненты