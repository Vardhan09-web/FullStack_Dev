import React from 'react'

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
        <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-blue-500'>
          App Store
        </div>
        <div className='w-[40%] flex justify-end items-center'>
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