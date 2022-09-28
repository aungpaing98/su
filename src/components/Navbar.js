import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link active" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          to="#"
          role="button"
          aria-expanded="false"
        >
          News
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="#">
              Statements
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Recent News
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          to="#"
          role="button"
          aria-expanded="false"
        >
          spring revolution
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="#">
              ground movements / strikes
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              civil disobedience movement (cdm) support
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              idp support
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              supporting revolutionary comrades
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              spring libraries
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              educational support for children
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              food donation
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          to="#"
          role="button"
          aria-expanded="false"
        >
          Students' Association
        </Link>

        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="#">
              Students' Association
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Clubs
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Others
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          to="#"
          role="button"
          aria-expanded="false"
        >
          University Affairs
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="#">
              Master Plan
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Autonomy and Charter
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
