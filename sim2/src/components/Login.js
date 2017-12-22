import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default class Login extends Component {
    render() {
        return (
            <div className='login-page'>
                <section className='background-white'>
                    <img src="../../assets/auth_logo.png" alt="authlogo" className='logo' />
                    <h2 className='username'>Username</h2>
                    <input className='username-input' placeholder='Username' />
                    <h2 className='password'>Password</h2>
                    <input className='password-input' placeholder='Password' />
                    <br />
                    <button className='login-button' >Login</button>
                    <Link to='/home'><button className='register-button'>Register</button></Link>
                </section>
            </div>
        )
    }
}