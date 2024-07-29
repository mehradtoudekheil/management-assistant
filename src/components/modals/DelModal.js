import React from 'react'
import { MyContext } from '../../context/MyContext';
import { useContext } from 'react';


function DelModal() {

    const info = useContext(MyContext);

    let data = info.modalData;

    const closeModal = () => {
        info.setShowModal(false)
    }

    const deleteItem = () => {
        let id = data.id;
        let newDeletedItems = info.deletedItems.filter(item => item.id != id);
        info.setDeletedItems(newDeletedItems)
        closeModal()
    }
  return (
    <div className={`w-96 h-72 absolute left-1/3 rounded-xl shadow shadow-md  top-20 ${info.darkMode ? "bg-slate-500" : "bg-white shadow-slate-400"}`}>
                <div className='w-full rounded-tl-xl flex justify-center items-center rounded-tr-xl h-16 bg-red-600'>
                    <h6 className='text-white font-bold'>
                        {data.Mname}
                    </h6>
                </div>
                <div className='border-b-2 h-36 flex justify-center items-center'>
                <p className={`font-bold ${info.darkMode ? "text-white" : "text-gray-600"}`}>
                        {data.title}
                    </p>
                </div>
                <div className='h-20 flex items-center justify-start flex-row-reverse'>
                    <button className='bg-red-600 text-white rounded mr-10 font-bold w-12 h-8' onClick={deleteItem}>Yes</button>
                    <button className='rounded w-12 h-8 mx-3 bg-slate-400 text-white font-bold' onClick={closeModal}>No</button>
                </div>
            </div>
  )
}

export default DelModal