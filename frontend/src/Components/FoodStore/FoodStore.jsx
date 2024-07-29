import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodStore = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-store mt-7' id='food-store'>
      <h2 className='text-[#262626] font-medium text-[max(30px,24px)]'>Top Dishes Near You</h2>
      <div className="food-store-list grid grid-cols-4 mt-7 gap-7 gap-y-12">
        {food_list.map((item, index)=>{
            return(
                <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            )
        })}
      </div>
    </div>
  )
}

export default FoodStore
