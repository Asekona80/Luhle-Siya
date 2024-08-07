import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-dark text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Siyamthanda-Nikoluhle. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="/privacy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
