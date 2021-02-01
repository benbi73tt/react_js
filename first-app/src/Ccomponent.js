import React, { Component } from 'react';
import './style.css';
// import { Button } from '@material-ui/core';
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
            name:'Иван',
            age:25,
            flag:true,
            show:true,
            items:['Вася','Петя','Коля'],
            hrefs: [
                {href: '1.html', text: 'ссылка'},
                {href: '2.html', text: 'ссылка'},
                {href: '3.html', text: 'ссылка'},
            ]        
            
        }
        this.ChangeUsers=this.ChangeUsers.bind(this);
        this.BtnHi=this.BtnHi.bind(this);
        this.ShowText=this.ShowText.bind(this);
    }

BtnHi(){

        this.setState({
            flag:!this.state.flag
    })
}

ChangeUsers(){
    if(this.state.name==='Иван'){
    this.setState({
        name:'Коля',
        age:30
    })}
    else{
        this.setState({
            name:'Иван',
            age:25
        })
    }
}

ShowText(){
        this.setState({
            show:!this.state.show
    })
}



    
    render() {
        const text = <p>{this.state.show?<p>{this.state.flag?'Привет':'Пока'} {this.state.name} {this.state.age}</p>:" "}</p>;
        const list= this.state.items.map(function(item,index){
            return <li key={index}> {index+1} - {item} </li>
        })
        const listA=this.state.hrefs.map((item,index)=>{
            return <li key={index}><a href={item.href}>{item.text} {index+1}</a></li>
        })
        return (
          <div>
              {text}
              <button onClick={this.ChangeUsers}>Смена</button>
              <button onClick={this.BtnHi}>{this.state.flag?'Попращаться':'Поприветствовать'}</button>
              <button onClick={this.ShowText}>{this.state.show?'Скрыть':'Показать'}</button>
              <ul>{list}</ul>
              <ul>{listA}</ul>

        </div>
        )
    }
}



//!rcc классовые компоненты