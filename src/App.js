import logo from './logo.svg';
import './App.css';

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import { Header, Products, Footer } from './container';
import { Navbar } from './components';
import { Section_inicio } from './container/Section_inicio/Section_inicio';

import React from 'react';

const App = () => {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Section_inicio/>
      {/* <Header />
      <Products />
      <Footer /> */}
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
