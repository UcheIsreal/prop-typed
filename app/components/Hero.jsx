"use client"

import React from "react";
import { TypeAnimation } from "react-type-animation";


const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center">
        <p className="text-[#00df9a] mt-16 sm:mt-0 font-bold p-2 ">
          BECOME A WORLD CLASS DEVELOPER
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl mt-2 sm:mt-0 font-bold md:py-6 mb-4 sm:mb-0">
          Learn <span className=" bg-gradient-to-r from-[#00df9a] to-slate-500 text-transparent bg-clip-text ">with</span>{" "}
          Uchnino
        </h1>

        <div className="flex justify-center items-center sm:mb-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold mr-2">
            What you will learn{" "}
          </p>
          <TypeAnimation
            className="md:text-4xl sm:text-4xl text-lg font-extrabold mt-1 sm:mt-0 text-[#00df9a]"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "HTML",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "CSS",
              2000,
              "JavaScript",
              2000,
              "TailwindCSS",
              2000,
              "NextJS",
              2000,
              "ExpressJS",
              2000,
              "MongoDB",
              2000,
              "GitHub",
              2000,
              "Docker",
              2000,
            ]}
            wrapper="span"
            speed={10}
            // style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-4 sm:mt-0 mx-5 sm:mx-0">
          Start learning to code today and stand a chance to become the best
          version of yourself tomorrow
        </p>
        <button className="bg-[#00df9a] w-[200px] mt-16 sm:mt-4 rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;