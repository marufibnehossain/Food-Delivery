import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';

const MyOrders = () => {

    const {url, token} = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
    }
    useEffect(()=>{
        if (token) {
            fetchOrders();
            const interval = setInterval(() => {
                fetchOrders();
            }, 1000); // 30 seconds interval (can be adjusted)
            // Clear the interval when the component unmounts
            return () => clearInterval(interval);
        }
    },[token])


  return (
    <div className='my-order my-12'>
      <h2 className='text-3xl font-semibold mb-12'>My Orders</h2>
      <div className='flex flex-col gap-5 mt-7'>
        {data.map((order,index)=>{
            return(
                <div key={index} className='grid lg:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] grid-cols-[1fr_2fr_1fr] items-center lg:gap-7 gap-y-1 gap-x-3 md:text-sm text-xs py-2.5 px-5 text-[#454545] border-[1px] border-[tomato]'>
                    <img className='w-[50px]' src={assets.parcel_icon} alt="" />
                    <p>{order.items.map((item, index)=>{
                        if (index === order.items.length-1) {
                            return item.name+" x "+item.quantity
                        }
                        else{
                            return item.name+" x "+item.quantity+", "
                        }
                    })}</p>
                    <p>${order.amount}.00</p>
                    <p>items: {order.items.length}</p>
                    <p><span className='text-[tomato]'>&#x25cf; </span><b className='font-medium text-[#4545454]'>{order.status}</b></p>
                    <button onClick={fetchOrders} className='border-none md:py-3 py-2 rounded bg-[#ffe1e1] cursor-pointer text-[#454545] md:text-sm text-[10px]'>Track Order</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default MyOrders
