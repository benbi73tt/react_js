import React, { Component } from 'react';
//!Контролируемый input
export default class Ccomponent extends Component { //export для экспортирование компонента
    constructor(props) {
        super(props);
    
        this.state = {
            input:''
        };
        this.handleChange=this.handleChange.bind(this);//привязать метод по умолчанию
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    render() {
       return(
           <div>
             <input onChange ={this.handleChange}/>
             <h5>Cotrolled input:</h5>
             <h3>{this.state.input}</h3>
           </div>
       )
    };
}


//!rcc классовые компоненты