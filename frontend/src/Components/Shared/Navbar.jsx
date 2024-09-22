import React, { useState, useEffect, useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import ScrollToId from "../ScrollToId/ScrollToId";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

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
              ["1","Home", "home", "/"],
              ["2","Menu", "menu", "#explore-menu"],
              ["3","Mobile App", "mobile-app", "#app-download"],
              ["4","Contact Us", "contact-us", "#footer"],
            ].map(([id,title, menuKey, link]) => (
              <Link
                key={id}
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
            {!token?<button onClick={()=>setShowLogin(true)} className="text-base text-[#ff6347] hover:text-white border border-[#ff6347] lg:py-2 py-1.5 lg:px-6 px-4 rounded-full cursor-pointer transition-colors duration-300 ease-linear hover:bg-[#ff6347]">
              Sign-In
            </button>
            :<div className="relative group">
              <img src={assets.profile_icon} alt="" />
              <ul className="absolute hidden min-w-36 right-0 z-10 group-hover:flex group-hover:flex-col group-hover:gap-2.5 group-hover:bg-[#fff2ef] group-hover:py-3 group-hover:px-6 group-hover:rounded group-hover:border-[1px_solid_tomato] group-hover:outline-[2px_solid_white] group-hover:list-none">
                <li onClick={()=>navigate('/myorders')} className="flex items-center gap-2.5 cursor-pointer"><img className="w-5" src={assets.bag_icon} alt="" /><p className="hover:text-[tomato]">Orders</p></li><hr />
                <li onClick={logout} className="flex items-center gap-2.5 cursor-pointer"><img className="w-5" src={assets.logout_icon} alt="" /><p className="hover:text-[tomato]">Log Out</p></li>
              </ul>
              </div>}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
