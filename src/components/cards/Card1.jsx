import React  from "react";
import "./card1.css";

function Card1  ({ productItems, addToCart })  {
    
    
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
                                    <button className="a btn" onClick={() => addToCart(productItems)}>
                                        Añadir
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
