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
                {href: '1.html', text: 'ссылка 1'},
                {href: '2.html', text: 'ссылка 2'},
                {href: '3.html', text: 'ссылка 3'},
            ],
        }   
        this.handleChange1=this.handleChange1.bind(this);
        this.handleChange2=this.handleChange2.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

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

    handleSubmit(event){
        event.preventDefault();
        // this.state.hrefs.push({href:this.state.href,text:this.state.text})
        this.setState({
            hrefs:[...this.state.hrefs,{href:this.state.href,text:this.state.text}]
        })
    }


 

    
    render() {
        const text=this.state.href;
        const list=this.state.hrefs.map((item,index)=>{
            return(<li key={index}><a href={item.href}>{item.text}</a></li>)
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <ul>{list}</ul>
                    <input onChange={this.handleChange1}/>
                    <input onChange={this.handleChange2}/>
                    <button type='submit'>submit</button>
                    <br/>{text}
                </form>



            </div>
        )
    }
}



//!rcc классовые компоненты