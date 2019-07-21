import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, NavLink  } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { ExperienceList} from './ExperienceList';
import { ModelsList } from './ModelsList';
import { Model } from './Model';
import { ProjectInformation } from './ProjectInformation'
import { ProjectList } from './ProjectList';
import { Experience } from './Experience';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import {UnderConstruction} from './UnderConstruction';
import { WebAR } from './WebAR';
import { WebVR } from './WebVR';

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
                <NavLink  to={'/contact'} className="nav-link">Contact</NavLink>
                <a href ="https://twitter.com/debmayers24" aria-label="Twitter"><FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'twitter']} aria-hidden="true"/></a>
                <a href = "https://www.linkedin.com/in/deborahmayers/" aria-label="LinkedIn"> <FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'linkedin']} aria-hidden="true"/></a>
                <a href="https://github.com/dmayers340" aria-label="Github"><FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'github']} aria-hidden="true"/></a>
                <a href="https://sketchfab.com/debmayers24" aria-label="Sketchfab"><FontAwesomeIcon pull = "right" size="lg" icon={faCube} aria-hidden="true"/></a>
            </Nav>
        </Navbar.Collapse>
      </Navbar>        

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/experiences' component={ExperienceList} />
          <Route path='/experiences/:name' render={Experience} />
          <Route exact path='/models' component={ModelsList} />
          <Route path='/models/:name' render={Model} />
          <Route path='/projects/:name' render={ProjectInformation} />
          <Route exact path='/ar' component={WebAR} />
          <Route exact path='/webvr' component={WebVR} />
          <Route exact path='/projects' component={ProjectList} />
          <Route component = {UnderConstruction} />
        </Switch>
        </>
    )
}