import React from 'react';
import { Link } from 'react-router-dom';

var link = {
    color: "#fff",
    fontStyle: "bold",
    textDecoration: "none",
    margin: "5px",
    backgroundColor: "rgba(0, 0, 255, 0.2)",
    borderRadius: "3px",
    padding: "3px"
}

const HeaderNav = () => {
    return <div>
        <nav style={{backgroundColor: "darkgrey", padding: "15px"}}>
            <h3 style={{color: "white"}}>abra weather app</h3>
            <div style={{float: "right", marginTop: "-35px"}}>
                <Link style={link} to="/">Main</Link>
                <Link style={link} to="/Favorites">Favorites</Link>
            </div>
        </nav>
    </div>
}

export default HeaderNav;