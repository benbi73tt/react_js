import React, { Component } from 'react';
import './style.css'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             notes:[
                 {name:'Уроки',done:false},
                ],
                value:''
        }
    }


    handleSubmit(event){
        event.preventDefault();
        if(this.state.value!==''&&this.state.value!==' '){
            this.setState({
                notes:[...this.state.notes,{name:this.state.value,done:false,active:false}],
                value:''
            })
        }

    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }

    handleChecked(index){
        let arr=this.state.notes.map((item,i)=>{
            if(i===index){
                return{...item,done:!item.done}
            }
            else{return item}
        })
        this.setState({
            notes:arr,
        })


    }

    handleClick(index){
        let arr=this.state.notes.map((item,i)=>{
            if(i===index&&this.state.buf!==' '&&this.state.buf!==''){
                return{...item,name:this.state.buf,active:!item.active}
            }
            else{return item;}
        })
        this.setState({
            notes:arr,
            buf:this.state.notes[index].name

        })
    }
handleInpChange(event){
    this.setState({
        buf:event.target.value
    })
}

handleDelClick(){
    
}

    
    render() {
        const list=this.state.notes.map((item,index)=>{
            return(<li key={index} >      
                <Checkbox onChange={this.handleChecked.bind(this,index)}
                    checked={item.done}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                <span style={item.done?{textDecoration:"line-through"}:{textDecoration:'none'}} onClick={this.handleClick.bind(this,index)}>{item.name}</span>
                {item.active
                    ?<input autoFocus={true} 
                    value={this.state.buf}
                    onChange={this.handleInpChange.bind(this)}
                    onBlur={this.handleClick.bind(this,index)}/>:""}
                <IconButton onClick={this.handleDelClick.bind(this,index)} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                </li>)
        })
        return (
            <div align='center'><br/>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <TextField onChange={this.handleChange.bind(this)} value={this.state.value} id="outlined-basic" label="text" variant="outlined" />
                <Button type='submit' variant="outlined" color="primary">
                ADD
                </Button>
     
                <ul>
                    {list}
                </ul>

            </form>

            </div>
        )
    }
}
