import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar py-5 flex justify-between items-center'>
      <img className='w-40' src={assets.logo} alt="" />
      <ul className='nav-menu flex list-none gap-5 text-[#49557e] text-lg'>
        {[
            ['Home', 'home'],
            ['Menu', 'menu'],
            ['Mobile App', 'mobile-app'],
            ['Contact Us', 'contact-us'],
        ].map(([title, menuKey])=>(
            <li onClick={()=>setMenu(menuKey)} className={`${menu===menuKey?"active":""} cursor-pointer`}>{title}</li>
        ))}
      </ul>
      <div className='navber-right flex items-center gap-8'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
            <img src={assets.basket_icon} alt="" />
            <div className="dot absolute min-h-[10px] min-w-[10px] bg-[#ff6347] rounded-full -top-2 -right-2"></div>
        </div>
        <button className='text-base text-[#ff6347] hover:text-white border border-[#ff6347] py-2 px-6 rounded-full cursor-pointer transition-colors duration-300 ease-linear hover:bg-[#ff6347]'>Sign-In</button>
      </div>
    </div>
  )
}

export default Navbar
