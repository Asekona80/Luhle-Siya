import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-[#ff9d9d] to-[#ffb3b3] rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-pink-600 mb-4 text-center">Get in Touch</h1>
      <p className="mb-6 text-lg text-gray-700 text-center">
        We'd love to hear from you! Whether you have questions or need assistance, feel free to reach out.
      </p>
      <div className="space-y-6">
        <div className="flex items-center">
          <span className="text-2xl mr-3">📧</span>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Email</h2>
            <p className="text-pink-600">Asekhonax@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-3">📞</span>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Phone</h2>
            <p className="text-pink-600">(+27) 818 273 587</p>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
