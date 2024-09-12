import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {
  const {url, setToken} = useContext(StoreContext)
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(prevData=>({...prevData, [name]:value}))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currState === "Login") {
      newUrl+='/api/user/login'
    }
    else{
      newUrl += '/api/user/register'
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup absolute z-[100] w-full h-full bg-black bg-opacity-40 grid'>
      <form onSubmit={onLogin} className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col py-6 px-[30px] rounded-lg text-sm animate-[fadeIn_0.5s_ease-in-out] gap-8">
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2 className='text-3xl font-bold'>{currState}</h2>
          <img className='w-4 cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs flex flex-col gap-4">
          {currState==="Login"?<></>:<input className='outline-none border-[1px_solid_#c9c9c9] p-[10px] rounded' type="text" placeholder='Your Name' name="name" onChange={onChangeHandler} value={data.name} id="name-input" required />}
          <input className='outline-none border-[1px_solid_#c9c9c9] p-[10px] rounded' type="email" placeholder='Your Email' name="email" onChange={onChangeHandler} value={data.email} id="email-input" required />
          <input className='outline-none border-[1px_solid_#c9c9c9] p-[10px] rounded' type="password" placeholder='Password' name="password" onChange={onChangeHandler} value={data.password} id="password-input" required />
        </div>
        <button type='submit' className='border-none p-[10px] rounded text-white bg-[#ff6347] text-[15px] cursor-pointer'>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div>
          <div className="login-popup-condition flex items-center gap-2 -mt-5">
            <input className='se' type="checkbox" required />
            <p>By continuing, I agree to the terms of use & policy.</p>
          </div>
          {currState==="Login"
          ?<p>Create an account? <span className='cursor-pointer text-[#ff6347] font-medium' onClick={()=>setCurrState("Sign Up")}>Sign up</span></p>
          :<p>Already have an account? <span className='cursor-pointer text-[#ff6347] font-medium' onClick={()=>setCurrState("Login")}>Login</span></p>}
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
