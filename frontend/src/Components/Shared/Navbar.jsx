import React, { useState, useEffect } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import ScrollToId from "../ScrollToId/ScrollToId";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ScrollToId />
      <div
        className={`navbar z-10 transition-bg sticky top-0 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="w-4/5 m-auto py-5 flex justify-between items-center">
          <img className="lg:w-40 md:w-32 w-28" src={assets.logo} alt="" />
          <ul className="nav-menu lg:flex list-none lg:gap-5 text-[#49557e] lg:text-lg hidden ">
            {[
              ["Home", "home", "/"],
              ["Menu", "menu", "#explore-menu"],
              ["Mobile App", "mobile-app", "#app-download"],
              ["Contact Us", "contact-us", "#footer"],
            ].map(([title, menuKey, link]) => (
              <Link
                to={link}
                onClick={() => setMenu(menuKey)}
                className={`${menu === menuKey ? "active" : ""} cursor-pointer`}
              >
                {title}
              </Link>
            ))}
          </ul>
          <div className="navber-right flex items-center lg:gap-8 gap-5">
            <img className="lg:w-6 w-5" src={assets.search_icon} alt="" />
            <div className="navbar-search-icon relative">
              <img className="lg:w-6 w-5" src={assets.basket_icon} alt="" />
              <div className="dot absolute min-h-[10px] min-w-[10px] bg-[#ff6347] rounded-full -top-2 -right-2"></div>
            </div>
            <button className="text-base text-[#ff6347] hover:text-white border border-[#ff6347] lg:py-2 py-1.5 lg:px-6 px-4 rounded-full cursor-pointer transition-colors duration-300 ease-linear hover:bg-[#ff6347]">
              Sign-In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
