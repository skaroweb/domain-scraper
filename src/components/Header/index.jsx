import { useState } from "react";
import { NavLink } from "react-router-dom";
import Banner from "../Banner";
import "./index.css";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <header
        id="header"
        className={`d-flex align-items-center header-scrolled ${
          isMobileNavOpen ? "navbar-mobile" : ""
        }`}
      >
        <div className="container-fluid container-xxl d-flex align-items-center">
          <div id="logo" className="me-auto">
            <a href="/#" className="scrollto">
              <img src="/logo.png" alt="" title="" />
            </a>
          </div>

          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              isMobileNavOpen ? "navbar-mobile" : ""
            }`}
          >
            <ul>
              <li>
                <NavLink className="nav-link scrollto" to="/">
                  Newly Added Domains
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/certstream">
                  CertStream Domains
                </NavLink>
              </li>
            </ul>
            <i
              className={`bi ${
                isMobileNavOpen ? "bi-x" : "bi-list"
              } mobile-nav-toggle`}
              onClick={toggleMobileNav}
            ></i>
          </nav>
        </div>
      </header>
      {/* <Banner /> */}
    </>
  );
};
export default Header;
