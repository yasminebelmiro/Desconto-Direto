import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/HeroImages/image02.png";
import { BiChevronRight } from "react-icons/bi";
interface BreadcrumbBannerProps {
  currentPage: string;
  typeUser: string;
}
const BreadcrumbBanner = ({ currentPage, typeUser }: BreadcrumbBannerProps) => {
  return (
    <div
      className="font-kaisei relative w-full h-64 flex flex-col justify-center items-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative text-center">
        <h1 className="text-3xl font-bold">{currentPage}</h1>
        <div className="flex items-center justify-center gap-2 text-sm mt-2">
          <Link to={`/${typeUser}/home`} className="hover:underline">
            Home
          </Link>
          <BiChevronRight />
          <p>{currentPage}</p>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbBanner;
