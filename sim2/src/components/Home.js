import React, { Component } from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
            <Header/>
            <Link to='/1'><button>Add new property</button></Link>
            <p>list propeties with "desired rent" greator than:$ <input placeholder='0'/></p>
            <button>Filter</button>
            <button>Reset</button>
            <br/>
            <h3>Home Listings</h3>
            </div>
        )
    }
}