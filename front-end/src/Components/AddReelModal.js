import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import {
  Modal,
  Button,
  Form,
  Col,
  Row
} from 'react-bootstrap';
import axios from 'axios';


export default function AddReelModal() {
  const { register, handleSubmit /*, watch, errors*/ } = useForm();

  //Handle post request to '/addReel' in submit, use setCode to display the hash from mongoDB
  const onSubmit = (data) => {
    let test = () => {
      data.photos = [];

      for (let key in data) {
        if (data[key] === '') {
          delete data[key];
        }
        if (key.includes('photo') && key !== 'photos' && data[key] !== undefined) {
          data.photos.push({ url: data[key] })
          delete data[key];
        }
      }
      return data;
    }
    test()

    axios.post('http://localhost:5000/addReel', data)
      .then((response) => {
        setCode(`Code Generated: ${response.data._id}`);
      })
  }

  const [show, setShow] = useState(false);
  const [code, setCode] = useState('Fill out form and generate code')

  const handleClose = () => { setShow(false); setCode('Fill out form and generate code'); }
  const handleShow = () => setShow(true);

  return (
    <>
      <Link variant="primary" onClick={handleShow}>
        Create A Reel
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create A Reel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="reelForm.ControlInput1">
              <Form.Label>Name of reel</Form.Label>
              <Form.Control name='name' type="text" placeholder="name" ref={register} required />
            </Form.Group>
            {/* <Form.Group controlId="reelForm.ControlTextarea1">
              <Form.Label>Description of the reel (optional)</Form.Label>
              <Form.Control name='description' as="textarea" rows={3} ref={register} />
            </Form.Group> */}
            <Form.Group controlId="reelForm.ControlInput3">
              <Form.Label>Photo 1</Form.Label>
              <Form.Control name='photo1' type="url" placeholder="url" ref={register} required />
              {/* <Form.Label>Description of the photo (optional)</Form.Label>
              <Form.Control name='description1' as="textarea" rows={2} ref={register} /> */}
              <br />
              <Form.Label>Photo 2</Form.Label>
              <Form.Control name='photo2' type="url" placeholder="url" ref={register} />
              {/* <Form.Label>Description of the photo (optional)</Form.Label>
              <Form.Control name='description2' as="textarea" rows={2} ref={register} /> */}
              <br />
              <Form.Label>Photo 3</Form.Label>
              <Form.Control name='photo3' type="url" placeholder="url" ref={register} />
              {/* <Form.Label>Description of the photo (optional)</Form.Label>
              <Form.Control name='description3' as="textarea" rows={2} ref={register} /> */}
              <br />
              <Form.Label>Photo 4</Form.Label>
              <Form.Control name='photo4' type="url" placeholder="url" ref={register} />
              {/* <Form.Label>Description of the photo (optional)</Form.Label>
              <Form.Control name='description4' as="textarea" rows={2} ref={register} /> */}
              <br />
              <Form.Label>Photo 5</Form.Label>
              <Form.Control name='photo5' type="url" placeholder="url" ref={register} />
              {/* <Form.Label>Description of the photo (optional)</Form.Label>
              <Form.Control name='description5' as="textarea" rows={2} ref={register} /> */}
              <br />
            </Form.Group>
            {/* <Form.Group>
              <Form.File name='photo1' id="reelForm.ControlFile1" label="photo #1" ref={register} />
              <Form.File name='photo2' id="reelForm.ControlFile2" label="photo #2" ref={register} />
              <Form.File name='photo2' id="reelForm.ControlFile3" label="photo #3" ref={register} />
            </Form.Group> */}
            <Modal.Footer>
              <Col>
                <Row className="justify-content-center">
                  {code}
                </Row>
                <br />
                <Row className="justify-content-center">
                  <Button variant="primary" type='submit' block>
                    Generate Reel
                  </Button>
                </Row>
              </Col>

            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}