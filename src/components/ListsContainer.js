import React from 'react'
import TodoList from './TodoList'
import CheckedItemList from './CheckedItemList'
import RecycleBin from './RecycleBin'
import { FaCog, FaMoon, FaSun } from "react-icons/fa";
import { MyContext } from '../context/MyContext';
import { useContext } from 'react';



function ListsContainer() {

    const info = useContext(MyContext);

    const sortHandler = () => {
        info.setShowModal(true);
        info.setModalData({
            modalType: "SORT",
            Mname: null,
            title: null,
            id: null
        }
        )
    }

    const resetApp = () => {
        info.setShowModal(true);
        info.setModalData({
            modalType: "RESET",
            Mname: null,
            title: null,
            id: null
        }
        )
    }


    return (
        <div className='col-span-8 h-full bg-fuchsia-600 lists-container' >
            <div className='w-full h-14 border-b-2 border-fuchsia-700 px-4 flex items-center justify-between'>
                <div className='flex'>
                    <button className='border border-2 px-4 py-1 rounded-xl text-fuchsia-200 border-fuchsia-800 hover:bg-white hover:text-fuchsia-700 transition duration-300' onClick={sortHandler}>
                        <p className='font-bold'>Sort By</p>
                    </button>
                    <button className='border text-red-800 border-2 px-4 py-1 rounded-xl border-red-600 mx-3 hover:bg-red-500 hover:text-white transition duration-300' onClick={resetApp}>
                        <p className='font-bold'>Reset All</p>
                    </button>
                </div>
                <div className='flex'>
                    {
                        info.darkMood ? <FaSun className='text-fuchsia-900 text-lg mx-2 cursor-pointer hover:text-slate-100 transition duration-200' /> : <FaMoon className='text-fuchsia-900 text-lg mx-2 cursor-pointer hover:text-slate-100 transition duration-200' />
                    }
                    <FaCog className='text-fuchsia-900 text-lg mx-2 cursor-pointer hover:text-slate-100 transition duration-200' />
                </div>
            </div>
            <div className='w-full grid grid-cols-10 box-container mt-2'>
                <div className='col-span-5 h-full flex justify-center'>
                    <TodoList />
                </div>
                <div className='col-span-5 h-full flex flex-col justify-between'>
                    <CheckedItemList />
                    <RecycleBin />

                </div>
            </div>
        </div>

    )
}

export default ListsContainer