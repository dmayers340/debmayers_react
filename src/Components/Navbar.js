import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { ExperienceList } from './ExperienceList';
import { ModelsList } from './ModelsList';
import { Model } from './Model';
import { ProjectInformation } from './ProjectInformation'
import { ProjectList } from './ProjectList';
import { Experience } from './Experience';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { UnderConstruction } from './UnderConstruction';
import { WebAR } from './WebAR';
import { WebVR } from './WebVR';

export const SiteNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  const collapseClass = isOpen ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const toggleClass = isOpen ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" onClick={openNavbar}>
          <img
            src="/img/debmayers.png"
            height="30"
            className="d-inline-block align-top"
            alt="Deb Mayers Logo"
          />
        </Navbar.Brand>
        <button onClick={openNavbar} className={`${toggleClass}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${collapseClass}`} id="navbarResponsive">
          <ul className="navbar-nav mr-auto">
            <NavLink onClick={openNavbar} to={'/'} className="nav-link"> Home </NavLink >
            <NavLink onClick={openNavbar} to={'/about'} className="nav-link">About</NavLink >
            <NavLink onClick={openNavbar} to={'/ar'} className="nav-link">AR</NavLink >
            <NavLink onClick={openNavbar} to={'/webvr'} className="nav-link">WebVR</NavLink>
            <NavLink onClick={openNavbar} to={'/experiences'} className="nav-link">Experiences</NavLink>
            <NavLink onClick={openNavbar} to={'/projects'} className="nav-link">Projects</NavLink>
            <NavLink onClick={openNavbar} to={'/models'} className="nav-link">Models</NavLink>
            <NavLink onClick={openNavbar} to={'/contact'} className="nav-link">Contact</NavLink>
            <a href="https://twitter.com/debmayers24" aria-label="Twitter"><FontAwesomeIcon pull="right" size="lg" icon={['fab', 'twitter']} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/deborahmayers/" aria-label="LinkedIn"> <FontAwesomeIcon pull="right" size="lg" icon={['fab', 'linkedin']} aria-hidden="true" /></a>
            <a href="https://github.com/dmayers340" aria-label="Github"><FontAwesomeIcon pull="right" size="lg" icon={['fab', 'github']} aria-hidden="true" /></a>
            <a href="https://sketchfab.com/debmayers24" aria-label="Sketchfab"><FontAwesomeIcon pull="right" size="lg" icon={faCube} aria-hidden="true" /></a>
          </ul>
        </div>
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
        <Route component={UnderConstruction} />
      </Switch>
    </>
  )
}