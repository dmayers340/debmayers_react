import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Home } from './Home';
import { CV } from './CV';
import { Projects } from './Projects';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnderConstruction } from './UnderConstruction';
import { links, socialMedia } from '../config/deb-information.js';

export const SiteNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const collapseClass = isOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse';
  const toggleClass = isOpen ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      <a className="skip-main" href="#main">Skip to main content</a>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" onClick={() => setIsOpen(!isOpen)}>
          <img
            src="/img/debmayers.png"
            height="30"
            className="d-inline-block align-top"
            alt="Deb Mayers Logo"
          />
        </Navbar.Brand>
        <button onClick={() => setIsOpen(!isOpen)} className={`${toggleClass}`} type="button" data-toggle={`${collapseClass}`} data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${collapseClass}`} id="navbarResponsive">
          <Nav className="mr-auto">
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/about'} className="nav-link">About</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/cv'} className="nav-link">Resume</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/spatialComputing'} className="nav-link">Spatial Computing Paper</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/projects'} className="nav-link">Projects</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/contact'} className="nav-link">Contact</NavLink>
          </Nav>
          <ul className="icons">
            {socialMedia.map(social => (
              <li key={social.name}>
                <a className="social-media-icon" href={social.href} aria-label={social.name}>
                  <FontAwesomeIcon alt={social.fontAwesomeAlt} size="lg" icon={social.icon} aria-hidden="true" />
                  <span className="visually-hidden">
                    {social.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Navbar>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cv' component={CV} />
        <Route exact path='/projects' component={Projects} />
        <Route component={UnderConstruction} />
      </Switch>
    </>
  )
}