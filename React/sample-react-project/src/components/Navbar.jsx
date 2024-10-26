import React, { useState } from 'react'

const Navbar = ({appinfo,coursedata}) => {
    let [numberstate,setNumberstate] = useState(0)
    const [stringstate,setStringstate] = useState("mern")
    const [arraystate,setArraystate] = useState([numberstate,stringstate,false])
    console.log(numberstate)
    //setStringstate = "mernstack"
    console.log(stringstate)
    console.log(arraystate)
  return (
    <>
        {appinfo.appname} {appinfo.technology} {coursedata}
    </>
  )
}

export default Navbar