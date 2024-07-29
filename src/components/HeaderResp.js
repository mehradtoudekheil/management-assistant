import React from 'react'
import { FaBars } from "react-icons/fa6";

function HeaderResp() {
  return (
    <div className='h-10 bg-fuchsia-600 col-span-11 flex md:hidden'>
        <div className='w-full h-full px-4 flex items-center justify-end'>
            <FaBars className='text-white'/>
        </div>
    </div>
  )
}

export default HeaderResp