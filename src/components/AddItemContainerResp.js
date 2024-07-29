import React from 'react'

function AddItemContainerResp() {
  return (
    <div className='flex md:hidden col-span-11 h-28'>
        <div className='w-full h-full flex flex-col items-center p-2 justify-between'>
            <h2 className='text-center font-bold text-3xl text-fuchsia-600'>Todo</h2>
            <button className='py-2 px-6 rounded-xl border border-fuchsia-300 font-bold hover:bg-white hover:text-fuchsia-600 text-white bg-fuchsia-400 transition duration-300'>Add Todo</button>
        </div>
    </div>
  )
}

export default AddItemContainerResp