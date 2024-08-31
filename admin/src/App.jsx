import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <hr />
      <div className="app-content flex">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
