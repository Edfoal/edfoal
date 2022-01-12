import React from "react";
import concirrus from "../../../../assets/Partners/Concirrus-logo.svg";
import cvt from "../../../../assets/Partners/CVT.svg";
import yomatech from "../../../../assets/Partners/yomatechnologies.png";

const Partners = () => {
  return (
    <div id="our-partners">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-5xl text-5xl font-bold title-font mb-4 text-gray-900">
              Our Partners
            </h1>
          </div>
          <div class="flex flex-wrap md:-m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative  -mt-20 md:mt-0">
                <img
                  alt="gallery"
                  class="absolute inset-y-8 w-1200 h-720 object-cover object-center"
                  // src="https://dummyimage.com/600x360"
                  src={cvt}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 z-0">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Core Value Technologies
                  </h1>
                  <p class="leading-relaxed">
                    Bridging the gaps between digital experiences
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4   -mt-20 md:mt-0">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute -inset-y-1/4 w-1200 h-720 object-cover object-center fill-blue-400"
                  // src="https://dummyimage.com/601x361"
                  src={concirrus}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 z-0">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Concirrus.AI
                  </h1>
                  <p class="leading-relaxed">
                    Concirrus.AI, partner of choice for the IoT powered
                    commercial insurance market - AI, data, analytics, risk
                    modelling, tech and more...
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4   -mt-20 md:mt-0">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-y-8 inset-x-20 w-603 h-363 object-cover object-center place-content-between"
                  // src="https://dummyimage.com/603x363"
                  src={yomatech}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 z-0">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Yoma Technologies
                  </h1>
                  <p class="leading-relaxed">
                    Delivering enterprise IT solutions that make a difference
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
