import React from "react";
import { FaBaby, FaWalking, FaBirthdayCake, FaSmile } from "react-icons/fa";

const mileStones = [
  {
    icon: <FaBaby className="text-pink-400 text-3xl" />,
    title: "First Smile 😊",
    date: "2 Months",
    description: "Gave the first heart-melting smile!",
  },
  {
    icon: <FaWalking className="text-blue-400 text-3xl" />,
    title: "First Steps 🚶",
    date: "11 Months",
    description: "Took the first wobbly steps!",
  },
  {
    icon: <FaBirthdayCake className="text-yellow-400 text-3xl" />,
    title: "First Birthday 🎂",
    date: "12 Months",
    description: "Had an adorable cake smash!",
  },
];

const Milestones = () => {
  return (
    <section id="milestone" className="py-16 px-6 bg-blue-50 text-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-6">
          📅 My Milestones
        </h2>

        {/* Timeline Layout */}
        <div className="relative border-l-4 border-red-400 ml-6">
          {mileStones.map((milestone, index) => (
            <div key={index} className="mb-8 ml-6 relative">
              <div className="absolute -left-8 top-0 bg-white shadow-lg rounded-full p-2">
                {milestone.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {milestone.title}
              </h3>
              <p className="text-gray-500 text-sm">{milestone.date}</p>
              <p className="text-gray-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
