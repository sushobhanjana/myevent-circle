import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import applogo from "../../assets/app_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <header className="absolute w-full bg-white shadow-md py-4 top-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center px-2">
            <Link to="/">
              <img src={applogo} alt="Logo" className="h-15 w-40 mr-2" />
            </Link>
          </div>
          <nav className="flex space-x-4 p-2">
            <Link to="/profile" className="text-gray-700 hover:text-blue-500">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
