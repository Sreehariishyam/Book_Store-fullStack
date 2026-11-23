import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {

const [offCanvas,setOffCanvas] = useState(false)

  return (
    <div>
      {/* Buttton  */}
      <button onClick={()=>setOffCanvas(true)} className='bg-black text-white font-bold p-2 flex items-center justify-center rounded hover:bg-white hover:text-black border'>
        <FaPen className='me-2'/> EDIT
      </button>
      {/* OffCanvas */}
      {
        offCanvas &&
        <div>
        <div className='bg-gray-500/75 inset-0 fixed w-full h-full'></div>
        <div className='bg-white h-full z-50 fixed w-90 top-0 left-0'>
        {/* Head */}
        <div className='flex justify-between items-center mb-5 bg-black text-white p-3 text-2xl'>
          <h1>Update User Profile</h1>
          <FaX onClick={()=>setOffCanvas(false)}/>
        </div>
        {/* Body */}
        <div className='flex justify-center items-center my-5 flex-col'>
          <label htmlFor="userProfile">
            <input type="file" id='userProfile' hidden />
            <img style={{height:'100px', width:'100px', borderRadius:'50%'}} className='z-51' src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="user" />
            <button style={{marginLeft:'60px', marginTop:'-25px'}} className='bg-black text-white px-2 py-2 rounded z-52 fixed'><FaPen/></button>
          </label>
          {/* Username */}
          <div className='mt-10 mb-3 w-full px-5'>
            <input type="text" placeholder='Username' className='w-full rounded p-2 bg-gray-200' />
          </div>
          {/* Password */}
          <div className='mb-3 w-full px-5'>
            <input type="text" placeholder='New Password' className='w-full rounded p-2 bg-gray-200' />
          </div>
          {/* New Password */}
          <div className='mb-3 w-full px-5'>
            <input type="text" placeholder='Confirm Password' className='w-full rounded p-2 bg-gray-200' />
          </div>
          {/* Bio */}
          <div className='mb-3 w-full px-5'>
            <input type="text" placeholder='Bio' className='w-full rounded p-2 bg-gray-200' />
          </div>
          {/* Reset & Update */}
          <div className='flex justify-end mt-5 px-5 w-full'>
            <button className='bg-yellow-600 text-white px-5 py-2 font-bold rounded'>RESET</button>
            <button className='bg-green-600 text-white px-5 py-2 font-bold rounded ms-3'>UPDATE</button>
          </div>
        </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Edit