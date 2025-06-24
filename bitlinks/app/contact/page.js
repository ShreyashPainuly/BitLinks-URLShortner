import React from 'react';

const ContactPage = () => {
  return (
    <main className="bg-gradient-to-br from-blue-100 to-white min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-gray-800 mb-6 text-center">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <textarea
            placeholder="Your Message"
            className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            rows="5"
          />
          <button className="bg-blue-500 text-white font-semibold p-3 rounded hover:bg-blue-600 transition active:scale-95 shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;