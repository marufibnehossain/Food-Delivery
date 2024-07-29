import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodStore from '../../Components/FoodStore/FoodStore';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='bg-transparent'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodStore category={category} />
    </div>
  )
}

export default Home
