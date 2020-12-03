import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Jumbotron({ children }) {
    return (
        <div className="jumbotron">
            {children}
        </div>
    );
}

export default Jumbotron;