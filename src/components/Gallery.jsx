import React from "react";
import IMG_4896 from "../assets/IMG_4896.jpg";
import IMG_4909 from "../assets/IMG_4909.jpg";
import IMG_5375 from "../assets/IMG_5375.jpg";
import IMG_5441 from "../assets/IMG_5441.jpg";
import IMG_5446 from "../assets/IMG_5446.jpg";
import IMG_5597 from "../assets/IMG_5597.jpg";
import IMG_5964 from "../assets/IMG_5964.jpg";
import IMG_5968 from "../assets/IMG_5968.jpg";
import IMG_5984 from "../assets/IMG_5984.jpg";

const images = [
  IMG_4896,
  IMG_4909,
  IMG_5375,
  IMG_5441,
  IMG_5446,
  IMG_5597,
  IMG_5964,
  IMG_5968,
  IMG_5984,
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-6 bg-blue-100 text-gray-700">
      <div className='container mx-auto text-center"'>
        <h2 className="text-3xl font-bold text-red-500 mb-6">
          📸 My Cute Moments
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={img}
                alt={`baby_moment ${index + 1}`}
                className="w-full h-60 object-cover rounded-xl transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
