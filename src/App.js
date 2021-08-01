import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';

class App extends Component {



  render() {
    return (
      <Router>
        <Container className="App">
          <Nav />
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />       
            </Route>
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App;
