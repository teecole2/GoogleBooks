import React from "react";
import "./style.css";

function SearchArea({ children }) {
    return (
        <div className="search-area">
            {children}
        </div>
    );
}

export default SearchArea;