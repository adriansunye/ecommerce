import React from "react";
import "./navbar.css";
import { MdMenu } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";


const Navbar = ({ cartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
})
 
  return (
    <div className="navbar">
      <MdMenu className="btn-hamb" />
      <input type="textcategories" />
      <div className="cart">
        <Link to="/cart">
          <AiFillShopping className="fa-shopping icon-circle" />
          <span>{cartItem.length === {} ? "" : cartItem.length}</span>
        </Link>

      </div>


    </div>
  );
}

export default Navbar;