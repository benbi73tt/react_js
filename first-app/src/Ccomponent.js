import React, { Component } from 'react';

export default class Ccomponent extends Component { //export для экспортирование компонента
    constructor(props) {
        super(props)
    
        this.state = {
            //  name:'Alex'
            visibility:false
        };
        this.handleClick=this.handleClick.bind(this);// метод класса в js по умолчанию не привязан к контексту
    }
    handleClick(){
        this.setState(state=>({
            visibility:!state.visibility
        }));
        // this.setState({
        //     name:'Web developer blog'
        // });

    }
    
    render() {
        if(this.state.visibility){
            return ( 
                <div >
                    <h1 > Now you see me </h1>
                    <button onClick={this.handleClick}>Click</button>
        
                </div>
         );
       
        }  else{
             return(
             <div>
                 <button onClick={this.handleClick}>Click</button>
             </div>
             )
        }

    }
}


//!rcc классовые компоненты