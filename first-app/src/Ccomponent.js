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
            value:'',
            checked:true
        }   

        this.handleCheckbox=this.handleCheckbox.bind(this);

    }

    handleCheckbox(event){
        this.setState({
            checked:!this.state.checked
        })
    }

 

    
    render() {
        const text=this.state.checked?<p>{'Hello, my friend'}</p>:' ';

        return (
            <div>
                <input checked={this.state.checked} onChange={this.handleCheckbox} type='checkbox'/>
                {text}

            </div>
        )
    }
}



//!rcc классовые компоненты