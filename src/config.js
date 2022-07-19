
let getToken = async() =>{
    let secret_code = "ZGlsb25zZWNvbW1lcmNlLWJkNzQwMzEzMTY3NjE1ZmE3NWI1NDQ5ZWY4NDZkZmE5MTI5MDE2ODU5MjcxODM5NTI6XzJzNVhNaFYxZHIwWmJmWmZNTWQyVj12Z1BpUVlXdzREY0RpdWJ0eA=="
    let res = await fetch('https://api.kroger.com/v1/connect/oauth2/token',{
        method: 'POST   ',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic' + secret_code
    },
    body:"grant_type=client_credentials&scope-product.compact",
    })
    .then(response => response.json())
    return res.access.token;
    console.log(res);

}
getToken()

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const oauth2BaseUrl = process.env.REACT_APP_OAUTH2_BASE_URL;
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUrl = process.env.REACT_APP_REDIRECT_URL;

export default { apiBaseUrl, oauth2BaseUrl, clientId, redirectUrl };