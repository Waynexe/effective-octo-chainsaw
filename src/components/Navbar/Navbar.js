import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="topnav">
        <nav className="nav">
          <a href="#about">
            About
          </a>
          <a href="#projects">
            Projects
          </a>
          <a href="#skills">
            Skills
          </a>
          <a
            href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;
