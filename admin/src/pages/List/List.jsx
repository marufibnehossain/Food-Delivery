import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify"

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) =>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list w-9/12 ms-[max(5vw,25px)] my-12 text-[#6d6d6d] flex-col'>
      <p className='text-3xl font-semibold mb-8'>All Food List</p>
      <div className="list-table">
        <div className="list-table-format xs:grid hidden xs:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] grid-cols-[1fr_3fr_1fr] items-center xs:gap-2.5 gap-4 py-3 px-[15px] border border-[#cacaca] text-[13px] bg-[#f9f9f9]">
          <p className='font-bold'>Image</p>
          <p className='font-bold'>Name</p>
          <p className='font-bold'>Category</p>
          <p className='font-bold'>Price</p>
          <p className='font-bold'>Action</p>
        </div>
        {list.map((item, index)=>{
          return(
            <div key={index} className='list-table-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2.5 py-3 px-[15px] border border-[#cacaca] text-[13px]'>
              <img className='w-[50px]' src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor-pointer text-red-700'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
