import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="heading">
                <h1>React Blog</h1>
            </div>
            <Link to="/createpost">
            <button className="button">Create Post</button>
            </Link>
            
        </div>
    )
}

export default Header;