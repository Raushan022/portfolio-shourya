import React from "react";
import { FaGamepad, FaAppleAlt, FaBook, FaMusic, FaStar } from "react-icons/fa";

const favourites = [
  {
    icon: <FaGamepad className="text-red-400 text-3xl" />,
    title: "Favourite Toy",
    description: "Loves playing with soft plushies!",
  },
  {
    icon: <FaAppleAlt className="text-red-400 text-3xl" />,
    title: "Favourite Food",
    description: "Loves grapes, bananas and yogurt!",
  },
  {
    icon: <FaBook className="text-red-400 text-3xl" />,
    title: "Favourite Story",
    description: "Enjoy bedtime stories about animals!",
  },
  {
    icon: <FaMusic className="text-red-400 text-3xl" />,
    title: "Favourite Song",
    description: "Loves dancing to baby rhymes!",
  },
];

const Favourites = () => {
  {
    /* Favorites Grid */
  }
  return (
    <section id="favorites" className="py-16 px-6 bg-yellow-100 text-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-6">
          ⭐ My Favorites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favourites.map((fav, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4"
            >
              {fav.icon}
              <div>
                <h3 className="text-xl font-semibold">{fav.title}</h3>
                <p className="text-gray-600">{fav.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favourites;
