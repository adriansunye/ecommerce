import React from "react";
import "./navbar.css";
import { MdMenu } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = ({ cartItem }) => {
  
 
  return (
    <div className="navbar">
      <MdMenu className="btn-hamb" />
      <input type="textcategories" />
      <div className="cart">
        <Link to="/cart">
          <FaShoppingCart className="btn-cart" />
          <span className="number-cart">{cartItem.length === 0 ? "" : cartItem.length}</span>
        </Link>

      </div>


    </div>
  );
}

export default Navbar;