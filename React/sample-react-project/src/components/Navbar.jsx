import React, { useState,useEffect } from 'react'


const Navbar = ({appinfo,coursedata}) => {
    let [numberstate,setNumberstate] = useState(0)
    const [stringstate,setStringstate] = useState("mern")
    const [arraystate,setArraystate] = useState([numberstate,stringstate,false])
    // console.log(numberstate)
    //setStringstate = "mernstack"
    // console.log(stringstate)
    // console.log(arraystate)
    const [count,setCount] = useState(100)
    useEffect(() =>{
      //  alert('effect rendered')
       console.log("count is: " +count)
    },[count])
  return (
    <>
        {/* {appinfo.appname} {appinfo.technology} {coursedata} */}
       <button className='w-[5rem] h-[3rem] text-orange-400 bg-black m-5' onClick={()=>{setCount(count+1)}}>
         Count {count}
       </button>
    </>
  )
}

export default Navbar