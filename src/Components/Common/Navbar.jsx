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
import { faCube, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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

export const SiteNavbar = (props) => {
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
        <button onClick={() => setIsOpen(!isOpen)} className={`${toggleClass}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${collapseClass}`} id="navbarResponsive">
          <Nav className="mr-auto">
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/about'} className="nav-link">About</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/resume'} className="nav-link">Resume</NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/spatialComputing'} className="nav-link">Spatial Computing Paper</NavLink>
            <NavDropdown title="Projects" tabIndex={0}>
              <NavDropdown.Item href="/presentations" onClick={() => setIsOpen(!isOpen)}>Presentations</NavDropdown.Item>
              <NavDropdown.Item href="/models" onClick={() => setIsOpen(!isOpen)}>3D Modelling</NavDropdown.Item>
              <NavDropdown.Item href="/projects" onClick={() => setIsOpen(!isOpen)}>Unity XR Projects</NavDropdown.Item>
              <NavDropdown.Item href="/experiences" onClick={() => setIsOpen(!isOpen)}>WebGL Experiences</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="WebAR Projects" name="WebAR Projects" tabIndex={0}>
              <NavDropdown.Item href="/ar" onClick={() => setIsOpen(!isOpen)}>AR</NavDropdown.Item>
              <NavDropdown.Item href="/ar/mithraeum" onClick={() => setIsOpen(!isOpen)}>AR Mithraeum</NavDropdown.Item>
              <NavDropdown.Item href="/ar/solarsystem" onClick={() => setIsOpen(!isOpen)}>AR Solar System</NavDropdown.Item>
              <NavDropdown.Item href="/ar/science" onClick={() => setIsOpen(!isOpen)}>AR Science Centre Map</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="WebXR Projects" name="XR Projects" tabIndex={0}>
              <NavDropdown.Item href="/solarsystem" onClick={() => setIsOpen(!isOpen)}>Solar System</NavDropdown.Item>
              <NavDropdown.Item href="/webvr" onClick={() => setIsOpen(!isOpen)}>Carrawburgh Roman Fort Recreation</NavDropdown.Item>
              <NavDropdown.Item href="/cv" onClick={() => setIsOpen(!isOpen)}>CV</NavDropdown.Item>
            </NavDropdown>
            <NavLink onClick={() => setIsOpen(!isOpen)} to={'/contact'} className="nav-link">Contact</NavLink>
          </Nav>
          <ul className="icons"> 
            <li>
              <a className="social-media-icon" href="https://twitter.com/debmayers24" aria-label="Twitter">
                <FontAwesomeIcon alt="Twitter bird logo" size="lg" icon={['fab', 'twitter']} aria-hidden="true" />
                <span className="visually-hidden">
                  Deb Mayers Twitter
                </span>
              </a>
            </li>
            <li>
              <a className="social-media-icon" href="https://www.linkedin.com/in/deborahmayers/" aria-label="LinkedIn">
                <FontAwesomeIcon alt="LinkedIn logo" size="lg" icon={['fab', 'linkedin']} aria-hidden="true" />
                <span className="visually-hidden">
                  Deb Mayers LinkedIn
                </span>
              </a>
            </li>
            <li>
              <a className="social-media-icon" href="https://github.com/dmayers340" aria-label="Github">
                <FontAwesomeIcon alt="github logo" pull="right" size="lg" icon={['fab', 'github']} aria-hidden="true" />
                <span className="visually-hidden">
                  Deb Mayers Github
                </span>
              </a>
            </li>
            <li>
              <a className="social-media-icon" href="https://sketchfab.com/debmayers24" aria-label="Sketchfab">
                <FontAwesomeIcon alt="cube" pull="right" size="lg" icon={faCube} aria-hidden="true" />
                <span className="visually-hidden">
                  Deb Mayers Sketchfab
                </span>
              </a>
            </li>
            <li> 
              <a className="social-media-icon" href="mailto:dmayers340@gmail.com.com?Subject=Hello%20Contacting%20After%20Visiting%20Your%20Website">
                <FontAwesomeIcon alt="envelop" pull="right" size="lg" icon={faEnvelope} aria-hidden="true" />
                <span className="visually-hidden">
                  Email Deb Mayers
                </span>
              </a>
            </li>
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

        <Route component={UnderConstruction} />
      </Switch>
    </>
  )
}