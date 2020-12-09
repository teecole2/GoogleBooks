import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar({ children }) {
    return (
        <div className="search-bar">
            {children}
        </div>
    );
}

export default SearchBar;