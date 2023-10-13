"use client"

import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          BEECOME A WORLD CLASS DEVELOPER
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Learn with Uchnino
        </h1>

        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            What you will learn{" "}
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-4">
          Start learning to code today and stand a chance to become the best
          version of yourself tomorrow
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;