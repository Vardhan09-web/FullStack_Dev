import React from 'react'
import { Cross, User, X } from 'lucide-react'
import { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { Login, Register } from "../api/api"


const Navbar = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const nameRef = useRef('')
  const phoneRef = useRef('')

  const Linksdata = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Products',
      path: '/products'
    },
    {
      title: 'Contact',
      path: '/contact'
    }
  ]
  const handleLogin = async (e) => {
    e.preventDefault()
    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    try {
      const response = await Login(credentials)
      const data = await JSON.stringify(response.data)
      if (response.status === 200) {
        console.log(response.data.token)
        setShowLogin(false)
      } else {
        console.log("Login Error" + data)
      }

    } catch (error) {
      console.error(error)
    }

    console.log(credentials)
  }
  const handleRegister = async (e) => {
    e.preventDefault()
    const credentials = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value

    }
    try {
      const response = await Register(credentials)
      const data = await JSON.stringify(response.data)
      if (response.status === 200) {
        console.log("Signup Success" + data)
        setShowRegister(false)
        setShowLogin(true)
      } else {
        console.log("Signup Error" + data)
      }

    } catch (error) {
      console.error(error)
    }

    console.log(credentials)
  }
  const switchAuth = () => {
    if (showLogin) {
      setShowLogin(false)
      setShowRegister(true)
    } else if (showRegister) {
      setShowLogin(true)
      setShowRegister(false)
    }
  }
  return (
    <>
      <div className='w-screen h-12  shadow-cyan-400 shadow shadow-lg-m flex justify-center items-center'>
        <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-black-500'>
          SmArt Store
        </div>
        <div className='w-[40%] flex justify-end items-center'>
          <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
            {Linksdata.map((link, index) => (
              <NavLink to={link.path} key={index} className='h-[60%] w-20 hover:bg-cyan-400 hover:text-white flex justify-center items-center rounded-sm'>
                {link.title}
              </NavLink>
            ))
            }
          </div>
          <button className="h-9 w-10 flex justify-center items-center border-2 border-black rounded-full hover:border-cyan-500 hover:text-cyan-500 ml-4 shadow-md" onClick={() => { setShowLogin(!showLogin) }}>
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
      {showLogin && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
          <div className='h-[45%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
            <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
              <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-cyan-500'>Login</h1>
                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowLogin(!showLogin) }}>
                  <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                </div>
              </div>
              <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleLogin}>
                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required />
                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required />
                <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-cyan-400 bg-cyan-500 text-white rounded-sm outline-none">Login</button>
              </form>
              <div className="h-[50%] w-[80%] flex justify-center items-start">
                <p className="cursor-pointer text-green-500 hover:text-green-600 p-2"  onClick={switchAuth}>Register ?</p>
              </div>
            </div>
          </div>
        </div>
      )
      }
      {showRegister && (
        <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
          <div className='h-[90%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
            <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
              <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-cyan-500'>Register</h1>
                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowRegister(!showRegister) }}>
                  <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                </div>
              </div>
              <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleRegister}>
                <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required />
                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required />
                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required />
                <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required />
                <button type="submit" className="w-full h-[5rem] shadow-lg shadow-gray-400 hover:shadow-cyan-400 bg-cyan-500 text-white rounded-sm outline-none">Register</button>
              </form>
              <div className="h-[10%] w-[80%] flex justify-center items-start">
                <p className="cursor-pointer text-green-500 hover:text-green-600" onClick={switchAuth}> Login ?</p>
              </div>
            </div>
          </div>
        </div>
      )
      }

    </>
  )

}
export default Navbar