import './App.css';
import React from 'react';
import {
  Container,
  Col,
  Row,
  Image,
  FormGroup,
  InputGroup
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import BasePage from './Components/BasePage.js';
import Dashboard from './Components/Dashboard.js';
import Player from './Components/Player.js';

function App() {
  return (
    <Router>
      <Container className='header'>
        <nav>
          <h1>
            Share Reel
          </h1>

          <Link className='link' to='/'>Home</Link>

          <Link className='link' to='/player'>Play A Reel</Link>


          <Link className='link' to='dashboard'>Your Dashboard</Link>


        </nav>
      </Container>

      <Container className='page'>
        <Switch>
          <Route path='/player'>
            <Player />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/'>
            <BasePage />
          </Route>
        </Switch>
      </Container>

      <Container className='footer'>
        <Row>
          <Col>
            <nav>
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/player'>Play A Reel</Link>
                </li>
                <li>
                  <Link to='dashboard'>Your Dashboard</Link>
                </li>
              </ul>
            </nav>
          </Col>
          <Col>
            <p>
              Thank you for visiting the website!<br></br>~ Ty
          </p>
          </Col>
          <Col>
            <h3>Link Up</h3>
            <ul>
              <li>
                <a href='https://github.com/Tyler-Duncan'>My GitHub</a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/tylerdduncan/'>LinkedIn</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

    </Router>
  );
}

export default App;
