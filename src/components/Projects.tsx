import type {
  FunctionComponent
} from 'react';
import Container from 'react-bootstrap/Container';
import Column from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ChatApp from './assets/chatapp.png';

type ProjectsProps = {};

const Projects: FunctionComponent<ProjectsProps> = () => (
  <section id="projects">
    <Container>
      <div className="title-box text-center">
        <h1 className="title-a">PROJECTS</h1>
        <div className="line-mf" />
      </div>
      <Row>
        <Column>
          <Card className="shadow mb-5 bg-white rounded">
            <Card.Img variant="top" src={ChatApp} />
            <Card.Body>
              <Card.Title>wChat</Card.Title>
              <Card.Text>
                Chat application which organizes chatrooms in easy-to-use channels.
                Uses an invite system to faciliate access and preserve optional privacy.
                Completed from start to finish in less than one week.
              </Card.Text>
              <div className="w-more">
                <span className="w-category">JavaScript, SQLite3</span>
                <a className="project-link" href="https://github.com/PaulSera1/chatapp" target="_blank" rel="noreferrer">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Column>
        <Column>
        </Column>
      </Row>
    </Container>
  </section>
);

export default Projects;