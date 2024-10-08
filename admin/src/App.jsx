import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './pages/Update/Update';
import Home from './pages/Home/Home'

const App = () => {
  const url = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className=''>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content flex">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url} />} />
          <Route path='/orders' element={<Orders url={url} />} />
          <Route path='/update/:id' element={<Update url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
