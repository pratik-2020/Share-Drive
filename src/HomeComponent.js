import { Button } from '@material-ui/core';
import React from 'react'
import { NavLink } from 'react-router-dom';
import './HomeComponent.css';
function HomeComponent() {
    return (
        <div className="home__compionent">
            <h1 className="home__title">My : Drive</h1>
            <NavLink className="link2" to="/share">
                 Share
            </NavLink>
            <NavLink className="link3" to="/recieve">
                <span className="fa-fa-home fa-lg"></span> Recieve
            </NavLink>
        </div>
    )
}

export default HomeComponent;