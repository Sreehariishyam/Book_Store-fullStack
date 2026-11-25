import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import Footer from '../../Components/Footer'


function AdminDashboard() {
  return (
    <>
       <AdminHeader/>
       <div className='md:grid grid-cols-5'>
        {/* 1st section */}
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        {/* 2nd section 4 grid */}
        <div className='col-span-4'>
          Admin Dashboard
        </div>
       </div>
       <Footer/>
    </>
    
  )
}

export default AdminDashboard
