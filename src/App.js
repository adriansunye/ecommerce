import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
    </div>
  );
}

export default App;