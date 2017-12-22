import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component{
    render(){
        return(
            <div>
                <img src="../../assets/auth_logo.png" alt="authlogo"/>
                <h2>Username</h2>
                <input placeholder='Username'/>
                <h2>Password</h2>
                <input placeholder='Password'/>
                <br/>
                <button>Login</button>
                <Link to='/home'><button>Register</button></Link>
            </div>
        )
    }
}