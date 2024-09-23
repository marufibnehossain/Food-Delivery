import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='sidebar w-[18%] min-h-screen border-[1.5px] border-[#a9a9a9] text-[max(1vw,10px)]'>
      <div className="sidebar-options pt-12 ps-[20%] flex flex-col gap-5">
      <NavLink to={'/'} className="sidebar-option flex items-center gap-3 border-[1px] border-[#a9a9a9] border-e-0 py-2 px-2.5 rounded-[3px_0px_0px_3px] cursor-pointer [&.active]:bg-[#fff0ed] [&.active]:border-[tomato]">
            <IoHomeOutline className='text-[28px]' />
            <p className='xs:block hidden'>Home</p>
        </NavLink>
      <NavLink to={'/add'} className="sidebar-option flex items-center gap-3 border-[1px] border-[#a9a9a9] border-e-0 py-2 px-2.5 rounded-[3px_0px_0px_3px] cursor-pointer [&.active]:bg-[#fff0ed] [&.active]:border-[tomato]">
            <img src={assets.add_icon} alt="" />
            <p className='xs:block hidden'>Add Items</p>
        </NavLink>
        <NavLink to={'/list'} className="sidebar-option flex items-center gap-3 border-[1px] border-[#a9a9a9] border-e-0 py-2 px-2.5 rounded-[3px_0px_0px_3px] cursor-pointer [&.active]:bg-[#fff0ed] [&.active]:border-[tomato]">
            <img src={assets.order_icon} alt="" />
            <p className='xs:block hidden'>List Items</p>
        </NavLink>
        <NavLink to={'/orders'} className="sidebar-option flex items-center gap-3 border-[1px] border-[#a9a9a9] border-e-0 py-2 px-2.5 rounded-[3px_0px_0px_3px] cursor-pointer [&.active]:bg-[#fff0ed] [&.active]:border-[tomato]">
            <img src={assets.order_icon} alt="" />
            <p className='xs:block hidden'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
