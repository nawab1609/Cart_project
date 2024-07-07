import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../Images/logo.jpg";
export default function Navbar({size}) {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light navbar-light py-3">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              src={logo}
              alt="error"
              className="rounded-circle"
              width="40px"
            />{" "}
            <span className="ms-2 fw-bold fs-2">Elite store</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav">
              <li class="nav-item mx-5">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item mx-5">
                <Link class="nav-link" to="/bakery">
                  Bakery
                </Link>
              </li>
              <li class="nav-item mx-5">
                <Link class="nav-link" to="/drinks">
                  Drinks
                </Link>
              </li>
              <li class="nav-item dropdown mx-5">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Beauty
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/makeup">
                      MakeUp
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/perfume">
                      Perfumes
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-5">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Fashion
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/earRings">
                      Ear Rings
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/rings">
                      Rings
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-5">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Bags
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/boysbag">
                      Boys
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/girlsbag">
                      Girls
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-5">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Snacks
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/chips">
                      Chips
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/candy">
                      Candy
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/cart">
                  <button className="btn btn-danger">Cart <span className="badge bg-warning text-dark">{size}</span></button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
