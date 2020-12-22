import React from 'react';
import photo1 from '../DemoData/Pic1.jpg'
import photo2 from '../DemoData/Pic2.jpg'

import { Container, Col, Row, Image, FormGroup, InputGroup, Button } from 'react-bootstrap';


const BasePage = () => {
  return (


    <Container>
      <Row>
        <Col>
          <h3>How Do I Use It?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante. Cursus eget nunc scelerisque viverra. Odio pellentesque diam volutpat commodo. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Pretium lectus quam id leo. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Sapien nec sagittis aliquam malesuada. Pharetra et ultrices neque ornare aenean euismod elementum nisi.</p>
        </Col>

          {/* Image of the App */}
          <Image src={photo2} roundedCircle style={{ width: '200px', height: '200px', float: 'right' }} />

      </Row>
      <Row>

          {/* Image of the App */}
          <Image src={photo1} roundedCircle style={{ width: '200px', height: '200px' }} />

        <Col style={{ textAlign: 'right'}}>
          <h3>What is Share Reel?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in ante. Cursus eget nunc scelerisque viverra. Odio pellentesque diam volutpat commodo. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Pretium lectus quam id leo. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Sapien nec sagittis aliquam malesuada. Pharetra et ultrices neque ornare aenean euismod elementum nisi.</p>
        </Col>
      </Row>
      <Col>
        <Row className='justify-content-md-center'>
          <Button>Log In!</Button>

        </Row>
      </Col>
    </Container>


  )

}

export default BasePage