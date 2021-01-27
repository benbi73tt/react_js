import React, { Component } from 'react'

export default class Fcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'button pressed'
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>{this.props.updateData(this.state.name)}}>Press button:</button>
            </div>
        )
    }
}

//! rfc функциональный компонент
//props(свойства) - это значение которые мы статически, сразу хотим передать компоненту