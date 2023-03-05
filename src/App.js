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
import DownloadSticker from './components/imgs/download/iOSDownloadSticker.jpg';

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
