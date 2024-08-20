import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order flex items-start justify-between gap-12 mt-24'>
      <div className="place-order-left w-full max-w-[max(40%,500px)]">
        <p className="title text-3xl font-semibold mb-12">Delivery Information</p>
        <div className="multi-fields flex gap-5">
            <input className='mb-4 w-full py-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' type="text" placeholder='First Name' />
            <input className='mb-4 w-full py-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' type="text" placeholder='Last Name' />
        </div>
        <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' type="email" placeholder='Email address' />
        <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' type="text" placeholder='Street' />
        <div className="multi-fields flex gap-5">
            <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' type="text" placeholder='City' />
            <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' type="text" placeholder='State' />
        </div>
        <div className="multi-fields flex gap-5">
            <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' type="text" placeholder='Zip code' />
            <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' type="text" placeholder='Country' />
        </div>
        <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
        <div className="cart-total flex-[1] flex flex-col gap-5">
          <h2 className='text-3xl font-semibold mb-12'>Cart Total</h2>
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
          <button onClick={()=>navigate('/order')} className='border-none text-white bg-[#ff6347] w-[max(15vw,200px)] py-[12px] rounded cursor-pointer'>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
