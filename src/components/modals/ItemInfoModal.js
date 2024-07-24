import React from 'react'
import { MyContext } from '../../context/MyContext'
import { useContext } from 'react'
import { FaTimes } from "react-icons/fa"

function ItemInfoModal() {


    const info = useContext(MyContext);

    let data = info.modalData;

    const closeModal = () => {
        info.setShowModal(false)
    }

    let myItemArray = info.todos.filter(item => item.id == data.id);
    let myItem = myItemArray[0];


    return (
        <div className='w-96 h-72 absolute left-1/3 bg-white rounded-xl shadow shadow-md shadow-slate-400 top-20'>
            <div className='w-full rounded-tl-xl px-4 flex justify-between items-center rounded-tr-xl h-16 bg-sky-500'>
              <div></div>
              <h6 className='text-white font-bold'>
                    {myItem.title}
                </h6>
              <button type='button' onClick={closeModal}><FaTimes className='text-rose-600'/></button>
            </div>
            <div className='border-b-2 h-36 flex justify-center items-center'>
                <p className='text-gray-600 font-bold'>
                    {myItem.explane}
                </p>
            </div>
            <div className='h-20 w-full flex flex-col justify-around'>
                <div className='flex items-center justify-between px-3'>
                    <div className='flex'>
                        <p className='font-bold mx-1 text-rose-500'>Importance : </p>
                        <p className='font-bold'>{myItem.importance}</p>
                    </div>
                    <div className='flex'>
                        <p className='font-bold mx-1 text-green-500'>Reminder : </p>
                        <p className='font-bold'>{myItem.reminder ? "On" : "Off"}</p>
                    </div>
                </div>
               
                    {myItem.reminder && <div className='w-full flex justify-around'>
                        <p>{myItem.time}</p>
                        <p>{myItem.date}</p>
                        </div>}
                
            </div>
        </div>
    )
}

export default ItemInfoModal