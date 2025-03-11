import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      <div>
        <a href="https://github.com" className="text-white me-3"><i className="bi bi-github"></i></a>
        <a href="https://linkedin.com" className="text-white me-3"><i className="bi bi-linkedin"></i></a>
        <a href="https://twitter.com" className="text-white"><i className="bi bi-twitter"></i></a>
      </div>
    </footer>
  );
};

export default Footer;