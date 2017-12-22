import React, {Component} from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

export default class Step2 extends Component{
    render(){
        return(
            <div>
                <Header />
                <h2>Add new listing</h2>
                <Link to='/home'><button>Cancel</button></Link>
                <p>step 2</p>
                <img src="../../assets/step_completed.png" alt="stepcompleted"/>
                <img src="../../assets/step_active.png" alt="stepactive"/>
                <img src="../../assets/step_inactive.png" alt="inactive"/>
                <img src="../../assets/step_inactive.png" alt="inactive"/>
                <img src="../../assets/step_inactive.png" alt="inactive"/>
                <p>Address</p>
                <input />
                <p>City</p>
                <input />
                <p>state</p>
                <input />
                <p>Zip</p>
                <input />
                <Link to='/1'><button>Previous Step</button></Link>
                <button>Next Step</button>
            </div>
        )
    }
}