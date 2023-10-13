"use client"
import React from "react";
import Image from "next/image";

const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <Image
            src="/ales-nesetril-Im7lZjxeLhg-unsplash.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />{" "}
          <div className="flex flex-col justify-center ">
            <p className="text-[#00df9a] font-bold mt-4 sm:mt-0">DATA ANALYTICS DASHBOARD</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Data Analytics Centrally
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              dignissimos neque consequuntur ipsam aliquam nobis voluptates,
              dolor mollitia exercitationem facere numquam voluptate quia maxime
              repellendus tempore. Quos soluta aliquam totam?
            </p>
            <button className="bg-black w-[200px] rounded-md font-medium my-6  md:mx-0 py-3 text-[#00df9a]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
