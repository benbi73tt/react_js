import React, { Component } from 'react';
//!Контролируемый input
export default class Ccomponent extends Component { //export для экспортирование компонента
    constructor(props) {
        super(props);
    
        this.state = {
            input:'',
            submit:''
        };
        this.handleChange=this.handleChange.bind(this);//привязать метод по умолчанию
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event){
       event.preventDefault()
       this.setState({
        submit:this.state.input
       });
    }

    render() {
       return(
           <div>
               <form onSubmit={this.handleSubmit}>
                 <input value={this.state.input} onChange ={this.handleChange}/>
                 <button type='submit'>submit</button>
               </form>

             <h5>Cotrolled input:</h5>
             <h3>{this.state.submit}</h3>
           </div>
       )
    };
}


//!rcc классовые компоненты