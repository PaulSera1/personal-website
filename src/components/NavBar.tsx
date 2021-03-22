import React, {
  useState
} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import $ from 'jquery';

type NavBarProps = {};

export default function NavBar(props: NavBarProps) {

  const [scrolled, setScrolled] = useState(false);

  $(window).on('scroll', function() {
    let height = $('.navbar').height() as number;
    setScrolled($(window).scrollTop() as number >= height);
  });

  const sections = {
    Home: '#home',
    About: '#about',
    Projects: '#projects',
    Contact: '#contact'
  };

  return (
    <Container fluid id="nav-bar">
      <Navbar className={scrolled ? undefined : "faint-white-bg"} bg={scrolled ? "light" : undefined} variant={scrolled ? "light" : undefined} fixed="top">
        <Navbar.Brand href="#home">
          Paul Serafimescu
        </Navbar.Brand>
        <Nav className="ml-auto">
          {Object.entries(sections).map(([key, value]) => (
            <Nav.Link href={value}>{key}</Nav.Link>
          ))}
          <a className="btn btn-primary resume-btn" href="resume.pdf">Resume</a>
        </Nav>
      </Navbar>
    </Container>
  );
}