import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <main className="bg-gradient-to-br from-blue-100 to-white min-h-screen flex items-center justify-center">
      <div className="bg-white p-12 rounded-xl shadow-2xl w-full max-w-5xl animate-fadeIn animate-slide flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">About BitLinks</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            BitLinks is a simple and powerful URL shortener designed for speed and ease of use. Whether you're a developer, marketer, or casual user, BitLinks provides a reliable and fast solution for managing links. Our mission is to make sharing and tracking links effortless and elegant.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/vector.jpg"
            alt="BitLinks Illustration"
            width={400}
            height={400}
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;