import React, { useState } from "react";
import Data from "../cards/Data"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbarcart from "../NavbarCard/Navbarcart"
import Card1 from "./Card1";

import Card2 from "./Card2";


function Cardgroup() {
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

    const decreaseQty = (product) => {
      const productExit = cartItem.find((item) => item.id === product.id)
      if (productExit.qty === 1){
        setCardItem(cartItem.filter((item) => item.id !== product.id))
      }else {
        setCardItem(cartItem.map((item) => (item.id === product.id? { ...productExit, qty: productExit.qty-1}:item)))
      }
    }
  
  
    return (
      <div className="app">
  
        <Router>
          <Navbarcart cartItem={cartItem} />
          <Switch>
            <Route path='/' exact>
              <Card1 productItems={productItems} addToCart={addToCart} cartItem={cartItem}/>
            </Route>
            <Route path='/cart' exact>
              <Card2 cartItem={cartItem}  productItems={productItems} addToCart={addToCart} decreaseQty={decreaseQty}/>
            </Route>
          </Switch>
        </Router>
  
      </div>
    );
  }
  

export default Cardgroup
