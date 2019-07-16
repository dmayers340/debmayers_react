import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, NavLink  } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { ExperienceList} from './ExperienceList';
import { ModelsList } from './ModelsList';
import { Experience } from './Experience';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

export const SiteNavbar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Deb Mayers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink  to={'/'} className="nav-link"> Home </NavLink >
                <NavLink  to={'/contact'} className="nav-link">Contact</NavLink>
                <NavLink  to={'/about'} className="nav-link">About</NavLink >
                <NavLink  to={'/ar'} className="nav-link">AR</NavLink >
                <NavLink  to={'/webvr'} className="nav-link">WebVR</NavLink>
                <NavLink  to={'/experiences'} className="nav-link">Experiences</NavLink>
                <NavLink  to={'/models'} className="nav-link">Models</NavLink>
                <NavLink  to={'/cv'} className="nav-link">CV</NavLink >
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
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/experiences' component={ExperienceList} />
          <Route path='/experiences/:name' render={Experience} />
          <Route path='/models' component={ModelsList} />
          <Route path='/ar' component={ModelsList} />
          <Route path='/webvr' component={ModelsList} />
        </Switch>
        </>
    )
}