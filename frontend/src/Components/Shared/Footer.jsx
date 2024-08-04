import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer text-[#d9d9d9] bg-[#323232] flex flex-col gap-5 py-5 px-[8vw] pt-20 mt-24' id='footer'>
      <div className="footer-content w-full grid lg:grid-cols-4 max-sm:grid-cols-1 lg:gap-20 gap-10">
        <div className="footer-content-left lg:col-span-2 col-span-1 flex flex-col items-start gap-5">
            <img src={assets.logo} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex necessitatibus vitae odio nulla maxime esse amet aspernatur nihil nostrum delectus omnis voluptatem sed! Incidunt!</p>
            <div className='flex gap-2.5'>
              <div className='border-[1px] border-white rounded-full p-2.5 text-xl cursor-pointer'><FaFacebookF /></div>
              <div className='border-[1px] border-white rounded-full p-2.5 text-xl cursor-pointer'><FaXTwitter /></div>
              <div className='border-[1px] border-white rounded-full p-2.5 text-xl cursor-pointer'><FaLinkedinIn /></div>
            </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-5">
            <h2 className='text-white text-3xl font-medium'>Company</h2>
            <ul>
                <li className='mb-2.5 cursor-pointer'>Home</li>
                <li className='mb-2.5 cursor-pointer'>About</li>
                <li className='mb-2.5 cursor-pointer'>Delivery</li>
                <li className='mb-2.5 cursor-pointer'>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right flex flex-col items-start gap-5">
            <h2 className='text-white text-3xl font-medium'>GET IN TOUCH</h2>
            <ul>
                <li className='mb-2.5 cursor-pointer'>+880 1946-649565</li>
                <li className='mb-2.5 cursor-pointer'>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-full h-0.5 mt-5' />
      <p className='text-center'>Copyright 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
