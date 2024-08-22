import React from 'react';
import { SiLinkedin, SiGithub } from "react-icons/si";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import minnieMouseGif from '../assets/minnie.gif'; 

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-[#e3e9e2] via-[#cbf5da] to-[#f5fdd5] rounded-lg shadow-lg relative">
      <h1 className="text-3xl font-bold text-[#004d25] mb-4 text-center">Get in Touch</h1>
      <p className="mb-6 text-lg text-[#004d25] text-center">
        I'd love to hear from you!
      </p>
      <div className="space-y-6">
        <div className="flex items-center">
          <span className="text-2xl mr-3"><MdAlternateEmail /></span>
          <div>
            <h2 className="text-lg font-semibold text-[#004d25]">Email</h2>
            <p className="text-[#004d25]">Asekhonax@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-3"><BsFillTelephoneForwardFill /></span>
          <div>
            <h2 className="text-lg font-semibold text-[#004d25]">Phone</h2>
            <p className="text-[#004d25]">(+27) 818 273 587</p>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://linkedin.com/in/yourprofile" className="text-[#004d25] hover:text-[#82a302] transition-colors">
            <SiLinkedin size={28} />
          </a>
          <a href="https://github.com/yourprofile" className="text-[#004d25] hover:text-[#82a302] transition-colors flex items-center">
            <SiGithub size={28} />
          </a>
        </div>
        <div className="absolute top-0 right-0 mt-6 mr-6">
          <img 
            src={minnieMouseGif} 
            alt="Minnie Mouse"
            className="w-24 h-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
