import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Col, Button, Row, InputGroup, FormGroup, Image } from 'react-bootstrap';


function Dashboard() {
  let username = 'Ty'
  // let reels = []
  // useEffect(() => {
  //   axios.get(`/dashboard/${user}`)
  //     .then((results) => {
  //       reels = [...results];
  //     })
  // })

  return (
    <Container>
      <Row>
        <h2>Welcome {username}!</h2>
      </Row>

      <h3>Your reels</h3>
      <p>

        Mapping of reel list from the database, with links to go to the player<br></br>
      If no reels for this user, show short instructions/quick start
      </p>

      <h3>Add a new reel</h3>
      <p>
        Form for adding a new reel to the database<br></br>
      Possibly use a button
      </p>
    </Container>
  );
}

export default Dashboard