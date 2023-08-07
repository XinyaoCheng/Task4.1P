import React from 'react'
import "./styles.css";

function NavHeader() {
    return (
        <nav className="navbar">
            <h4 className="compmay_name">DevLink Marketplace</h4>
            <ul className="nav_items">
                <li>
                    <a href="#">Find DEV</a>
                </li>
                <li>
                    <a href="#">Find Jobs</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">Create Account</a>
                </li>
            </ul>
        </nav>
    )
}
export default NavHeader;
