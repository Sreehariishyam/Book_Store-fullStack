import React from 'react'

function AdminHeader() {
  return (
    <>
    <div className='flex justify-between items-center p-3 md:px-20'>
      {/*Header top  */}
      {/* Logo */}
        <div className='flex items-center'>
            <img width={'50px'} height={'50px'} src="https://png.pngtree.com/png-vector/20241120/ourmid/pngtree-vibrant-collection-of-stationery-items-featuring-books-and-pencils-for-learning-png-image_14499688.png" alt="logo" />
            <h1 className='text-2xl ms-3 font-bold'>Bookstore</h1>
          </div>
          {/* Logout */}
          <button className='bg-black text-white px-3 py-2 rounded flex items-center hover:bg-white hover:text-black border font-bold'>Logout</button>
      </div>
      {/* Header marque */}
      <div className='bg-black text-white p-3'>
        <marquee>Welcome Admin, Your all set to manage and monitor the system, Let's get into work!!!</marquee>
      </div>
    </>
  )
}

export default AdminHeader
