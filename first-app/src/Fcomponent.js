import React, { Component } from 'react'

export default class fcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>Hello, {this.props.nameds}</h1>
            </div>
        )
    }
}

//! rfc функциональный компонент
//props(свойства) - это значение которые мы статически, сразу хотим передать компоненту