import React, { Component } from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

export default class Step1 extends Component {
    render() {
        return (
            <div>
                <Header />
                <h2>Add new listing</h2>
                <Link to='/home'><button>Cancel</button></Link>
                <p>step 1</p>
                <img src="../../assets/step_active.png" alt="stepactive"/>
                <img src="../../assets/step_inactive.png" alt="inactive"/>
                <img src="../../assets/step_inactive.png" alt="inactive"/>
                <img src="../../assets/step_inactive.png" alt="inactive"/>
                <img src="../../assets/step_inactive.png" alt="inactive"/>
                <h3>Property Name</h3>
                {/* property name */}
                <input />
                {/* property discription */}
                <input />
                <Link to='/2'><button>Next Step</button></Link>
            </div>
        )
    }
}