import React from 'react'
import{BsSearch} from 'react-icons/bs'
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import Cartcount from './Cartcount';
const NavBar = () => {
  return (
    <div className='sticky top-0 bg-white z-10'>
      <div className='container hidden lg:block'>
        <div className='flex justify-between items-center p-8'>
            <h1 className='text-4xl font-medium'>Shop</h1>
      <div className='relative w-full max-w-[500px]'>
        <input
         className='bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full' 
         type='text' placeholder='Search Product...'/>
    <BsSearch className='absolute top-0 right-0 mt-4 mr-5 text-gray-500' size={20}/>
      </div>

<div className='flex gap-4'>
    <div className='icon__wrapper'>
        <AiOutlineUser />
        </div>
    <div className='icon__wrapper relative '>
    <AiOutlineShoppingCart />
    <Cartcount size='w-[25px] h-[25px]' />
        </div>
    
     </div>


        </div>
      </div>
    </div>
  )
}

export default NavBar