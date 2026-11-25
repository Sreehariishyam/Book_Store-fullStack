import React from 'react'

function UploadStatus() {
  return (
    <div className='p-30 my-15 shadow rounded'>
      {/* Duplicate book status */}
      <div className='bg-gray-100 rounded p-5 mt-4'>
        <div className='md:grid grid-cols-[3fr_1fr]'>
        {/* 1st section */}
        <div className='px-4'>
            <h1 className='text-2xl'>Title</h1>
            <h1 className='text-xl'>Author</h1>
            <h1 className='text-lg text-blue-600'>$ Price</h1>
            <p className='font-bold mt-10'>Abstract : </p>
            <div className='flex mt-10'>
                <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-vector/20220322/ourmid/pngtree-pending-stamp-illustration-symbol-stamp-vector-png-image_3791329.png" alt="pending" />
                <img width={'120px'} height={'120px'} src="https://png.pngtree.com/png-clipart/20230213/original/pngtree-red-label-sold-png-image_8954184.png" alt="sold" />
                <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/thumbnails/008/478/231/small/appoved-texturised-rubber-stamp-over-isolated-background-png.png" alt="approved" />
            </div>
        </div>
        {/* 2nd Section */}
        <div className='px-10 mt-5 md:mt-0'>
            <img className='w-full' src="https://m.media-amazon.com/images/I/71-EPF9XllL._UF1000,1000_QL80_.jpg" alt="no image" />
            <div className='flex justify-end'>
                <button className='bg-red-600 text-white font-bold px-3 py-2 rounded mt-5'>DELETE</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UploadStatus
