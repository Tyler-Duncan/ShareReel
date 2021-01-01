import React from 'react';
import photo1 from '../DemoData/Pic1.jpg';
import photo2 from '../DemoData/Pic2.jpg';
import AddReelModal from './AddReelModal.js';

import { Container, Col, Row, Image } from 'react-bootstrap';


const BasePage = () => {
  return (
    <Container>
      <h3 style={{ textAlign: 'center' }}>What is Share Reel?</h3>
      <Row>
        <Col>
          <p style={{marginLeft: '200px'}}>Share Reel is a way to turn any smart device into a custom transitioning photo-frame. Friends, and family can share their favorite photos in the form of a simple unique 'Reel Code.'</p>
        </Col>
        {/* Image of the App */}
        <Image src={photo2} roundedCircle style={{ width: '200px', height: '200px', float: 'right' }} />
      </Row>

      <h3 style={{ textAlign: 'center' }}>How Do I Use It?</h3>
      <Row>
        {/* Image of the App */}
        <Image src={photo1} roundedCircle style={{ width: '200px', height: '200px' }} />

        <Col>
          <p style={{marginRight: '200px'}}>You can create a brand new reel yourself by clicking <AddReelModal /> or by using the button at the top! Once you have a reel code you may head to the <a href='/player'>Reel Player</a> and type it in to see the reel! For best results navigate to this site on a smart TV and start your photo reel in full screen.
          </p>
        </Col>
      </Row>
      {/* <Col>
        <Row className='justify-content-md-center'>
          <Button>Log In!</Button>

        </Row>
      </Col> */}
    </Container>
  )
}

export default BasePage