import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src="logo.png"
                  alt="IndiaTour logo"
                  style={{ width: "120px" }}
                />
                <img
                  src="favi.png"
                  alt="IndiaTour logo"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            </a>

            <p className="footer-text">
              Join us as we celebrate the essence of pilgrimage, inviting you to
              explore the timeless paths of devotion and discovery. Remember,
              your journey is not just about the destination, it’s about the
              memories you create along the way.
            </p>
          </div>

          <div className="footer-contact">
            <h4 className="contact-title">Contact Us</h4>

            <p className="contact-text">Feel free to contact and reach us !!</p>

            <ul>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>

                <a href="tel:+01123456790" className="contact-link">
                +91 9849324095
                </a>
              </li>

              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>

                <a href="mailto:info.tourly.com" className="contact-link">
                  info.indiatour.com
                </a>
              </li>

              <li className="contact-item">
                <ion-icon name="location-outline"></ion-icon>

                <address>22 Noida, India</address>
              </li>
            </ul>
          </div>

          <div className="footer-form">
            <p className="form-text">
              Subscribe our newsletter for more update & news !!
            </p>

            <form action="" className="form-wrapper">
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Enter Your Email"
                required
              />

              <button type="submit" className="btn btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 <a href="">IndiaTour</a>. All rights reserved
          </p>

          <ul className="footer-bottom-list">
            <li>
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">
                Term & Condition
              </a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
