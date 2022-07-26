import React from "react";
import "./Navbarcard.scss"

import { MdMenu } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbarcart({ cartItem }) {
  // window.addEventListener("scroll", function () {
  //   const navbar = document.querySelector()
  // })


  return (
    <div className="navbar">
      <MdMenu className="btn-hamb" />
      <input type="textcategories" className="input" />

      <div className="cart">
        <Link to="/cart">
          <FaShoppingCart className="btn-cart" />
          <b><span className="number-cart">{cartItem.length === {} ? "" : cartItem.length}</span></b>
        </Link>
      </div>


    </div>
  );
}

export default Navbarcart;