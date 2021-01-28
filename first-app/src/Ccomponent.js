import React, { Component } from 'react';
import './style.css';
// import { Button } from '@material-ui/core';
// import Fcomponent from './Fcomponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Home from './Home';
import Users from './users';
//!Контролируемый input

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/about'>About</Link> {/*to - путь перехода(адресная строка)*/ }
                            </li>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/users'>Users</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch> {/*далее внутри switch каждый маршрут предосталвяет объект Route*/}
                         <Route path='/About'>
                            <About/>
                         </Route>
                         <Route path='/'>
                            <Home/>
                         </Route>
                         <Route path='/users'>
                            <Users/>
                         </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}



//!rcc классовые компоненты