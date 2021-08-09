import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
        <Container fluid className="App">
          <a className="download-sticker" href="https://apps.apple.com/us/app/blood-pressure-numbers/id1534661419"><img src={DownloadSticker} alt="Download from the iOS store" /></a>
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
