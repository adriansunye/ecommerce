import React, { useState } from "react";
import Data from "../cards/Data"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../NavbarCard/Navbar"
import Card1 from "./Card1";

import Card2 from "./Card2";

function Cardgroup() {
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
              <Card2 cartItem={cartItem}  productItems={productItems}/>
            </Route>
          </Switch>
        </Router>
  
      </div>
    );
  }
  

export default Cardgroup
