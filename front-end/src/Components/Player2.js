import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Form,
  Container,
  Col,
  Row
} from 'react-bootstrap';
import axios from 'axios';

function Player2() {

  const [reel, setReel] = useState([{ url: 'PleaseSubmitPhoto' }]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeIndex = () => {
    if (currentIndex < reel.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0)
    }
    return currentIndex;
  };

  useEffect(() => {
    const interval = setInterval(changeIndex, 5000);
    return () => clearInterval(interval);
  });

  const { register, handleSubmit /*, watch, errors*/ } = useForm();

  const onSubmit = (data) => {
    axios.get(`http://localhost:5000/player/${data.code}`)
      .then((response) => {
        let photos = response.data.photos;
        setReel(photos);
      })
  }

  const image = () => {
    if (reel[0].url === 'PleaseSubmitPhoto') {
      return (<></>)
    } else {
      return (
        <img
          src={reel[currentIndex].url}
          alt={`pic number ${currentIndex + 1} of ${reel.length} in reel`}
          className='player2'
        />
      )
    }
  }



  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Reel Code</Form.Label>
          <Form.Control name='code' type="text" placeholder="code" ref={register} required />
        </Form.Group>
        <Button variant="outline-primary" type='submit' size='lg' block>
          Play Reel
      </Button>
      </Form>

      <Col className='image-container'>
        {image()}
      </Col>
    </>
  );
}

export default Player2;