import React, { useState } from "react";
import Data from "./components/cards/Data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Card1 from './components/cards/Card1';
import Card2 from './components/cards/Card2';
import Cart from './components/Navbar/Cart'



function App() {
  // step 1: fetch data from database
  const { productItems } = Data

  const [cartItem, setCardItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCardItem(cartItem.map((item) =>
      (item.id === product.id ?
        { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }])
    }
  }


  return (
    <div className="app">

      <Router>
        <Navbar cartItem={cartItem} />
        <Switch>
          <Route path='/' exact>
            <Card1 productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path='/cart' exact>
            <Cart cartItem={cartItem} addToCart={addToCart} />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;


