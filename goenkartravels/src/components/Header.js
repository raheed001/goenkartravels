import React, { useState } from 'react';

function Header() {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarActive(!isSearchBarActive);
    setIsMenuActive(false); // Close the menu when opening the search bar
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    setIsSearchBarActive(false); // Close the search bar when opening the menu
  };

  return (
    <div>
      <header className="header section" data-header="">
        <div className="container">
          <a href="#" className="logo">
            <img
              src="./images/logo.png"
              width={229}
              height={40}
              alt="Goenkar Travels logo"
            />
          </a>
          <nav className={`navbar ${isMenuActive ? 'active' : ''}`} data-navbar="">
            <ul className="navbar-list">
              <li className="navbar-item">
                <a
                  href="#"
                  className="navbar-link hover:underline"
                  data-nav-link=""
                >
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a
                  href="#"
                  className="navbar-link hover:underline"
                  data-nav-link=""
                >
                  Recent Post
                </a>
              </li>
              <li className="navbar-item">
                <a
                  href="#"
                  className="navbar-link hover:underline"
                  data-nav-link=""
                >
                  Membership
                </a>
              </li>
            </ul>
          </nav>
          <div className="wrapper">
            <button
              className={`search-btn ${isSearchBarActive ? 'active' : ''}`}
              aria-label="search"
              data-search-toggler=""
              onClick={toggleSearchBar}
            >
              <ion-icon name="search-outline" aria-hidden="true" />
              <span className="span">Search</span>
            </button>

            <button
              className="nav-toggle-btn"
              aria-label="toggle menu"
              data-nav-toggler=""
              onClick={toggleMenu}
            >
              <span className="span one" />
              <span className="span two" />
              <span className="span three" />
            </button>

            <a href="#" className="btn">
              Join
            </a>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div
        className={`search-bar ${isSearchBarActive ? 'active' : ''}`}
        data-search-bar=""
      >
        <div className="input-wrapper">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="input-field"
          />
          <button
            className="search-close-btn"
            aria-label="close search bar"
            data-search-toggler=""
            onClick={toggleSearchBar}
          >
            <ion-icon name="close-outline" aria-hidden="true" />
          </button>
        </div>
        <p className="search-bar-text">Please enter at least 3 characters</p>
      </div>
      <div
        className={`overlay ${isSearchBarActive ? 'active' : ''}`}
        data-overlay=""
        data-search-toggler=""
        onClick={toggleSearchBar}
      />
    </div>
  );
}

export default Header;
