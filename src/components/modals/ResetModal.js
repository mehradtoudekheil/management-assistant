import React from 'react'
import { MyContext } from '../../context/MyContext'
import { useContext } from 'react'


function ResetModal() {

    const info = useContext(MyContext);

    const closeModal = () => {
        info.setShowModal(false)
    }

    const resetLists = ()=>{
        info.setTodos([]);
        info.setCheckedItems([]);
        info.setDeletedItems([]);
        closeModal();
    }


  return (
    <div className='w-96 h-72 absolute left-1/3 bg-white rounded-xl shadow shadow-md shadow-slate-400 top-20'>
    <div className='w-full rounded-tl-xl flex justify-center items-center rounded-tr-xl h-16 bg-red-600'>
        <h6 className='text-white font-bold'>
            RESET
        </h6>
    </div>
    <div className='border-b-2 h-36 flex justify-center items-center'>
        <p className='text-gray-600 font-bold'>
            Do You Want To Reset All Items?
        </p>
    </div>
    <div className='h-20 flex items-center justify-start flex-row-reverse'>
        <button className='bg-red-600 text-white rounded mr-10 font-bold w-12 h-8' onClick={resetLists}>Yes</button>
        <button className='rounded w-12 h-8 mx-3 bg-slate-400 text-white font-bold' onClick={closeModal}>No</button>
    </div>
</div>
  )
}

export default ResetModal