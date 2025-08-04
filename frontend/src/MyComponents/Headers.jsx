import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header({ title, searchBar }) {
  const [firstLetter, setFirstLetter] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    try {
      const storedName = localStorage.getItem("firstname") || "";
      setFirstname(storedName);
      const storedEmail = localStorage.getItem("email") || "";
      setEmail(storedEmail);
      if (storedName.trim().length > 0) {
        setFirstLetter(storedName[0].toUpperCase());
        console.log("First letter:", storedName[0].toUpperCase());
      }
    } catch (err) {
      console.log(`error: ${err}`);
    }
  }, []);

  return (
    <div>
      <nav className="bg-blue-950 flex justify-between items-center h-12 px-4">
        {searchBar ? (
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="border p-1 bg-white rounded"
            />
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Search
            </button>
          </form>
        ) : (
          <span style={{ fontSize: "14px", color: "#999" }}>
            SearchBar is disabled
          </span>
        )}
        <div className="flex items-center gap-2">
          <div className="bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold cursor-pointer">
            {firstLetter}
          </div>
          <div className="flex flex-col text-white">
            <span>{firstname}</span>
            <span>{email} </span>
          </div>
        </div>
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
