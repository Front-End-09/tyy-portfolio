import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";


const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

   const socials = [
  { 
    name: "Instagram", 
    icon: <FaInstagram />, 
    link: "https://www.instagram.com/suon_tii?igsh=MWd6YWZoZXV6bzRmdg%3D%3D&utm_source=qr", 
    color: "#fe107c" 
  },
  { 
    name: "Facebook", 
    icon: <FaFacebook />, 
    link: "https://www.facebook.com/share/1B7adaNNZ7/?mibextid=wwXIfr", 
    color: "#106bff" 
  },
  { 
    name: "LinkedIn", 
    icon: <FaLinkedin />, 
    link: "https://www.linkedin.com/in/suon-ty-17a99a29a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", 
    color: "#0A66C2" 
  },
];


  return (
    <footer className=" py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-primary">Suon Ty</h2>

        {/* Navigation Links - Responsive */}
        <nav className="text-white flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-primary text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
            <div className="flex justify-center gap-14 mt-3 socials-container">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social={item.name}
                  style={{ "--accent-color": item.color }}
                  className="text-2xl hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Suon Ty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
