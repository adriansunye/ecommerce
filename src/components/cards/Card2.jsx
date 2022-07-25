import React, { useState } from "react";
import "./card2.css";
import { MdDeleteForever } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";

const Card2 = ({ cartItem, addToCart, productItems }) => {
    const [count, setCount] = useState(1)
    return (
        <div className="G-container">
            <div>
                <h1><b>Cart</b></h1>
                <h7>Envío a CP. 08035</h7>
                <h6><b>Productos agregados</b></h6>
            </div>
            <div>

                {cartItem.length === 0 && <h1 className="no-items product">No hayproductos en el carrito</h1>}


                {cartItem.map((item) => {
                    const prodcutQty = item.price * item.qty
                    return (
                        <div className="container">
                            <div className="cont-img">
                                <img src={item.cover} alt="" />
                            </div>
                            <div className="cont-text">
                                <h3 className="cont-text-1">{item.name}</h3>
                                <h3 className="cont-text-2"><b>{item.price} EUR*</b></h3>
                                <h4>
                                    {item.price}.00 Euros
                                    * {item.qty}
                                    <span>${prodcutQty}.00</span>
                                </h4>
                            </div>
                            <div className="cont-btn">
                                <h5 className="cont-btn-text">{count} ud.</h5>
                                <div className="cont-btn-click">
                                    <a href="#" className="btn-1"><BiMinus className="btn-del" onClick={() => setCount(count - 1)} /></a>
                                    <a href="#" className="btn-2"><GrAdd className="btn-add" onClick={() => addToCart(productItems)} /></a>
                                </div>
                            </div>
                        </div>
                    )
                })}</div>
        </div>

    )
}

export default Card2
