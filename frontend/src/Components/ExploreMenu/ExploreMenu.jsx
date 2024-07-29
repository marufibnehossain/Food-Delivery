import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu flex flex-col gap-5" id='explore-menu'>
        <h1 className='text-[#262626] font-medium text-3xl'>Explore Our Menu</h1>
        <p className='max-w-[60%] text-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list flex justify-between items-center gap-7 text-center my-5 mx-0 overflow-x-scroll">
            {menu_list.map((item, index)=>{
                return(
                    <div className='explore-menu-list-item' onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                        <img className={`${category===item.menu_name?"active":""} w-[7.5vw] min-w-20 cursor-pointer rounded-full transition-all duration-200`} src={item.menu_image} alt="" />
                        <p className='mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='my-2.5 mx-0 h-0.5 bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu
