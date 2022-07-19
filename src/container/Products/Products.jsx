import react from 'react'
import axios from 'axios';
import '../Products/.env'
const products = () =>{
    const peticion = axios.get ('https://api.kroger.com/v1/connect/oauth2',{
      params:{
      client_id:'comerse-9d90fd2a34db00c9b84e39c0f23d9a924065336273297588816',
      client_secret:'OZePju4UlZdAIIl9TZZhfBKSCUbfQPEzaIGEqf0i',
      redirect_uri:'http://localhost:3000',
      headers: {'Authorization': 'basic '+ process.env.REACT_APP_SECRETTING}
     }

    })
    console.log(peticion)

}

export default products;

