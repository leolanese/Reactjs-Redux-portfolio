import React from "react";
import { Link } from "react-router-dom";

export const Header = props => {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0">
      <div className="container">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/specialisation" className="nav-link">
                Specialisation
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/socialmedia" className="nav-link">
                Social Media
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
