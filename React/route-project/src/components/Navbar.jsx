import React from 'react'
import { NavLink } from "react-router-dom"
const Navbar = () => {
  const Linksdata =[
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
  return (
    <>
      <div className='w-screen h-12 bg-cyan-500 shadow-cyan-500 shadow-md flex justify-center items-center'>
        <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-black-500'>
          App Store
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
          {/* <ul className='w-full flex flex-row justify-end items-center gap-8 font-semibold'>
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul> */}
        </div>
      </div>
    </>
  )

}
export default Navbar