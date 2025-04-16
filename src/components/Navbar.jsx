import React from "react";
// import logo from "../assets/Logo.webp";
// import logo from "../assets/logo-1.webp"
import logo from "../assets/mylogo.webp"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2 logo" width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/shaik-zaheer-6a2311328/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>{" "}
        <a
          href="https://www.instagram.com/zaheer_skyz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/zaheer123505"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>{" "}
        <a
          href="https://www.facebook.com/profile.php?id=100068718416466"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
