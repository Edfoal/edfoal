import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import logo from "../assets/components/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let { id } = useParams();
  return (
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between ">
        <div class="flex md:fixed top-0 right-0 w-full bg-white z-10 pt-4 items-center sm:px-4 shadow-sm">
          <Link
            to="/"
            aria-label="Home"
            title="Home"
            class="inline-flex items-center mr-8">
            <img
              src={logo}
              alt="Edfoal Logo"
              className="w-full h-16 dark:text-violet-400"></img>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex ">
            <li className="flex">
              <Link
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-b-1 hover:border-b-violet-400 ">
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/community"
                className={
                  id === "/community"
                    ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-500 dark:border-violet-500"
                    : "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  hover:border-b-1 hover:border-b-violet-400"
                }>
                Community
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/roadmaps"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-b-1 hover:border-b-violet-400 ">
                Roadmaps
              </Link>
            </li>
            <li className="flex">
              <Link
                to="#about-us"
                className="flex items-center px-4 -mb-1
                border-b-2 dark:border-transparent hover:border-b-1
                hover:border-b-violet-400 ">
                {" "}
                About Us
              </Link>
            </li>
            <li className="flex">
              <Link
                to="#our-partners"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-b-1 hover:border-b-violet-400 ">
                Partners
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/events"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-b-1 hover:border-b-violet-400 ">
                Events
              </Link>
            </li>
          </ul>
          <ul class="flex items-center ml-28 hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/signin"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400">
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50"
            onClick={() => setIsMenuOpen(true)}>
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div class="absolute top-0 left-0 z-10 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div class="-mx-8">
                    <Link
                      to="/"
                      aria-label="Home"
                      title="Home"
                      class="inline-flex items-center">
                      <img src={logo} class="w-full h-16" alt="Edfoal Logo" />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}>
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/community"
                        aria-label="Our Community"
                        title="Our Community"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400">
                        Community
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/roadmaps"
                        aria-label="Roadmaps"
                        title="Roadmaps"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400">
                        Roadmaps
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/events"
                        aria-label="Events"
                        title="Events"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400">
                        Events
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/signin"
                        aria-label="Sign in"
                        title="Sign in"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400">
                        Sign in
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up">
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
