import React from "react";
import PropTypes from "prop-types";
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
      <nav className="bg-red-100 flex justify-between">
        <Link to="#" className="">
          {title}
        </Link>
        <div className="">
          <Link to="/todoiest" className="">
            Home
          </Link>
          <Link to="#" className="">
            About
          </Link>
          <Link to="/todoiest/addtodo" className="">
            Add Todo
          </Link>
          <Link to="/todoiest/signup" className="">
            Signup
          </Link>
        </div>
        {searchBar ? (
          <form className="">
            <input type="text" placeholder="Search..." className="" />
            <button type="submit" className="">
              Search
            </button>
          </form>
        ) : (
          <span style={{ fontSize: "14px", color: "#999" }}>
            SearchBar is disabled
          </span>
        )}
      </nav>{" "}
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
