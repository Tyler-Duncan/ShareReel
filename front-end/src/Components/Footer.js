import React from 'react';
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import AddReelModal from './AddReelModal.js';



const Footer = () => {
  return (
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
                <AddReelModal />
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
  );
}

export default Footer;