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
            items:[
                {id:1,name:'anton', surname:'burmistr',age:25, salary: 2000, done:false},
                {id:0,name:'artem', surname:'ananichev', age:20, salary: 5000, done:false},
                {id:2,name:'dima', surname:'semen',age:30, salary:4000, done:false},
                {id:-1,name:'cnton', surname:'zurmistr',age:25, salary: 3000, done:false},
            ],
            // routes:[
            //     {id:0,name:'Ульяновск-Москва'},
            //     {id:1,name:'Москва-Ульяновск'},
            //     {id:2,name:'Питер-Москва'}
            // ],
            // notes:[ ],
            // id:0,
            // buf:''
        }
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSortName(){
        var obj = [...this.state.items];
        obj.sort((a,b)=>{
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
        });
        obj.map((item, i) => (<div key={i}> {item.surname}  
                              {item.name} {item.salary}</div>))
        console.log(obj)
        this.setState({
            items:obj
        })

    }
    
    handleSortSurname(){
        var obj = [...this.state.items];
        obj.sort((a,b)=>{
            if(a.surname < b.surname) return -1;
            if(a.surname > b.surname) return 1;
        });
        obj.map((item, i) => (<div key={i}> {item.surname}   
                              {item.name} {item.salary}</div>))
        console.log(obj)
        this.setState({
            items:obj
        })

    }
    handleSortSalary(){
        var obj = [...this.state.items];
        obj.sort((a,b) => a.salary - b.salary);
        obj.map((item, i) => (<div key={i}> {item.surname}   
                              {item.name} {item.salary}</div>))
        console.log(obj)
        this.setState({
            items:obj
        })
    }
    handleSortid(){
        var obj = [...this.state.items];
        obj.sort((a,b) => a.id - b.id);
        obj.map((item, i) => (<div key={i}> {item.surname}   
                              {item.name} {item.salary}</div>))
        console.log(obj)
        this.setState({
            items:obj
        })
    }



    
    render() {
        const list = this.state.items.map(item=>{
            return(<li key={item.id}>{item.name}, {item.surname}, {item.salary}

            </li>)
        })

        return (
            <div>
                <ul>
                    {list}
                    <button onClick={this.handleSortName.bind(this)}>сорт по имени</button>
                    <button onClick={this.handleSortSurname.bind(this)}>сорт по фамилии</button>
                    <button onClick={this.handleSortSalary.bind(this)}>сорт по зарплате</button>
                    <button onClick={this.handleSortid.bind(this)}>сорт по id</button>
  
                </ul>

            </div>


        )
    }
}




//!rcc классовые компоненты