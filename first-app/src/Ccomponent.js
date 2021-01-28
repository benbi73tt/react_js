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
            
        }
    }




    
    render() {
        const arr=['a','b','c','d','e'];
        const list=arr.map(function(item,index){
                  return <li key={index}>{item}</li>
        });
        return (
          <div>
              <ul>{list}</ul>
               

        </div>
        )
    }
}



//!rcc классовые компоненты