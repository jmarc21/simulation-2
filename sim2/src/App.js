import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import routes from './wizzard/routes';
import Step1 from './components/Step1';
import Step2 from './components/Step2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/1' component={Step1} />
        <Route path='/2' component={Step2} />
        {/* <Route path='/wizzard/3' component={Step3} />
        <Route path='/wizzard/4' component={Step4} />
        <Route path='/wizzard/5' component={Step5} /> */}
      </div>
    );
  }
}

export default App;
