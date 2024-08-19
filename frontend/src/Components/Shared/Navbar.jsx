import React, { useState, useEffect, useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import ScrollToId from "../ScrollToId/ScrollToId";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const {getTotalCartAmount} = useContext(StoreContext);

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
          <Link to={'/'}><img className="lg:w-40 md:w-32 w-28" src={assets.logo} alt="" /></Link>
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
              <Link to={'/cart'}><img className="lg:w-6 w-5" src={assets.basket_icon} alt="" /></Link>
              <div className={getTotalCartAmount()===0?"":"dot absolute min-h-[10px] min-w-[10px] bg-[#ff6347] rounded-full -top-2 -right-2"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} className="text-base text-[#ff6347] hover:text-white border border-[#ff6347] lg:py-2 py-1.5 lg:px-6 px-4 rounded-full cursor-pointer transition-colors duration-300 ease-linear hover:bg-[#ff6347]">
              Sign-In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
