import React from "react";
import logo from "../assets/edfoal-logo.png";

function Navbar() {
  return (
    <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2">
          <img
            src={logo}
            alt="Edfoal Logo"
            className="w-16 h-16 dark:text-violet-400"></img>
          <span className="ml-3 text-4xl font-bold text-blue-700 font-mono">
            Edfoal
          </span>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex ">
          <li className="flex">
            <a
              href="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">
              Home
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  hover:border-b-1 hover:border-b-violet-400 ">
              Community
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-b-1 hover:border-b-violet-400 ">
              Roadmaps
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-b-1 hover:border-b-violet-400 ">
              About Us
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-b-1 hover:border-b-violet-400 ">
              Partners
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-b-1 hover:border-b-violet-400 ">
              Events
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded hover:shadow-xl">
            Sign in
          </button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900 hover:drop-shadow-xl">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
