import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLeftBar = () => {
  const Linksdata = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard'
    },
    {
      title: 'Products',
      path: '/admin/products'
    },
    {
      title: 'Users',
      path: '/admin/users'
    },
    {
      title: 'Settings',
      path: '/admin/settings'
    }
  ]
  return (
    <div className='w-full h-screen shadow-cyan-400 shadow-md flex justify-center items-center'>
      <div className='h-full w-full flex flex-col'>
        <div className='h-[10%] w-full text-blue-600 flex justify-center font-bold text-2xl items-center'>
          SmArt Store
        </div>
        <div className='h-[80%] w-full flex flex-col items-center '>
          {Linksdata.map((link, index) => (
            <NavLink to={link.path} key={index} className='h-[10%] w-full px-10 hover:bg-cyan-500/80  hover:text-white flex justify-start items-center rounded-sm shadow-md'>
              {link.title}
            </NavLink>
          ))
          }
        </div>
        <div className='h-[10%] w-full flex items-end'>
          <div className=' px-8 bg-red-500 w-full h-2/3 text-white flex justify-start font-bold items-center '>
            Logout
         </div> 
        </div>
      </div>
    </div>
  )
}

export default AdminLeftBar