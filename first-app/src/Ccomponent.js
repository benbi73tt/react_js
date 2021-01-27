import React, { Component } from 'react';
//!Контролируемый input
export default class Ccomponent extends Component { //export для экспортирование компонента
    constructor(props) {
        super(props);
    
        this.state = {
            input:'',
            items: []
        };
        this.handleChange=this.handleChange.bind(this);//привязать метод по умолчанию
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event){//устанавливает свойство состояния
       event.preventDefault()//обработчик отправки, без перезагрузки страницы
       this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
       });
    }

    render() {
       return(
           <div>
               <form onSubmit={this.handleSubmit}>
                 <input value={this.state.input} onChange ={this.handleChange}/>
                 <button type='submit'>submit</button>
               </form>

            <ul>
                {this.state.items.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
           </div>
       )
    };
}


//!rcc классовые компоненты