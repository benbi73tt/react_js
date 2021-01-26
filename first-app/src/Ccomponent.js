import React, { Component } from 'react';

export default class Ccomponent extends Component { //export для экспортирование компонента
    constructor(props) {
        super(props);
    
        this.state = {
            count:0
        };
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);// метод класса в js по умолчанию не привязан к контексту
    }

    increment(){
        this.setState(state=>({
            count: state.count+1
        }));

    }
    
    decrement(){
        this.setState(state=>({
            count: state.count-1
        }));

    }
    reset(){
        this.setState({
            count: 0
        });

    }
    render() {
       return(
           <div>
             <button onClick={this.increment}>increment</button>
             <button onClick={this.decrement}>decrement</button>
             <button onClick={this.reset}>reset</button>
             <h1>Current:{this.state.count}</h1>
             
           </div>
       )
}}


//!rcc классовые компоненты