import React from "react";

const ComingSoon = () => {
  return (
    <section class="w-full bg-white dark:bg-wickeddark">
      <div
        class="
          relative
          items-center
          w-full
          px-5
          py-12
          mx-auto
          md:px-12
          lg:px-16
          max-w-7xl
          lg:py-24
        ">
        <div class="flex w-full mx-auto text-left">
          <div class="relative inline-flex items-center mx-auto align-middle">
            <div class="pb-12 text-center">
              <h1
                class="
                  max-w-5xl
                  text-2xl
                  font-bold
                  leading-none
                  tracking-tighter
                  text-neutral-600
                  md:text-5xl
                  lg:text-6xl lg:max-w-7xl
                ">
                {" "}
                Coming Soon{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
