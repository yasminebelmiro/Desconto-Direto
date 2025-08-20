import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="bg-dark-blue text-white flex flex-col px-10 md:px-30 py-10 md:py-15 gap-5 md:gap-10">
      <div className="flex  items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-2">
          <img className="w-10" src={logo} alt="" />
          <h1 className="font-kaisei flex flex-col text-center md:text-xl">
            Desconto <span className="text-dark-yellow">Direto</span>
          </h1>
        </div>
        <div className="font-inter flex flex-col items-start justify-center gap-2">
            <p className="flex items-center gap-2 text-sm md:text-lg"><FaInstagram size={25}/> desconto_direto</p>
            <p className="flex items-center gap-2 text-sm md:text-lg"><FaLinkedin size={25}/> Desconto Direto</p>
            <p className="flex items-center gap-2 text-sm md:text-lg"><MdOutlineAlternateEmail size={25}/> contato@dd.br</p>
        </div>
      </div>
      <h3 className="text-center text-sm md:text-lg">Todos os direitos reservados Desconto Direto © 2025</h3>
    </section>
  );
};

export default Footer;
