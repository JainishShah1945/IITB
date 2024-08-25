import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid gap-lg-5">
        <div
          className="navbar fs-2 fw-bold ms-lg-5 me-lg-5 hihi"
          to="#"
          style={{ letterSpacing: "1px" }}
        >
          Splash Academy
        </div>
        <form className="d-flex ms-lg-5 me-lg-auto">
          <input
            className="form-control w-75 me-lg-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse
        
        
        
        "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 me-lg-auto">
            <li className="nav-item">
              <Link
                className="nav-link active fs-4 fw-bold"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4 fw-bold" to="/courses">
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-4 fw-bold" to="/instance">
                Instance
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4 fw-bold" to="#">
                Orders
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle  fs-5 fw-bold"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Session
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="#">
                    Live class
                  </Link>
                </li>
                <hr className="dropdown-divider"></hr>
                <li>
                  <Link className="dropdown-item" to="#">
                    Past Lectures
                  </Link>
                </li>
              </ul>
            </li>
            <div>
              <button className="btn btn-danger ms-lg-5 fs-5">Logout</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
