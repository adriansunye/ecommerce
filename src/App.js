

import './App.css';
import { Header,About, Products, Footer } from './container';
import { Navbar } from './components';
import React from 'react';

const App = () => {
  return (

    <div className="app">
      <Navbar />
      <Header />
      <About/>
      <Footer/>
      <Products/> 
     
    </div>

   

  );
}

export default App;
