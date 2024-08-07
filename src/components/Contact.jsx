import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions or need assistance, please reach out to us through the following methods:
      </p>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="text-blue-500">Asekhonax@gmail.com</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Phone</h2>
          <p className="text-blue-500">(+27) 0818 273 587</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Social Media</h2>
          <ul className="list-disc pl-5">
            <li>
              <a href="https://twitter.com/yourprofile" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://facebook.com/yourprofile" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourprofile" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
