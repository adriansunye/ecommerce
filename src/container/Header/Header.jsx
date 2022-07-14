import React from 'react';
import './Header.scss';




const Header = () => {
  return (
    <div className="Wellcome">
      <div className="TextGeneral">
        <h1>Empieza tu compra en Dillons</h1>
        <p className="ParagraphWell">Introduce tu código postal y dependiendo de 
        tu ciudad accederás a la nueva compra online o a la web clásica.</p>
      </div>
      <div className="Postal">
        <button class="button2">Entrar</button>
      </div>
    </div>
  );
}

export default Header;