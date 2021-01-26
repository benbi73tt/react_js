import React from 'react'

export default function fcomponent(props) {//export для экспортирование компонента
    return (
        <div>
            <h1>Hello,{props.name} {props.surname}</h1>
        </div>
    )
}
//! rfc функциональный компонент
//props(свойства) - это значение которые мы статически, сразу хотим передать компоненту