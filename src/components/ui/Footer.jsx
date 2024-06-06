import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faAddressCard,faQrcode } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md">
        <div className="max-w-md mx-auto flex justify-around items-center py-4">
          <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <FontAwesomeIcon icon={faHouse} size="lg" />
          </Link>
          
          <Link to="/scanner" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faQrcode} size="2xl"/>
          </Link>
          <Link to="/missing-reports" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faAddressCard} size="lg" />
          </Link>
        </div>
      </footer>
    )
}

export default Footer;