import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header" data-header>
      <div className="overlay" data-overlay></div>

      <div className="header-top">
        <div className="container">
          <a href="#" className="helpline-box">
            <div className="icon-box">
              <ion-icon name="call-outline"></ion-icon>
            </div>

            <div className="wrapper">
              <p className="helpline-title">For Further Inquires :</p>

              <p className="helpline-number">+91 9849324095</p>
            </div>
          </a>

          <a href="#" className="logo">
            <img src="logo.png" alt="logo" width={80}/>
          </a>

          <div className="header-btn-group">
            <button className="search-btn" aria-label="Search">
              <ion-icon name="search"></ion-icon>
            </button>

            <button
              className="nav-open-btn"
              aria-label="Open Menu"
              data-nav-open-btn
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>

          

          <Navbar/>


          <button className="btn btn-primary">Visit Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
