import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer text-[#d9d9d9] bg-[#323232] flex flex-col gap-5 py-5 px-[8vw] pt-20' id='footer'>
      <div className="footer-content w-full !grid !grid-cols-4 gap-20">
        <div className="footer-content-left col-span-2 flex flex-col items-start gap-5">
            <img src={assets.logo} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex necessitatibus vitae odio nulla maxime esse amet aspernatur nihil nostrum delectus omnis voluptatem sed! Incidunt!</p>
            <div className='flex'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center flex flex-col items-start gap-5">
            <h2 className='text-white text-3xl font-medium'>Company</h2>
            <ul>
                <li className='mb-2.5'>Home</li>
                <li className='mb-2.5'>About</li>
                <li className='mb-2.5'>Delivery</li>
                <li className='mb-2.5'>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right flex flex-col items-start gap-5">
            <h2 className='text-white text-3xl font-medium'>GET IN TOUCH</h2>
            <ul>
                <li className='mb-2.5'>+880 1946-649565</li>
                <li className='mb-2.5'>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
