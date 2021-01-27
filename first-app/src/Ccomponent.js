import React, { Component } from 'react';
import './style.css';
// import { Button } from '@material-ui/core';
import Fcomponent from './Fcomponent';
//!Контролируемый input
export default class Ccomponent extends Component { //export для экспортирование компонента
    constructor(props) {
        super(props);
    
        this.state = {
            name:'button not pressed'
      };
      this.updateData=this.updateData.bind(this);
    }
  
    updateData(value){
        this.setState({
            name:value
        })
    }

    render() {
       return(
           <div>
               <p>State:{this.state.name}</p>
                <Fcomponent updateData={this.updateData}/>
           </div>
        )
        }
    }


//!rcc классовые компоненты