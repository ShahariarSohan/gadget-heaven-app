import React from "react";

const Footer = () => {
  return (
    <footer>
      <h3 className="text-center font-bold text-2xl">Gadget Heaven</h3>
      <p className="text-center text-sm">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start p-10 container mx-auto gap-5 md:gap-20">
        <nav className="grid text-sm">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="grid  text-sm">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="grid text-sm">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
