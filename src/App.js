import React from 'react';
import './App.css';
// import { SiteNavbar } from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { ExperienceList} from './Components/ExperienceList';
import { ModelsList } from './Components/ModelsList';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/ar'} className="nav-link">AR</Link></li>
            <li><Link to={'/webvr'} className="nav-link">WebVR</Link></li>
            <li><Link to={'/experiences'} className="nav-link">Experiences</Link></li>
            <li><Link to={'/models'} className="nav-link">Models</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/experiences' component={ExperienceList} />
          <Route path='/experiences/:name' component={ExperienceList} />
          <Route path='/models' component={ModelsList} />
          <Route path='/ar' component={ModelsList} />
          <Route path='/webvr' component={ModelsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
