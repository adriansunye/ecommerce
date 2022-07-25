import React, { useState, useEffect } from 'react';
import '../products/products.scss';








export function Products() {

    let giveMeAccessKey = async() => {

        let res = await fetch('https://api.kroger.com/v1/connect/oauth2/token', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + 'bmV3cGlucG9uLTZkNjdkOGNiNTRjZTdmMmVhN2ZlMTg4MDUzMDMzNzI1MzU5NDA5MzcyODg1MjY5NjgzNjpzYlhnakVQNjRXUTlDX2JNOVMybjhYUDV2YmFZRWxIekFCNEJXOGRm'
            },
            body: "grant_type=client_credentials&scope=product.compact",
        })
        .then(response => response.json())
        console.log(res)
            // .then(data => {
            //     console.log('Success:', data);
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            // });
            return res.access_token;
        }
    giveMeAccessKey();

// in process
    // let getProducts = async() => {
    //     let accessToken = await giveMeAccessKey()
    //     let productsUrl = `${"https://api.kroger.com"}/v1/products?filter.term=${"milk"}`;

    //     let productsResponse = await fetch(productsUrl, {
    //         method: "GET",
    //         cache: "no-cache",
    //         headers: {
    //             Authorization: `bearer ${accessToken}`,
    //             "Content-Type": "application/json; charset=utf-8"
    //         }
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .catch(error => console.log(error))
            
    //     })
    //     }
        
    return (
        <div className='container_products'>
                
        </div>
    )
}
