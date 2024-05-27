import React from "react";
import "../index.css";

export default function Navbar() {
    return (
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              Association for Computing Machinery
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#about" className="mr-5 hover:text-white">
              About
            </a>
            <a href="#officers" className="mr-5 hover:text-white">
              Officers
            </a>
            <a href="#contact" className="mr-5 hover:text-white">
              Contact
            </a>
            <a href="#events" className="mr-5 hover:text-white">
              Upcoming Events
            </a>
          </nav>
        </div>
      </header>
    );
  }