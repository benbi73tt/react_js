import React from 'react';
import Task from './component/Task';
import Taskinput from './component/Taskinput';

//Баг при смене выполненого/невыполненного 

class App extends React.Component {
    constructor() {
        super();
    
        this.state = {
            tasks:[
                {id:0, title: 'create tido-react app', done:false},
                {id:1, title: 'Make a video about it', done:true},
                {id:2, title: 'create simple todo-app', done:false}
            ]
             
        };
    }

    addTask = task => {
        this.setState(state =>{
            let { tasks } = state;
            tasks.push({
                id: tasks.length!==0? task.length:0,
                title: task,
                done: false

            });
            return (tasks);
        });
    };

    doneTask = id=> {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            let {tasks} = state;
            tasks[index].done = true;
            return tasks;
        });
    };

    delTask=id=>{
        const index= this.state.tasks.map(task=>task.id).indexOf(id);
        this.setState(state=>{
            let {tasks}=state;
            delete tasks[index];
            return tasks;
        });

    };
    
    render() {
        const {tasks}=this.state;
        const activeTasks=tasks.filter(task=>!task.done);
        const doneTasks=tasks.filter(task=>task.done);

        return (
            <div className='App'>
                <h1 className='top'>Active tasks: {activeTasks.length}</h1>
                {[...activeTasks,...doneTasks].map(task=>(
                    <Task 
                    doneTask={()=>this.doneTask(task.id)} 
                    delTask={()=>this.delTask(task.id)}
                    task={task} 
                    key={task.id}>
                </Task> 
            ))}
            <Taskinput addTask={this.addTask}></Taskinput>
                    
            </div>
        )
    }
}
    
export default App;