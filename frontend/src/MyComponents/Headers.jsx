import React from "react";
import PropTypes from "prop-types";
import "../styles/Headers.css";
import { Link } from "react-router-dom";

export default function Header({ title, searchBar }) {
  try {
    const firstname = localStorage.getItem("firstname");
    const letters = firstname.split("");
    const firstletter = letters[0];
    console.log(`firstletter of firstname: ${firstletter}`);
  } catch (err) {
    console.log(`error: ${err}`);
  }
  return (
    <div>
      <nav className="navbar">
        <Link to="#" className="navbar-brand">
          {title}
        </Link>
        <div className="nav-links">
          <Link to="/todoiest" className="nav-link">
            Home
          </Link>
          <Link to="#" className="nav-link">
            About
          </Link>
          <Link to="/todoiest/addtodo" className="nav-link">
            Add Todo
          </Link>
          <Link to="/todoiest/signup" className="nav-link">
            Signup
          </Link>
        </div>
        <button></button>
        {searchBar ? (
          <form className="search-form">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        ) : (
          <span style={{ fontSize: "14px", color: "#999" }}>
            SearchBar is disabled
          </span>
        )}
      </nav>
    </div>
  );
}

Header.defaultProps = {
  title: "ToDo-List",
  searchBar: false,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
