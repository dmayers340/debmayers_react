import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { SiteNavbar } from './Components/Common/Navbar';

library.add(fab)

function App() {
  return (
    <div className="App">
      <SiteNavbar />
    </div>
  );
}

export default App;
