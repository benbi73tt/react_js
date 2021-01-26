import React, { Component } from 'react';
import AFcomponent from './AFcomponent';

export default class Ccomponent extends Component { //export для экспортирование компонента
    render() {
        return ( 
        <div >
            <AFcomponent / >
            <h1 > Class Component {this.props.name}</h1>
            {/* <h1 > Class Component {this.props.numbers.join(',')}</h1> */}

        </div>
        )
    }
}
Ccomponent.defaultProps={name:'Alexey'};//!Значение по дефолту


//!rcc классовые компоненты