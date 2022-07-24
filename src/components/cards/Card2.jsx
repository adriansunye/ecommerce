import React, {useState} from "react";
import "./card2.css";
import { MdDeleteForever } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";

const Card2 = ({ cartItem, addToCart, productItems }) => {
    const [count,setCount] = useState(1)
    return (
        <div className="G-container">
            <div>
                <h1><b>Cart</b></h1>
                <h7>Delivery in 08035</h7>
                <h6><b>SORT PRODUCTS AS THEY WERE ADDED</b></h6>
            </div>
            <div>

            {cartItem.length === 0 && <h1 className="no-items product">No items are adding</h1>}
            

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
                        </div>
                        <div className="cont-btn">
                            <h5 className="cont-btn-text">{count} ud.</h5>
                            <div className="cont-btn-click">
                                <a href="" className="btn-1"><BiMinus className="btn-del" onClick={() =>setCount(count-1)}/></a>
                                <a href="" className="btn-2"><GrAdd className="btn-add" onClick={() =>setCount(count+1) && addToCart(productItems)} /></a>
                            </div>
                        </div>
                    </div>
                )
            })}</div>
        </div>

    )
}

export default Card2
