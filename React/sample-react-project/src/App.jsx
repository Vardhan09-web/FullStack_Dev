import React from 'react'
import Navbar from './components/navbar'

const App = () => {
    const data = {
        appname: "react-app=>",
        technology: "frontend framework=>"
    }
   let course = "mern stack development"

  return (
    <>
       <h1 className="text-blue-500 font-bold underline">< Navbar appinfo={data}  coursedata={course}/></h1>
       
    </>
  )
}

export default App