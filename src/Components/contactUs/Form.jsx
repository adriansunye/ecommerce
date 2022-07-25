import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormStyle.css'


function Form(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tw4oukr', 'template_xa2yifb', form.current, 'D3fP7M862KGnni-Tv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div class="contact-us">
    <form ref={form} onSubmit={sendEmail}>
      <h1 class="d-flex justify-content-center">
        Atención al cliente
        </h1>
      <div class="form-group">
        <label>Nombre</label>
        <input type="name" class="form-control" id="user_name" />
      </div>
      <div class="form-group">
        <label>Apellido</label>
        <input type="last-name" class="form-control" id="user_lastname" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" placeholder="name@example.com"/>
      </div>  
      <div class="form-group">
        <label>Mensaje</label>
        <textarea class="form-control" rows="3"/>
        <br></br>  
      </div>
      <div class="form-group d-flex justify-content-center" >
        <button  type="button" class="btn btn-danger">  
           <input class= "buttonSend d-flex align-self-center" value="Enviar" />
        </button>  
      </div>
    </form>
    </div>
  );
};

export default Form;