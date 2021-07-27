import './App.css';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layout/NavBar';
import React, { Component } from 'react';
import Dashboard  from './components/layout/Dashboard';
class App extends Component {
  render() {
    return(
      <Router>
       <div className="App">
    <NavBar /><div className="container"><Dashboard></Dashboard></div>
    
    </div>
    </Router>
    );
  }
  }
  export default App;