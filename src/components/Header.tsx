import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex items-center justify-between fixed w-screen bg-[#000000] p-4">
      <Link to="/" className="flex justify-center items-center mr-4">
        <img
          className="h-12 w-12"
          src="https://i.ibb.co/s9Qys2j/logo.png"
          alt=""
        />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Header;
