import React, { useState } from "react";
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
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section id="gallery" className="py-16 px-6 bg-blue-100 text-gray-700">
      <div className='container mx-auto text-center"'>
        <h2 className="text-3xl font-bold text-red-500 mb-6">
          📸 My Cute Moments
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <img
                src={img}
                alt={`baby_moment ${index + 1}`}
                className="w-full h-60 object-cover rounded-xl transition-transform duration-300 hover:scale-110"
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-4 bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Full_Size"
              className="w-full max-w-lg rounded-b-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
