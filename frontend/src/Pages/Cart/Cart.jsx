import React, { useContext } from 'react'
import {StoreContext} from '../../Context/StoreContext'
import { BsPlusCircleFill } from "react-icons/bs"
import { FaCircleMinus } from "react-icons/fa6"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems,addToCart,food_list,removeFromCart,getTotalCartAmount, url} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart mt-24'>
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[gray] text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div key={item._id}>
                <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-[max(1vw,12px)] cart-items-item my-[10px] text-black">
                  <img className='w-14' src={url+ "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p className='flex items-center gap-3'><BsPlusCircleFill className='cursor-pointer text-green-700 text-2xl' onClick={()=>addToCart(item._id)} />{cartItems[item._id]}<FaCircleMinus className='cursor-pointer text-red-700 text-2xl' onClick={()=>removeFromCart(item._id)} /></p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p className='cursor-pointer' onClick={()=>removeFromCart(item._id)}>X</p>
                </div>
                <hr className='h-[1px] border-none bg-[#e2e2e2]' />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom mt-20 flex max-md:flex-col justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex-[1] flex flex-col gap-5">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2.5' />
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className='my-2.5' />
            <div className='flex justify-between text-[#555]'>
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/place-order')} className='border-none text-white bg-[#ff6347] w-[max(15vw,200px)] py-[12px] rounded cursor-pointer'>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode flex-[1]">
          <p className='text-[#555]'>Enter Promo Code</p>
          <div className='mt-2.5 flex items-center bg-[#eaeaea] rounded'>
            <input className='bg-transparent border-none outline-none pl-2.5 w-4/6' type="text" placeholder='Promo code' />
            <button className='w-2/6 py-3 px-[5px] bg-black border-none text-white rounded'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
