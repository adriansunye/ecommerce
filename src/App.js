import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import Welcome from './views/welcome/Welcome';
import Support from './views/support/Support';

function App() {
  return (

    <div className="app">
      <Navbar/>
      <Welcome/>
      {/* <Support/> */}
    </div>
  );
}

export default App;