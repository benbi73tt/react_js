import React, { Component } from 'react';
import './style.css';
import { Button } from '@material-ui/core';
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
            items: [...this.state.items, this.state.input]//спред оператор es6, добавляет значение состояния input в массив items
       });
    }

    render() {
        // const styles={
        //     color:'brown', 
        //     backgroundColor:'yellow',
        //     borderRadius:8,
        //     fontSize:'1.4em'
        // }
       return(
           <div>
               <h1 className='hello'> Hello,world</h1>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
               {/*<h1 style={styles}> Hello,world</h1>{/*в реакт ожидается не стоковое значение а объект содержащий пару ключ и значение, где ключ-имя css*/}
               <form onSubmit={this.handleSubmit}>
                 <input value={this.state.input} onChange ={this.handleChange}/>
                 <button type='submit'>submit</button>
               </form>

            <ul>
                {this.state.items.map((item,index)=>(//map выводит массив
                    <li key={index}>{item}</li>
                ))}
            </ul>
           </div>
       )
    };
}


//!rcc классовые компоненты