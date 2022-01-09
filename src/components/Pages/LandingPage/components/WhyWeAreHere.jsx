import React from "react";
import image from "../../../../assets/LandingPage/image1.svg";
// import image from "../../../../assets/LandingPage/image2.svg";
// import image from "../../../../assets/LandingPage/image3.svg";
// import image from "../../../../assets/LandingPage/hero3.svg";

const WhyWeAreHere = () => {
  return (
    <section class="text-gray-600 body-font" id="about-us">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center mt-20">
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
          <span className="relative">Why Are We Here</span>
        </span>{" "}
      </h2>
      <div class="container px-5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="object-cover object-center h-full w-full"
            src={image}
          />
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-medium ">
                We Edfoalians are here to reduce the gap
                <br />
                between what is required to pursue
                <br />a desirable career and what our system delivers!!{" "}
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">
                We at EdFoal help people achieve their <br />
                career goals by building a personalized <br />
                roadmap consisting of learning resources, <br />
                mentors, and step-wise targets.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreHere;
