import React, { Component } from 'react';
import './style.css';
// import { Button } from '@material-ui/core';
import Fcomponent from './Fcomponent';
import FTcomponent from './FТcomponent';
//!Контролируемый input
export default class Ccomponent extends Component { //export для экспортирование компонента
    constructor(props) {
        super(props);
    
        this.state = {
            inputValue:''
      };
      this.handleChange=this.handleChange.bind(this);
    }
  
    handleChange(event){
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
       return(
           <div>
            <Fcomponent input={this.state.inputValue} 
            handleChange={this.handleChange}/>
            <FTcomponent input={this.state.inputValue}/>
           </div>
        )
        }
    }


//!rcc классовые компоненты