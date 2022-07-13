import React from "react";
import "./cardprod.css"



const Card = () => {
    return (
        <div className="container">
            <div className="card" >
                <img src="/images/garrafa5L.png" className="card-img" />
                    
                    <div className="card-body">
                        <h5 className="card-title">Card description</h5>
                        <p className="card-text">1 ud.</p>
                        <p className="card-text">6.5e/ud.</p>
                        <a href="#" className="btn">Añadir</a>
                    </div>
            </div>
            <div className="card" >
                <img src="/images/garrafa5L.png" className="card-img" />
                    
                    <div className="card-body">
                        <h5 className="card-title">Card description</h5>
                        <p className="card-text">1 ud.</p>
                        <p className="card-text">6.5e/ud.</p>
                        <a href="#" className="btn">Añadir</a>
                    </div>
            </div>
        </div>
    );
}

export default Card

