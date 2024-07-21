import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-wrap items-center justify-between py-6">
      <div className="flex items-center">
        <span className="mx-2 text-4xl font-bold">SWE Portfolio</span>
      </div>
      <div className="m-8 flex flex-wrap items-center justify-center gap-8 text-1xl">
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#technologies" className="hover:underline">Technologies</a>
        <a href="#experience" className="hover:underline">Experience</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contacts" className="hover:underline">Contacts</a> 
      </div>
    </nav>
  );
};

/*const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit',
      timeZoneName: 'short'
    };
    return `${date.toLocaleDateString('en-US', options)} Eastern`;
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="mx-2 text-xl">{formatDate(dateTime)}</span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/benjamin-nguyen-466a1a126/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/BENJIVN" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}; */

export default Navbar;
