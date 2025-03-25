import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaHeart } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    //  console.log(`Updating: ${e.target.name} -> ${e.target.value}`); // Debugging log
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData.name);
    console.log(formData.message);

    // Ensure both fields are filled before submission
    if (!formData.name || !formData.message) {
      alert("Please fill out all fields! 😊");
      return;
    }

    alert("Your message has been sent! 💖");

    // **Clear input fields after submission**
    setFormData({ name: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-pink-100 text-gray-800">
      <h2 className="text-3xl font-bold text-pink-500 mb-4">
        👶 Say Hi to Me!
      </h2>
      <p className="text-gray-600 mb-6">
        Send me a sweet message, and I'll reply with a cute giggle! 😊
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
          onChange={handleChange}
          value={formData.name}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
          onChange={handleChange}
          value={formData.message}
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
        >
          Send a Virtual Hug 🤗
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
