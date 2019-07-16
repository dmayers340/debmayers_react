import React from 'react';
import './App.css';
import { SiteNavbar } from './Components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
      <div className="App">
        <SiteNavbar />
      </div>
  );
}

export default App;
