import React from 'react';
import './Navbar.scss';
import logo from '../../assets/Images/dillons-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button id ="toggler" className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <a className="navbar-brand mx-auto" href="#">
          <img src={logo} alt="Logo" width="100vw" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categorías</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mis pedidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Mi cuenta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Atención al cliente</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;