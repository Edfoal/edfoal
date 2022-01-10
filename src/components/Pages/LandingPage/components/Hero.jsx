import React from "react";
import image from "../../../../assets/LandingPage/hero1.svg";
// import image from "../../../../assets/LandingPage/hero2.svg";
// import image from "../../../../assets/LandingPage/hero3.svg";

import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full -mt-2 rounded shadow-lg lg:rounded-none shadow-none sm:h-56 lg:h-full"
          src={image}
          alt="hero image"
        />
      </div>
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl mt-20 text-center sm:text-left">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
              <div class="-mb-8">OUR VISION,</div>
              <br />
              YOUR SUCCESS
            </h2>
            <p className="text-medium text-3xl text-gray-700 md:text-lg">
              Building the path to your success.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
              Join Now
            </Link>
            <Link
              to="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
