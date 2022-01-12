import React from "react";
import Team from "./components/Team";
// import Placement from "./components/Placement";
import Reviews from "./components/Reviews";
import WhoWeAre from "./components/JoinDiscord";
import WhatWeHave from "./components/WhatWeHave";
import Partners from "./components/Partners";
import WhyWeAreHere from "./components/WhyWeAreHere";
import Hero from "./components/Hero";
import Events from "./components/Events";

const index = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <WhyWeAreHere />
      <WhatWeHave />
      <Events />
      <Team />
      <Reviews />
      <Partners />
    </div>
  );
};

export default index;
