import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Modal,
  Carousel,
  Form
} from 'react-bootstrap';
import axios from 'axios';

function Player() {

  const [show, setShow] = useState(false);
  const [reel, setReel] = useState([{url: 'https://img.etsystatic.com/il/bf308b/1140789011/il_fullxfull.1140789011_odw9.jpg', description: 'from internet'}]);


  const { register, handleSubmit /*, watch, errors*/ } = useForm();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {
    axios.get(`http://localhost:5000/player/${data.code}`)
      .then((response) => {
        let photos = response.data.photos;
        setReel(photos);
      })
      .then(handleShow)
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

      <Modal show={show} onHide={handleClose} dialogClassName='fullscreen-modal'>
        <Modal.Body>
          <Carousel pause={false}>
            {reel.map((photo, index) => {
              return (
                <Carousel.Item key={index} interval={5000}>
                  <img
                    className='fullscreen'
                    src={photo.url}
                    alt={`Slide ${index}`}
                  />
                  {/* <Carousel.Caption>
                    {photo.description}
                  </Carousel.Caption> */}
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Player;