import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'

const Header = () => {
  return (
    <div style={{backgroundImage:`url(${assets.header_img})`}} className='header h-[34vw] my-7 mx-auto bg-contain bg-no-repeat relative'>
      <div className="header-content absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] max-lg:max-w-[45%] max-md:max-w-[55%] lg:bottom-[10%] bottom-[15%] left-[6vw] animate-fadeIn">
        <h2 className='font-medium text-white text-[max(4.5vw,22px)] leading-none'>Order your favourite food here</h2>
        <p className='text-white text-[1vw] max-md:hidden'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className='border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-full'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
