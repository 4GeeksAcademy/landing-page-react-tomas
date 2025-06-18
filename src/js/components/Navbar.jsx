import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand ms-5 text-white" href="#">Start Bootstrap</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-gray">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;