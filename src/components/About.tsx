import type {
  FunctionComponent
} from 'react';
import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

type AboutProps = {};

export const About: FunctionComponent<AboutProps> = () => (
  <section id="about">
    <Container>
      <div className="title-box text-center">
        <h1 className="title-a">ABOUT</h1>
        <div className="line-mf" />
      </div>
      <div className="box-shadow-full">
        <Row>
          <Column lg={6}>
            <div className="about-me pt-4 pb-pt-md-0">
              <p className="lead">test text</p>
            </div>
          </Column>
          <Column lg={6} className="d-none d-lg-flex border-left">
            img goes here
          </Column>
        </Row>
      </div>
    </Container>
  </section>
);