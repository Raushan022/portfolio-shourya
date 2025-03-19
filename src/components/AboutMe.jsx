import React from "react";
import shourya_pic from "../assets/shourya_pic.jpeg";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-6 bg-pink-100 text-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={shourya_pic}
            alt="cute_baby"
            className="w-48 h-48 object-cover rounded-full shadow-lg"
          />
        </div>

        <div className="w-full md:w-2/3 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-red-500">
            Hi, I'm Baby Shourya 👶
          </h2>
          <p className="text-lg mt-3">🎂 Born on: November 18, 2023</p>
          <p className="text-lg mt-1">💖 Favorite Toy: Teddy Bear 🧸</p>
          <p className="mt-4 text-gray-600">
            I'm 1 year 4 months old and love exploring the world! I enjoy
            playing with my toys, giggling at funny faces, and crawling around
            the house like a little explorer. Life is an adventure, and I'm just
            getting started! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
