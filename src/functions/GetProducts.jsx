import {useState, useEffect} from 'react';
import GetToken from './GetToken';

function GetProducts(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://api.kroger.com/v1/products?filter.term=milk"+ props.query +"&filter.locationId=01400441", {
            headers: {
              Authorization: "Bearer "+ <GetToken/>,
              "Cache-Control": "no-cache"
            }
          }).then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, )
    console.log(GetProducts)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return ( 
        items
      );
    }
  }

  export default GetProducts;