import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards({ children }) {
    return (
        <div className="cards">
            {children}
        </div>
    );
}

export default Cards;