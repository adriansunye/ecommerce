import React, { useState } from "react";
import "./card2.css";
import { MdDeleteForever } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";

const Card2 = ({ cartItem, addToCart, decreaseQty }) => {
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
    // const [count, setCount] = useState(1)
    return (
        <div className="G-container">
            <div>
                <h1><b>Cart</b></h1>
                <h6>Envío a CP. 08035</h6>
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
                                <h3 className="cont-text-2"><b>{item.price} €*</b></h3>
                                <h4>
                                    {item.price}.00 €
                                    * {item.qty}
                                    
                                </h4>
                                <span>€{prodcutQty}.00</span>
                            </div>
                            <div className="cont-btn">
                                <h5 className="cont-btn-text">{item.qty} ud.</h5>
                                <div className="cont-btn-click">
                                    <a href="#" className="btn-1"><BiMinus className="btn-del" onClick={() => decreaseQty(item)} /></a>
                                    <a href="#" className="btn-2"><GrAdd className="btn-add" onClick={() => addToCart(item)} /></a>
                                </div>
                            </div>

                        </div>
                    )
                })}
                <div className="cart-item-price">
                    <div className="cart-total product">
                        <h2>Resumen de Compra</h2>
                        <div className="d_flex">
                            <h4>Precio total</h4>
                            <h3>€{totalPrice}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card2
