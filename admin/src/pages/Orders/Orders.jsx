import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Orders = ({url}) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    }
    else{
      toast.error("error")
    }
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+"/api/order/status",{orderId,status:event.target.value});
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[])
  return (
    <div className='order add h-screen'>
      <h3 className='text-3xl font-semibold my-12'>Order Page</h3>
      <div>
        <div className="grid lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] grid-cols-[1fr_2fr_1fr] items-center lg:gap-7 gap-y-1 gap-x-3 md:text-sm text-xs py-2.5 px-5 text-[#454545] border-[1px] border-[#CACACA]">
          <p className='font-bold'>Image</p>
          <p className='font-bold'>Name</p>
          <p className='font-bold'>Item Quantity</p>
          <p className='font-bold'>Price</p>
          <p className='font-bold'>Status</p>
        </div>
        {orders.map((order,index)=>(
          <div key={index} className='grid lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] grid-cols-[0.5fr_2fr_1fr] items-start md:gap-7 gap-2.5 border-[1px] border-[tomato] md:p-5 py-4 px-2 my-7 md:text-sm text-xs text-[#505050]'>
            <img className='lg:w-auto w-10' src={assets.parcel_icon} alt="" />
            <div>
              <p className='font-medium'>
                {order.items.map((item,index)=>{
                  if (index === order.items.length-1) {
                    return item.name+" x "+item.quantity
                }
                else{
                    return item.name+" x "+item.quantity+", "
                }
                })}
              </p>
              <p className='font-medium mt-7 mb-[5px]'>{order.address.firstname+" "+order.address.lastname}</p>
              <div className='mb-2.5'>
                <p>{order.address.street+","}</p>
                <p>{order.address.city+', '+order.address.state+', '+order.address.country+', '+order.address.zipcode+'.'}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select className='bg-[#ffe8e4] border-[1px] border-[tomato] w-[max(10vw,120px)] md:p-2.5 p-1 md:text-sm text-xs outline-none' onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
