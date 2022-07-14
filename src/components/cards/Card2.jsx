import React from "react";
import "./card2.css";

const Card2 = () => {
    return (
        <div className="G-container">
            <div className="container">
                <div className="cont-img">
                    <img src="./images/garrafa5L.png" alt="" />
                </div>
                <div className="cont-text">
                    <h3 className="cont-text-1">The 1982 vintage for Lafite Rothschild</h3>
                    <h3 className="cont-text-2"><b>E47 EUR*</b></h3>
                </div>
                <div className="cont-btn">
                    <h5 className="cont-btn-text">1 unit</h5>
                    <div className="cont-btn-click">
                        <a href="" className="btn-1">D</a>
                        <a href="" className="btn-2">+</a>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Card2
