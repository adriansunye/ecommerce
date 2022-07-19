
import './App.css';


import {Navbar ,Header, Products, Footer } from './container';


import React from 'react';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Products/>
      <Footer/>
      
    </div>
  );
}





export default App;
