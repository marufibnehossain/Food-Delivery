import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets';

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className='login-popup absolute z-[100] w-full h-full bg-black bg-opacity-40 grid'>
      <form className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-[30px] rounded-lg text-sm animate-[fadeIn_0.5s_ease-in-out]">
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2 className='text-3xl font-bold'>{currState}</h2>
          <img className='w-4 cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs flex flex-col gap-6">
          {currState==="Login"?<></>:<input className='outline-none border-[1px_solid_#c9c9c9] p-[10px] rounded' type="text" placeholder='Your Name' name="" id="" required />}
          <input className='outline-none border-[1px_solid_#c9c9c9] p-[10px] rounded' type="email" placeholder='Your Email' name="" id="" required />
          <input className='outline-none border-[1px_solid_#c9c9c9] p-[10px] rounded' type="password" placeholder='Password' name="" id="" required />
        </div>
        <button className='border-none p-[10px] rounded text-white bg-[#ff6347] text-[15px] cursor-pointer'>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition flex items-center gap-2 -mt-4">
          <input className='se' type="checkbox" required />
          <p>By continuing, I agree to the terms of use & policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create an account? <span className='cursor-pointer text-[#ff6347] font-medium' onClick={()=>setCurrState("Sign Up")}>Sign up</span></p>
        :<p>Already have an account? <span className='cursor-pointer text-[#ff6347] font-medium' onClick={()=>setCurrState("Login")}>Login</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
