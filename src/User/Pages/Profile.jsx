import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import Edit from '../Components/Edit'
import { FaCircleCheck } from 'react-icons/fa6'

function Profile() {

const [currentTab,setCurrentTab] = useState(1)

  return (
    <>
    <Header/>
    <div style={{height:'200px'}} className='bg-black'></div>
      <div style={{height:'230px', width:'230px', borderRadius:'50%', marginLeft:'75px', marginTop:'-130px'}} className='bg-white p-3'>
        <img style={{height:'230px', width:'230px', borderRadius:'50%'}} src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="user" />
      </div>
      <div className='flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text-3xl text-2xl'>USERNAME</h1>
          <FaCircleCheck className='text-blue-500 ms-3'/>
        </div>
        <Edit/>
      </div>
      <p className='text-xl font-bold px-20 mt-5'>Bio</p>
      <p className='text-justify md:px-20 px-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellat inventore error est atque similique temporibus illum qui magnam eos, libero, iusto necessitatibus tempore exercitationem. Iure rerum dolorum doloribus dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda dignissimos ex adipisci rem culpa excepturi reiciendis laboriosam, velit totam ullam quis ut est officiis beatae, repellendus ratione rerum non.</p>
      <div className='flex justify-center items-center my-8 font-bold text-lg'>
        <p onClick={()=>(setCurrentTab(1))} className={currentTab==1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Book</p>
        <p onClick={()=>(setCurrentTab(2))} className={currentTab==2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Book Status</p>
        <p onClick={()=>(setCurrentTab(3))} className={currentTab==3 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Purchase History</p>
      </div>
      { currentTab==1 && <div>Upload Books</div>}
      { currentTab==2 && <div>Upload Book Status</div>}
      { currentTab==3 && <div>Purchase History</div>}
    <Footer/>
    </>
  )
}

export default Profile
