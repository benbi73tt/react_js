import React, { Component } from 'react';
import './style.css';
import { Button } from '@material-ui/core';
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
             show:false,
             name:'',
             input:''
            
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        
        this.setState(state=>({
            show:!state.show,
            // name:this.state.input

        }));
    }



    
    render() {
        if(this.state.show)
        return (
          <div>
    
              <h1>hello{this.state.name}</h1>
              
              <Button onClick={this.handleChange} variant="contained" color="primary">
                Primary
               </Button>
        </div>
        )
        else return(
            
            <div>        
             <form>
      
                <h1>Who are you?</h1>
                {/* <input /> */}
                 <Button onClick={this.handleChange} variant="contained" color="primary">
                    Primary
                </Button>
                </form>
            </div>
        )
    }
}



//!rcc классовые компоненты