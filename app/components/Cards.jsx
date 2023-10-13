"use client"
import Image from "next/image";


import React from "react";
// import Single from "../assets/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";
// import Double from "../assets/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg";
// import Triple from "../assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg";


const Cards = () => {
  return (
    <div className="w-full py-[10rem] bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-500 ">
          <Image
            className="w-20 h-20 flex items-center justify-center mx-auto rounded-full"
            src="/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className=" text-center text-4xl font-bold ">$145</p>
          <div className="text-center font-medium  ">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8">
              500 GB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">1 Granted User</p>
            <p className="py-2 border-b border-gray-300 mx-8">
              Send up to 2 GB
            </p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black">
              Start Trial
            </button>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 p-4 my-8 md:my-0  rounded-lg hover:scale-105 duration-500 ">
          <Image
            className="w-20 h-20 flex items-center justify-center mx-auto rounded-full"
            src="/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className=" text-center text-4xl font-bold ">$145</p>
          <div className="text-center font-medium  ">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8">
              500 GB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">1 Granted User</p>
            <p className="py-2 border-b border-gray-300 mx-8">
              Send up to 2 GB
            </p>
            <button className="bg-black  w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-[#00df9a]">
              Start Trial
            </button>
          </div>
        </div>

        <div className="w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-500 ">
          <Image
            className="w-20 h-20 flex items-center justify-center mx-auto rounded-full"
            src="/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className=" text-center text-4xl font-bold ">$145</p>
          <div className="text-center font-medium  ">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8">
              500 GB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">1 Granted User</p>
            <p className="py-2 border-b border-gray-300 mx-8">
              Send up to 2 GB
            </p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;