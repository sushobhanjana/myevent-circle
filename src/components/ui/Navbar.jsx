import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import applogo from "../../assets/app_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import auth from "../../services/authServices";

function Navbar() {
  const navigate = useNavigate();
  const { parkName, cityName } = auth.getCurrentUser();

  return (
    <>
      <header className="w-full shadow bg-white py-4">
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
      <div className="w-full bg-white py-6 px-4 md:w-[80%] md:mx-auto">
          <h1 className="text-lg font-semibold">
            <FontAwesomeIcon icon={faLocationDot} /> {parkName},{cityName} 
          </h1>
        </div>
      </header>
    </>
  );
}

export default Navbar;
