import logo from "../assets/udm-logo.jpg"
import React from "react";

const Footer = () => {
  return (
    <footer className="body-font text-gray-600 ">
      <div className="container mx-auto flex flex-col items-center px-5 py-4 sm:flex-row">
        <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
          <img src={logo} alt="UDM Logo" className="h-14 w-14 rounded-full p-2"/>
          <span className="ml-3 text-xl">UDM - OJT</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © {new Date().getFullYear()} —
          <a
            href="https://udmwebsite.udm.edu.ph/"
            className="ml-1 text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            @UDM
          </a>
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://www.facebook.com/udm1995"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
