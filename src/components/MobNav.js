import React from 'react'
import{BsSearch} from 'react-icons/bs'
import { AiOutlineUser, AiOutlineShoppingCart,AiOutlineMenu } from "react-icons/ai";
import Cartcount from './Cartcount';
const MobNav = () => {
  return (
    <div className='sticky top-0 bg-white z-10'>
      <div className='container p-8 lg:hidden'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-6'>
            <AiOutlineMenu size={30} />
            <BsSearch size={24}/>
            </div>
            <h1 className='text-4xl '>Shop</h1>

<div className='flex gap-4 text-[30px]'>
 <AiOutlineUser /></div>
    <div className=' relative cursor'>
    <AiOutlineShoppingCart size={30} />
    <Cartcount size='w-[20px] h-[20px]' />
        </div>
 


        </div>
      </div>
    </div>
  )
}

export default MobNav
