import React from "react";
import { Link } from "react-router-dom";
import SDE from "../../../../assets/events/SDE.jpeg";
import CCL from "../../../../assets/events/CCL.jpeg";
import WDE from "../../../../assets/events/wde.png";

const Events = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 text-center sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern
                id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                x="0"
                y="0"
                width=".135"
                height=".30">
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">Events</span>
        </span>{" "}
      </h2>

      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <Link to="/events" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover object-fill w-full h-56 md:h-64 xl:h-80"
              src={SDE}
              alt="SDE Roadmap"
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                SDE Roadmap
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                A complete roadmap and training for SDE. A step by step guide to
                get you ready for the industry and landing your dream job as
                SDE.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/events" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover  object-fill w-full h-56 md:h-64 xl:h-80"
              src={CCL}
              alt="College Chapter Lead"
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                College Chapter Lead
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Become our College Campus Chapter Leader and Get Learning
                opportunities and goodies
              </p>
            </div>
          </div>
        </Link>
        <Link to="/events" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover object-fill w-full h-56 md:h-64 xl:h-80"
              src={WDE}
              alt="Frontend Development Roadmap"
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Frontend Developer Roadmap
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Get yourself ready for the industry as a frontend developer.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/events" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-fill w-full h-56 md:h-64 xl:h-80"
              src={SDE}
              alt="Software Development Engineer"
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Software Development Roadmap
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                A complete roadmap and training for SDE. A step by step guide to
                get you ready for the industry and landing your dream job as
                SDE.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="text-center">
        <Link
          to="/events"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
          View more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12">
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Events;
