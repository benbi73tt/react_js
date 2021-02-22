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
                test: [
                    {
                        answers: [
                            'Ответ1',
                            'Ответ2',
                            'Ответ3',
                            'Ответ4',
                            'Ответ5',
                        ],
                        right: 3, //номер правильного ответа
                    },
                    {
                        answers: [
                            'Ответ1',
                            'Ответ2',
                            'Ответ3',
                            'Ответ4',
                            'Ответ5',
                        ],
                        right: 4,
                    },
                    {
                        answers: [
                            'Ответ1',
                            'Ответ2',
                            'Ответ3',
                            'Ответ4',
                            'Ответ5',
                        ],
                        right: 5,
                    },
                ]
            };
    }

    handleChange(event){
        this.setState({
            option:event.target.value
        })
    }


    render() {
        const list=this.state.test.map((item,index)=>{
            return(<p key={index}>{item.answers.map((item,index)=>{
                return(<li key={index}><input value={item} onChange={this.handleChange.bind(this)} checked={this.state.option===item} type='radio'/>{item}</li>)
            })}</p>)
        })

        return (
            <div>
                {list}
            </div>


        )
    }
}




//!rcc классовые компоненты