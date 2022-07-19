import React from "react"

const Cart = ({ cartItem, addToCart }) => {
    return (
        <div>
            <section className="cart-items">
                <div className="container d_flex">
                    <div className="cart-details">
                        {cartItem.length === 0 && <h1 className="no-items product">No items are adding</h1>}

                        {cartItem.map((item) => {
                            const prodcutQty = item.price * item.qty
                            return (
                                <div className="cart-list product d_flex">
                                    <div className="img">
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>
                                            {item.price}.00 * {item.qty}
                                            <span>${prodcutQty}.00</span>
                                        </h4>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Cart