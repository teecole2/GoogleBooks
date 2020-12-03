import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchArea({ children }) {
    return (
        <div className="search-area">
            {children}
        </div>
    );
}

export default SearchArea;