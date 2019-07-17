import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, NavLink  } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { ExperienceList} from './ExperienceList';
import { ModelsList } from './ModelsList';
import { ProjectList } from './ProjectList';
import { Experience } from './Experience';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import {UnderConstruction} from './UnderConstruction';

export const SiteNavbar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"> <img
        src="img/debmayers.png"
        height="30"
        className="d-inline-block align-top"
        alt="Deb Mayers Logo"
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink  to={'/'} className="nav-link"> Home </NavLink >
                <NavLink  to={'/about'} className="nav-link">About</NavLink >
                <NavLink  to={'/ar'} className="nav-link">AR</NavLink >
                <NavLink  to={'/webvr'} className="nav-link">WebVR</NavLink>
                <NavLink  to={'/experiences'} className="nav-link">Experiences</NavLink>
                <NavLink to={'/projects'} className="nav-link">Projects</NavLink>
                <NavLink  to={'/models'} className="nav-link">Models</NavLink>
                <NavLink  to={'/cv'} className="nav-link">CV</NavLink >
                <NavLink  to={'/contact'} className="nav-link">Contact</NavLink>
                <a href ="https://twitter.com/debmayers24"><FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'twitter']} /></a>
                <a href = "https://www.linkedin.com/in/deborahmayers/"> <FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'linkedin']} /></a>
                <a href="https://github.com/dmayers340"><FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'github']} /></a>
                <a href="https://sketchfab.com/debmayers24"><FontAwesomeIcon pull = "right" size="lg" icon={faCube} /></a>
            </Nav>
        </Navbar.Collapse>
      </Navbar>        
      <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/experiences' component={ExperienceList} />
          <Route path='/experiences/:name' render={Experience} />
          <Route exact path='/models' component={ModelsList} />
          <Route exact path='/ar' component={UnderConstruction} />
          <Route exact path='/webvr' component={UnderConstruction} />
          <Route exact path='/projects' component={ProjectList} />
          <Route exact path='/cv' component={UnderConstruction} />
        </Switch>
        </>
    )
}