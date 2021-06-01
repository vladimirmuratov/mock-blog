import React from 'react'
import {NavLink} from "react-router-dom";

export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <span className="navbar-brand">React Example</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to='/articles' className="nav-link">Articles</NavLink>
                    <NavLink to='/users' className="nav-link">Users</NavLink>
                </div>
            </div>
        </div>
    </nav>
)