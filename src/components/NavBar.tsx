import React, {
  useState
} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import $ from 'jquery';

type NavBarProps = {};

export function NavBar(props: NavBarProps) {

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
    <React.Fragment>
      <Navbar id="navbar" collapseOnSelect expand="lg" className={scrolled ? undefined : "faint-white-bg"} bg={scrolled ? "light" : undefined} variant={scrolled ? "light" : undefined} fixed="top">
        <Navbar.Brand href="#home">
          Paul Serafimescu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {Object.entries(sections).map(([key, value]) => (
              <Nav.Link id={key} key={key} href={value}>{key}</Nav.Link>
            ))}
            <a className="btn btn-primary resume-btn" href="resume.pdf">Resume</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}