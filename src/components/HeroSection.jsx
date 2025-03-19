import React from "react";
import shourya_pic from "../assets/shourya_pic.jpeg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white text-center p-4">
      <img
        src={shourya_pic}
        alt="shourya_pic"
        className="w-70 h-70 sm:w-56 rounded-full shadow-lg object-cover"
      />
      <h1 className="text-3xl sm:text-4xl font-bold mt-4 text-gray-800">
        Hi, I'm Shourya Singh!!👶
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mt-2">
        Welcome to my little world! 🎈
      </p>
    </div>
  );
};

export default HeroSection;
