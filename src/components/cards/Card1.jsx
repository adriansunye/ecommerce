import React, { useState } from "react";
import "./card1.css";
import {GrAdd} from "react-icons/gr"

const Card1 = ({ productItems, addToCart }) => {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            {
                productItems.map((productItems) => {
                    return (
                        <div className="container">

                            <div className="card">
                                <div className="row-img">
                                    <img src={productItems.cover} className="card-img-top" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">{productItems.name}</h5>
                                    <p className="card-text1">1 ud.</p>
                                    <p className="card-text2"><b>{productItems.price}e</b>/ud.</p>
                                    <button className="btn" onClick={() => addToCart(productItems)}>
                                        <GrAdd className="fa fa-plus" />
                                    </button>
                                    
                                </div>
                            </div>

                        </div>
                    )
                })}
        </div>

    )
}

export default Card1
