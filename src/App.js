
import './App.css';
import { Header,About, Footer } from './container';
import { Navbar } from './components';
import React from 'react';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  )
}





export default App;
