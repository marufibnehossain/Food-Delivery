import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodStore from '../../Components/FoodStore/FoodStore';
import AppDownload from '../../Components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='home bg-transparent'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodStore category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
