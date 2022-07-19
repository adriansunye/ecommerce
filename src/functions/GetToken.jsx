import {useState, useEffect} from 'react';

function GetToken(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [token, setToken] = useState([]);
    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.kroger.com/v1/connect/oauth2/token", {
        body: "grant_type=client_credentials&scope=" + props.scope,
        headers: {
          Authorization: "Basic ZS1jb21tZXJjZS1jNTliZGE4NzEyY2YwYmRiYWFjNjM4ZDQ5N2QzZjM5YjExMDA5OTA4OTQ1OTM3MzgzNzU6bEE5SDFOZGdlbjd5bkUydERWTHVQOVA3OFFFQUMwdEgyeHpGMHUzUQ==",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
      }).then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setToken(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return ( 
        token.access_token
      );
    }
  }

  export default GetToken;