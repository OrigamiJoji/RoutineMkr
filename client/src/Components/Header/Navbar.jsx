import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div className="header-container">
                <div className="header-item">
                    <Link to="/">
                        <img
                            src={require("../../assets/clock.png")}
                            height={25}
                        />
                        <h1>RoutineMkr</h1>
                    </Link>
                </div>
                <div className="header-item">
                    <Link to="/login">Login</Link>
                </div>
                <div className="header-item">
                    <Link to="/profile">Profile</Link>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Navbar;
