import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    //  console.log(`Updating: ${e.target.name} -> ${e.target.value}`); // Debugging log
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "5bbb6110-0107-4d4c-8bd0-29e9aa4b0c09");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Your message has been sent! 💖");
      setFormData({ name: "", message: "" }); // Clear form fields
    }
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
