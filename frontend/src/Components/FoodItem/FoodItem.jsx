import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id, name, price, description, image}) => {
    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);
  return (
    <div className='food-item w-full m-auto rounded-2xl shadow-[0px_0px_10px_#00000015] transition-all duration-300 animate-fadeIn overflow-hidden'>
      <div className='relative'>
        <img className='w-full' src={url+"/images/"+image} alt="food-image" />
        {
            !cartItems[id]
            ?<img className='add absolute w-9 bottom-4 right-4 cursor-pointer rounded-full' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='' />:<div className='food-item-counter absolute bottom-4 right-4 flex items-center gap-2.5 p-[6px] rounded-full bg-white'>
                <img className='w-[30px]' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                <p>{cartItems[id]}</p>
                <img className='w-[30px]' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='' />
            </div>
        }
      </div>
      <div className='p-5'>
        <div className='flex justify-between items-center mb-2.5'>
            <p className='text-xl font-medium'>{name}</p>
            <img className='w-[70px]' src={assets.rating_starts} alt="" />
        </div>
        <p className='text-[#676767] text-xs'>{description}</p>
        <p className='text-[#ff6347] text-[22px] font-medium my-2 mx-0'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
