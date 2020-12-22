import React from 'react';
import axios from 'axios';
import {
  Container,
  Col,
  Row,
  Image,
  FormGroup,
  InputGroup,
  Button
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


//Implement use of parameter housing the Reel Code
function Player() {

  let { reel } = useParams();

  if (reel) {
    return (
      <>
        Carousel Of Photos that match code/hash in database
      </>
    );
  } else {

    return (
      <Container>
      <p>Type in the Reel Code</p>
        <input type='text' placeholder='Reel Code'></input>
        <input type='submit'></input>
        <br></br>
        <Button style={{marginTop: '10px'}}>Fullscreen</Button>
      </Container>
    );
  }

}

export default Player;