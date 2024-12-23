import React, { useEffect, useState, useRef } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
// import { Loader2, Pencil, Trash, TriangleAlert } from 'lucide-react'
import { Loader2, Pencil, Trash, Plus, TriangleAlert, X } from 'lucide-react'
import { getUsers, addUser, editUser,deleteUser } from '../../api/api'
import { toast } from 'sonner'


const AdminUsers = () => {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)

  const [currentUser, setCurrentUser] = useState(null)
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const nameRef = useRef('')
  const emailRef = useRef('')
  const phoneRef = useRef(0)
  const passwordRef = useRef('')
  const roleRef = useRef('')
  const fetchData = async () => {
    try {
      const res = await getUsers()
      if (res.status === 200) {
        setUsers(res.data)
      }

    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }

  const handleuserAdd = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const role = roleRef.current.value;
    const password=passwordRef.current.value;
  
    // Validate inputs
    if (!name || !email || !phone || !role || !password) {
      toast.error("All fields are required!");
      return;
    }
  
    const user = { name, email, phone, password, role };
    
    try {
      const response = await addUser(user);
      if (response.status === 200) {
        console.log("User Added");
        toast.success("User Added!");
        setShowAdd(false);
        fetchData();
      }
  
    } catch (error) {
      console.error(error);
      toast.error("Failed to add user!");
    }
  }

  const editHelper = (user) => {
    setCurrentUser(user)
    setShowEdit(true)

  }

  const handleEdit = async (e) => {
    e.preventDefault()
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      role: roleRef.current.value
    }
    try {
      const response = await editUser(user, currentUser._id)
      if (response.status === 200) {
        setShowEdit(!showEdit)
        fetchData()
        toast.info("User Updated !")
      }
    } catch (error) {
      toast.error("Error while Updating")
    }
  }

  const handleuserDelete = async (id) => {
    try {
      const response = await deleteUser(id)
      if (response.status === 200) {
        console.log("User Deleted!")
        toast.error("User deleted!")
        fetchData()
      }
    } catch (error) {
      console.error(error)
    }
  }
  

  useEffect(() => {
    fetchData()
  }, [])
  console.log(users)
  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-green-500 h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  if (!users || users.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Users Available !
          </p>
        </div>
      </>
    )
  }
  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <div className='w-full  flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
        <AdminPageHeader title='Users' />
        <button className='w-10 h-10 font-bold flex justify-center items-center border-2 border-green-500 rounded-md
         text-green-500 shadow-md hover:text-white hover:bg-green-500 hover:shadow-md
          hover:shadow-green-400'
          onClick={() => setShowAdd(!showAdd)} >
          <Plus className='w-8 h-8' />
        </button>
      </div>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md '>
        <thead className='shadow-md font-bold text-cyan-500 text-left rounded-md'>
          <tr>
          <th className='p-6'>User id</th>
            <th className='p-6'>Name</th>
            
            <th className='p-6'>Email</th>    
            <th className='p-6'>Phone</th>
            <th className='p-6'>password</th>
            <th className='p-6'>Role</th>
            
            <th className='p-6'>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            users.map((user, index) => (
              <tr key={index}>
                <td className='p-4'>{user._id}</td>
                <td className='p-4'>{user.name}</td>

               
                <td className='p-4'>{user.email}</td>
                <td className='p-4'>{user.phone} </td>
                <td className='p-4'>{user.password}</td>
                <td className='p-4'>{user.role}</td>
               
                <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-green-500 border-2 p-1 rounded-md text-green-500 shadow-md
               hover:bg-green-500 hover:text-white hover:shadow-green-500' onClick={() => { editHelper(user) }}>
                    <Pencil />
                  </button>
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500' onClick={() => { handleuserDelete(user._id) }}>
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {showAdd && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className='h-[70%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
              <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                  <h1 className='w-1/2 text-left text-xl my-6 font-bold text-green-500'>Add User</h1>
                  <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowAdd(!showAdd) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleuserAdd}>
                  <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required />
                  <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required />
                  <input ref={phoneRef} type="tel" name="" id="phone" placeholder='Phone Number' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required />
                   <input ref={passwordRef} type="text" name="" id="price" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required /> 
                  <input ref={roleRef} type="text" name="" id="role" placeholder='Role' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required />
                  <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-green-400 bg-green-500 text-white rounded-sm outline-none">Add</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )} 


{showEdit && (
  <>
    <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
      <div className='h-[55%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
          <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
            <h1 className='w-1/2 text-left text-xl my-6 font-bold text-green-500'>Edit Product</h1>
            <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowEdit(!showEdit) }}>
              <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
            </div>
          </div>
          <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleEdit}>
            <input ref={nameRef} type="text" name="" id="name" placeholder='Name' defaultValue={currentUser.name} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required autoFocus />
            <input ref={emailRef} type="email" name="" id="email" placeholder='Email' defaultValue={currentUser.email} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required />
            <input ref={phoneRef} type="tel" name="" id="phone" placeholder='Phone' defaultValue={currentUser.phone} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required />
            <input ref={roleRef} type="text" name="" id="role" placeholder='role' defaultValue={currentUser.role} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required />
            <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-green-400 bg-green-500 text-white rounded-sm outline-none">Save</button>
          </form>
        </div>
      </div>
    </div>
  </>
)}

    </div>
  )
}

export default AdminUsers