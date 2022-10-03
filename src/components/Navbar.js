import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      {/* <div className="position-absolute">
        <Link className="navbar-brand" to="/">
          <img src="/utils/su_logo.png" width="56" height="56" alt="SU logo" />
        </Link>
      </div> */}
      {/* <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> */}
      <div
        className="navbar-collapse justify-content-around"
        id="navbarSupportedContent"
      >
        <ul className="nav justify-content-center align-items-center">
          <li></li>
          <li className="nav-item">
            <Link className="nav-link active link-dark" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle link-dark"
              data-bs-toggle="dropdown"
              to="#"
              role="button"
              aria-expanded="false"
            >
              News
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item link-dark" to="/statements">
                  Statements
                </Link>
              </li>
              <li>
                <Link className="dropdown-item link-dark" to="/recent-news">
                  Recent News
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle link-dark"
              data-bs-toggle="dropdown"
              to="#"
              role="button"
              aria-expanded="false"
            >
              spring revolution
            </Link>
            <ul className="dropdown-menu link-dark">
              <li>
                <Link className="dropdown-item link-dark" to="/strikes">
                  ground movements / strikes
                </Link>
              </li>
              <li>
                <Link className="dropdown-item link-dark" to="/cdm">
                  civil disobedience movement (cdm) support
                </Link>
              </li>
              <li>
                <Link className="dropdown-item link-dark" to="/idp">
                  idp support
                </Link>
              </li>
              <li>
                <Link className="dropdown-item link-dark" to="supports">
                  supporting revolutionary comrades
                </Link>
              </li>
              <li>
                <Link className="dropdown-item link-dark" to="spring-libraries">
                  spring libraries
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item link-dark"
                  to="educational-support"
                >
                  educational support for children
                </Link>
              </li>
              <li>
                <Link className="dropdown-item link-dark" to="donate-food">
                  food donation
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle link-dark"
              data-bs-toggle="dropdown"
              to="#"
              role="button"
              aria-expanded="false"
            >
              Students' Association
            </Link>

            <ul className="dropdown-menu">
              <li>
                <Link
                  className="dropdown-item link-dark"
                  to="student-association"
                >
                  Students' Association
                </Link>
              </li>
              <li>
                <Link className="dropdown-item link-dark" to="clubs">
                  Clubs
                </Link>
              </li>
              <li>
                <Link className="dropdown-item link-dark" to="other-clubs">
                  Others
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle link-dark"
              data-bs-toggle="dropdown"
              to="#"
              role="button"
              aria-expanded="false"
            >
              University Affairs
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item link-dark" to="masterplan">
                  Master Plan
                </Link>
              </li>
              <li>
                <Link className="dropdown-item link-dark" to="autonomy">
                  Autonomy and Charter
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-dark" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item link-dark">
            <Link className="nav-link link-dark" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
