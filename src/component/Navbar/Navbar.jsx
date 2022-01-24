import React from 'react';
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${style.main}`}>
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-3 p-2" exact to="/">START REACT</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="./portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="./about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="./contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
}

export default Navbar;