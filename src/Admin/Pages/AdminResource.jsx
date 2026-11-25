import React, { useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import Footer from '../../Components/Footer'

function AdminResource() {

const [currentTab,setCurrentTab] = useState(1)

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
          <h1 className='text-center my-10 text-3xl font-bold'>All Resources</h1>
          <div className='flex justify-center items-center my-8 font-bold text-lg'>
        <p onClick={()=>(setCurrentTab(1))} className={currentTab==1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Books</p>
        <p onClick={()=>(setCurrentTab(2))} className={currentTab==2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Users</p>
      </div>
      {/* Tab contents */}
       { currentTab==1 && 
       <div className='md:grid grid-cols-4 w-full my-10'>
                {/* Duplicate according to the book */}
                <div className='shadow rounded p-3 m-4 md:my-0'>
                    <img width={'100%'} height={'100px'} src="https://m.media-amazon.com/images/I/71-EPF9XllL._UF1000,1000_QL80_.jpg" alt="book" />
                    <div className='flex flex-col justify-center items-center mt-4'>
                        <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
                        <h3 className='text-lg font-bold'>Title</h3>
                        <p className='font-bold text-red-500'>$ 123</p>   
                        <button className='bg-green-600 text-white p-2 rounded w-full'>Approve</button>               
                </div>
                </div>
            </div>
       }
      { currentTab==2 && 
      <div className='md:grid grid-cols-3 w-full my-5'>
        {/* Duplicate according to the users */}
        <div className='rounded bg-gray-200 p-2 m-2'>
          <p className='text-red-500 font-bold text-md'>ID : </p>
          <div className='flex items-center'>
            <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="no image" />
            <div className='ms-5 flex flex-col w-full'>
              <h4 className='text-blue-400 font-bold text-md'>Username</h4>
              <p className='text-xs'>username@gmail.com</p>
            </div>
          </div>
        </div>
        </div>}
        </div>
       </div>
       <Footer/>
    </>
  )
}

export default AdminResource
