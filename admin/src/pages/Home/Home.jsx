import React from 'react'
import { assets } from '../../assets/assets'

const Home = () => {
  return (
    <div style={{backgroundImage:`url(${assets.header_img})`}} className='w-full h-96 flex flex-col gap-2.5 justify-center items-center bg-cover bg-center'>
      <h1 className='text-3xl font-semibold text-white'>Admin Dashboard</h1>
      <h1 className='text-lg font-medium text-white'>Welcome to the Admin Dashboard</h1>
    </div>
  )
}

export default Home
