import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import WebLayout from './layouts/WebLayout'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminProducts from './pages/Admin/AdminProducts'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminSettings from './pages/Admin/AdminSettings'
export const App = () => {
  return (
    <>
        <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/contact' element={<Contact />} />
                    </Route>
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                       <Route path='/admin/products' element={<AdminProducts/>} />
                       <Route path='/admin/users' element={<AdminUsers/>} /> 
                       <Route path='/admin/settings' element={<AdminSettings/>} />
                    </Route>
                </Routes>
            </BrowserRouter>

    </>
  )
}

export default App