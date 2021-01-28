import React, { Component } from 'react';
import './style.css';
// import { Button } from '@material-ui/core';
// import Fcomponent from './Fcomponent';
//!Контролируемый input
export default class Ccomponent extends Component { //export для экспортирование компонента
    constructor(props) {
        super(props);
    
        this.state = {
            error:null, //отслеживает ошибки
            isLoaded:false,
            items:[]//набор компонентов, которые будем получать
      };
    }

    componentDidMount() {
        fetch('http://ссылка')
        .then(res => res.json())
        .then(
            (result)=>{
                this.setState({  //Здесь изменяем состояние
                    isLoaded: true,
                    items: result.drinks//(drins-название главное json)
                });
                     
            },
            (error)=>{
                this.setState({  //Здесь изменяем состояние
                    isLoaded: true,
                   error
                 });
            }
        )
    }
  

    render() {
        const {error, isLoaded,items}=this.state;
        if(error){
            return (<p>Error {error.message}</p>)
        }else if(!isLoaded){
            return <p>Loading...</p>
        }else{
            return (
                <ul>
                    {items.map(item=>(
                        <li key={item.name}>
                            {item.strDrink}
                            <img  width='50' height='50' src ={item.strDrinkThumb}/>
                        </li>
                    ))}
                
                </ul>
                
            )
        }
        }
    }


//!rcc классовые компоненты