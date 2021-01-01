import './App.css';
import React from 'react';
import {
  Container
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import BasePage from './Components/BasePage.js';
import Player from './Components/Player.js';
import Player2 from './Components/Player2.js';
import Footer from './Components/Footer.js';
import AddReelModal from './Components/AddReelModal.js';

function App() {
  return (
    <Router>
      <Container className='header'>
        <nav>
          <h1>
            Share Reel
          </h1>
          <Link className='link' to='/'>Home</Link>|
          <Link className='link' to='/player'>Play Reel Pop-Up</Link>
          |  <AddReelModal />  |
          <Link className='link' to='/test'>Play Reel In Page</Link>

        </nav>
      </Container>

      <Container className='page'>
        <Switch>
          <Route path='/test'>
            <Player2 />
          </Route>
          <Route path='/player'>
            <Player />
          </Route>
          <Route path='/'>
            <BasePage />
          </Route>
        </Switch>
      </Container>

      {/* Footer */}
      <Footer />

    </Router>
  );
}

export default App;
