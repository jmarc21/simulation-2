import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
            <div>
                <img src="../assets/header_logo.png" alt="headerlogo"/>
                <h1>Houser</h1><h1>Dashboard</h1>
                <Link to='/'><button>Logout</button></Link>
            </div>
        )
    }
}