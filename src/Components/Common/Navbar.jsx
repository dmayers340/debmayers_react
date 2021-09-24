import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Home } from '../Home';
import { About } from '../About';
import { Contact } from '../Contact';
import { ExperienceList } from '../Lists/ExperienceList';
import { ModelsList } from '../Lists/ModelsList';
import { Model } from '../Model';
import { ProjectInformation } from '../ProjectInformation'
import { ProjectList } from '../Lists/ProjectList';
import { Experience } from '../Experience';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnderConstruction } from './UnderConstruction';
import { WebAR } from '../XR/AR/WebAR';
import { WebVR } from '../XR/VR/WebVR';
import { Presentations } from '../Lists/Presentations';
import { CV } from '../XR/VR/CV';
import Resume from '../Resume';
import Doc from '../Doc';
import SolarSystem from '../XR/VR/SolarSystem';
import SolarSystemAR from '../XR/AR/SolarSystemAR';
import SciCenter from '../XR/AR/SciCenter';
import Mithraeum from '../XR/AR/Mithraeum';
import CodeWeek from '../XR/AR/CodeWeek';
import MarcusAurelieus from '../XR/AR/MarcusAurelius';
import { CLT } from '../XR/VR/CLT';

import { links, socialMedia } from '../../config/debstuff.js';

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
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/resume'} className="nav-link">Resume</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/spatialComputing'} className="nav-link">Spatial Computing Paper</NavLink>
            {
              links.map(section => (
                <NavDropdown key={section.title} title={section.title} tabIndex={0}>
                  {section.links.map(project => (
                    <NavDropdown.Item key={project.name} href={project.href} onClick={() => setIsOpen(!isOpen)}>{project.name}</NavDropdown.Item>
                  ))}
                </NavDropdown>
              ))
            }
         
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
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/spatialComputing' component={Doc} />
        <Route exact path='/cv' component={CV} />
        <Route exact path='/experiences' component={ExperienceList} />
        <Route path='/experiences/:name' render={Experience} />
        <Route exact path='/models' component={ModelsList} />
        <Route path='/models/:name' render={Model} />
        <Route path='/projects/:name' render={ProjectInformation} />
        <Route exact path='/ar' component={WebAR} />
        <Route exact path='/webvr' component={WebVR} />
        <Route exact path="/solarsystem" component={SolarSystem} />
        <Route exact path='/projects' component={ProjectList} />
        <Route exact path='/presentations' component={Presentations} />
        <Route exact path='/ar/solarsystem' component={SolarSystemAR} />
        <Route exact path='/ar/science' component={SciCenter} />
        <Route exact path='/ar/mithraeum' component={Mithraeum} />
        <Route exact path='/ar/codeweek' component={CodeWeek} />
        <Route exact path='/ar/marcus' component={MarcusAurelieus} />
        <Route exact path='/officesimulation' component={CLT} />

        <Route component={UnderConstruction} />
      </Switch>
    </>
  )
}