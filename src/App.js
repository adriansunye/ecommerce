import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import Welcome from './views/welcome/Welcome';

function App() {
  return (

    <div className="app">
      <Navbar/>
      <Welcome/>
    </div>

  );
}

export default App;