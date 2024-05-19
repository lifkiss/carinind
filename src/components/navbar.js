import React from "react";
import { Helmet } from "react-helmet";

function Navbar() {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="navbar.css" />
      </Helmet>
      <header className="header-nav">
        <nav className="nav-all">
          <ul class="nav-ul">
            <input type="checkbox" id="check" />
            <span class="menu-all">
              <li className="nav-li">
                <a className="nav-a" href="/">
                  Home
                </a>
              </li>
              <li className="nav-li">
                <a className="nav-a" href="/tour">
                  Destinasi
                </a>
              </li>
              <li className="nav-li">
                <a className="nav-a" href="/culinary">
                  Kuliner
                </a>
              </li>
              <li className="nav-li">
                <a className="nav-a" href="/about-us">
                  About Us
                </a>
              </li>
              <label for="check" class="close-menu">
                <i class="fas fa-times"></i>
              </label>
            </span>
            <label for="check" class="open-menu">
              <i class="fas fa-bars"></i>
            </label>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
