import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'



export const App = () => {
  return (
    <>
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                {/* <Route path='/contact' element={<Contact />}/> */}
                <Route path='/products' element={<Products/>} />
                <Route path='/contact' element={<Contact/>}/>
            </Routes>      
         </BrowserRouter>

    </>
  )
}

export default App