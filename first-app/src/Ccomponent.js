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
            // arrLang:[
            //     {en:'Monday',rus:'Понедельник'},
            //     {en:'Tuesday',rus:'Вторник'},
            //     {en:'Wednesday',rus:'Среда'},
            //     {en:'Thursday',rus:'Четверг'},
            //     {en:'Friday',rus:'Пятница'},
            //     {en:'Saturday',rus:'Суббота'},
            //     {en:'Sunday',rus:'Воскресенье'},
                
            // ],
            // lang:'rus',
            items:[
                {id:0,name:'anton', surname:'burmistr',age:25, salary: 2000,  gender:'men', done:false},
                {id:1,name:'artem', surname:'ananichev', age:20, salary: 5000,gender:'men', done:false},
                {id:2,name:'kami', surname:'semen',age:30, salary:4000, gender:'women', done:false},
                {id:3,name:'cnton', surname:'zurmistr',age:25, salary: 3000, gender:'men', done:false},
            ],
            
            // routes:[
            //     {id:0,name:'Ульяновск-Москва'},
            //     {id:1,name:'Москва-Ульяновск'},
            //     {id:2,name:'Питер-Москва'}
            // ],
            // notes:[ ],
            id:4,
            // buf:''
            long:''
        }
        // this.handleChange=this.handleChange.bind(this);
        // this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChangeName(event){
        this.setState({
            name:event.target.value
        })
    }

    handleChangeSurname(event){
        this.setState({
            surname:event.target.value
        })
    }

    handleChangeGender(event){
        this.setState({
            gender:event.target.value
        })
    }
handleSubmit(event){
    event.preventDefault();
    event.target.reset();

    if(this.state.name&&this.state.surname&&this.state.gender&&this.state.gender!=='Ваш пол?')
        this.setState({
            items:[...this.state.items,{id:this.state.id++,name:this.state.name,surname:this.state.surname,gender:this.state.gender}],
            name:'',
            surname:'',
        })
}


    
    render() {
        const list=this.state.items.map(item=>{
            return(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.salary}</td>
                    <td>{item.gender}</td>
                </tr>
            )
        })

        return (
            <div>
                <table>
                    {list}
                </table>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.handleChangeName.bind(this)} placeholder='name'/>
                    <input onChange ={this.handleChangeSurname.bind(this)} placeholder='surname'/>
                    <select onChange={this.handleChangeGender.bind(this)}>
                        <option selected disabled>Ваш пол?</option>
                        <option>men</option>
                        <option>women</option>
                    </select>
                    <button type='submit'>click me</button>
                </form>
            </div>


        )
    }
}




//!rcc классовые компоненты