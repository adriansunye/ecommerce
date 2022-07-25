import React from 'react';
import './About.scss';
import img from '../../assets/Images/DSC_0171.jpeg'

function About() {
  return (

    <div className="aboutGeneral"  >
      <div className="TextosAbout">
        <h2 className="TituloAbout"> La Historia desde 1890</h2>
        <p className="ParAbout">JS Dillon fundó su primera tienda de abarrotes buscando una mejor manera de proveer alimentos para su propia familia de doce. Con esta mentalidad, trató a sus clientes de la misma manera... dándoles el mejor producto al mejor precio. Hoy, su visión ha crecido, se ha desarrollado y evolucionado, pero el concepto de pasión inquebrantable por servir a los demás nunca ha cambiado en Dillons.</p>
      </div>
      <div className="ImgFamily">
        <img className="imagenUno" src={img} alt="Dillon's workers" /></div>
    </div>


  );
}

export default About;