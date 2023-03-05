import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Health from './components/Health';
import Forum from './components/Forum';
import Auth from './components/Auth';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health" element={<Health />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
