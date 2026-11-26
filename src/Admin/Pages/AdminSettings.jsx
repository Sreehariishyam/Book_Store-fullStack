import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import Footer from '../../Components/Footer'
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
  return (
    <>
       <AdminHeader/>
       <div className='md:grid grid-cols-5'>
        {/* 1st section */}
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        {/* 2nd section 4 grid */}
        <div className='col-span-4 p-10'>
          <h1 className='font-bold text-3xl text-center'>Settings</h1>
          <div className='grid grid-cols-2 items-center'>
          {/* 1st section */}
          <div>
          <h2 className='font-bold text-2xl mb-10'>Welcome, Admin 👋</h2>
          <p className='text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>
          <h4 className='my-5 font-bold text-lg'>🔧 What You Can Manage in This Section:</h4>
          <ul>
            <li>✏️ Update personal details (name, email, role, profile picture)</li>
            <li>🔐 Change or reset your password</li>
            <li>📢 Configure notification and alert preferences</li>
            <li>👥 Manage permissions based on assigned access level</li>
            <li>🧩 Customize dashboard visibility and layout</li>
          </ul>
          <p className='text-justify my-10'>Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>
          </div>
          {/* 2nd Section */}          
          <div className='flex justify-center items-center m-10 flex-col bg-blue-100 p-10'>
                    <label htmlFor="userProfile">
                      <input type="file" id='userProfile' hidden />
                      <img style={{height:'100px', width:'100px', borderRadius:'50%'}} className='z-51' src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="user" />
                      <button style={{marginLeft:'60px', marginTop:'-25px'}} className='bg-black text-white px-2 py-2 rounded z-52'><FaPen/></button>
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
                    {/* Reset & Update */}
                    <div className='flex justify-end mt-5 px-5 w-full'>
                      <button className='bg-yellow-600 text-white px-5 py-2 font-bold rounded'>RESET</button>
                      <button className='bg-green-600 text-white px-5 py-2 font-bold rounded ms-3'>UPDATE</button>
                    </div>
                  </div>
          </div>
          </div>
        </div>
      
       <Footer/>
    </>
  )
}

export default AdminSettings
