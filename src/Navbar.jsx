import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar" data-navbar>
      <div className="navbar-top">
        <a href="#" className="logo">
          <img src="logo-blue.svg" alt="Tourly logo" />
        </a>

        <button
          className="nav-close-btn"
          aria-label="Close Menu"
          data-nav-close-btn
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      <ul className="navbar-list">
        <li>
          <a href="#home" className="navbar-link" data-nav-link>
            home
          </a>
        </li>

        <li>
          <a href="#" className="navbar-link" data-nav-link>
            about us
          </a>
        </li>

        <li>
          <a href="#destination" className="navbar-link" data-nav-link>
            destination
          </a>
        </li>

        <li>
          <a href="#package" className="navbar-link" data-nav-link>
            cities
          </a>
        </li>

        <li>
          <a href="#gallery" className="navbar-link" data-nav-link>
            gallery
          </a>
        </li>

        <li>
          <a href="#contact" className="navbar-link" data-nav-link>
            contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
