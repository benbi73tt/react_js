import React, { Component } from 'react';
import './style.css';
// import { Button } from '@material-ui/core';
import Fcomponent from './Fcomponent';
//!Контролируемый input
export default class Ccomponent extends Component { //export для экспортирование компонента
    constructor(props) {
        super(props);
    
        this.state = {
            name:'web dev blog'
      }
    }
  

    render() {
       return(
           <div>
            <p>hello youtube {this.state.name}</p>
            <Fcomponent nameds={this.state.name}/>
           </div>
        )
        }
    }


//!rcc классовые компоненты