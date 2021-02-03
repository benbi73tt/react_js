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
            hrefs: [
                {href: '1.html', text: 'ссылка'},
                {href: '2.html', text: 'ссылка'},
                {href: '3.html', text: 'ссылка'},
            ],
        }   
        this.handleChange1=this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleChange3=this.handleChange3.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.NewList=this.NewList.bind(this);
        this.DelList=this.DelList.bind(this);

    }

    handleChange1(event){
        this.setState({
            href:event.target.value
        })
    }

    handleChange2(event){
        this.setState({
            text:event.target.value
        })
    }
    handleChange3(event){
        this.setState({
            number:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        // this.state.hrefs.push({href:this.state.href,text:this.state.text})

    }

    NewList(){
        this.setState({
            hrefs:[...this.state.hrefs,{href:this.state.href,text:this.state.text}]
        })
    }

    DelList(number){
        this.state.hrefs.splice(number,1)
        this.setState({
            hrefs:this.state.hrefs

        })
    }


 

    
    render() {
        const list=this.state.hrefs.map((item,index)=>{
            return(<li key={index}><a href={item.href}>{item.text}-{index+1}</a></li>)
        })
        const number=this.state.number-1;
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <ul>{list}</ul>
                    <input onChange={this.handleChange1}/>
                    <input onChange={this.handleChange2}/>
                    <button type='submit' onClick={this.NewList}>submit</button><br/>
                    <input onChange={this.handleChange3}/>
                    <button type='submit' onClick={this.DelList.bind(this,number)}>Удалить</button>
                </form>



            </div>
        )
    }
}



//!rcc классовые компоненты