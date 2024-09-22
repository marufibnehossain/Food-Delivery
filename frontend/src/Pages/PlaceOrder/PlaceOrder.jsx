import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const {getTotalCartAmount,token,food_list, cartItems,url} = useContext(StoreContext);
    const [data, setData] = useState({
      firstname:"",
      lastname:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:"",
    })
    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(prevData=>({...prevData, [name]:value}))

    }

    const placeOrder = async (event) => {
      event.preventDefault();
      let orderItems=[];
      food_list.map((item) => {
        if (cartItems[item._id]>0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2,
      }
      let response = await axios.post(url+ "/api/order/place",orderData,{headers:{token}});
      if (response.data.success) {
        const {session_url} = response.data;
        window.location.replace(session_url);
      }
      else{
        alert("error");
      }
    }

    const navigate = useNavigate();

    useEffect(()=>{
      if (!token) {
        navigate('/cart')
      }
      else if(getTotalCartAmount()===0)
      {
        navigate('/cart')
      }
    },[token])

  return (
    <form className='place-order flex items-start justify-between gap-12 mt-24' onSubmit={placeOrder}>
      <div className="place-order-left w-full max-w-[max(40%,500px)]">
        <p className="title text-3xl font-semibold mb-12">Delivery Information</p>
        <div className="multi-fields flex gap-5">
            <input className='mb-4 w-full py-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' name='firstname' onChange={onChangeHandler} value={data.firstname} type="text" placeholder='First Name' required />
            <input className='mb-4 w-full py-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' name='lastname' onChange={onChangeHandler} value={data.lastname} type="text" placeholder='Last Name' required />
        </div>
        <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' required />
        <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' required />
        <div className="multi-fields flex gap-5">
            <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' required />
            <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' required />
        </div>
        <div className="multi-fields flex gap-5">
            <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' required />
            <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' required />
        </div>
        <input className='mb-4 w-full p-2.5 border-[1px_solid_#c5c5c5] rounded outline-[#ff6347]' name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' required />
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
          <button /* onClick={()=>navigate('/order')} */ type='submit' className='border-none text-white bg-[#ff6347] w-[max(15vw,200px)] py-[12px] rounded cursor-pointer'>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
