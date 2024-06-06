import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faAddressCard,faQrcode } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md">
        <div className="max-w-md mx-auto flex justify-around items-center py-4">
          <a href="#" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <FontAwesomeIcon icon={faHouse} size="lg" />
          </a>
          
          <a href="#" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faQrcode} size="2xl"/>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
          <FontAwesomeIcon icon={faAddressCard} size="lg" />
          </a>
        </div>
      </footer>
    )
}

export default Footer;