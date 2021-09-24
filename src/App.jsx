import React, { Suspense } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { SiteNavbar } from './Components/SiteNavbar';

library.add(fab)

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <SiteNavbar />
      </Suspense>
    </div>
  );
}

export default App;
