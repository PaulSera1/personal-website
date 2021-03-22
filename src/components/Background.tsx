import React, {
  FunctionComponent
} from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BackgroundImage from './assets/background.jpg';

type BackgroundProps = {};

const Background: FunctionComponent<BackgroundProps> = () => (
  <Container fluid>
    <Row>
      <Image fluid src={BackgroundImage} />
      <div className="centered-text">
        <h1 className="intro-title">Paul Serafimescu</h1>
        <h3>UCLA Computer Science and Engineering</h3>
        <a href="/">
          <i className="icon fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="/">
          <i className="icon fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>
    </Row>
  </Container>
);

export default Background;