import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1>Divyajyoti Bose</h1>
        <nav>
          <ul>
            <li><a href="#AboutMe">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;