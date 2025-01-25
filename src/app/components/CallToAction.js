import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Let's Work Together</h2>
        <p className="text-lg mb-8">I'm excited to collaborate on your next project. Get in touch today to start building something amazing!</p>
        <Link href="/contact">
          <span className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300 cursor-pointer">
            Get in Touch
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
