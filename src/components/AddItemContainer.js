import React from 'react'
import AddItemForm from './AddItemForm';
import { MyContext } from '../context/MyContext';
import { useContext } from 'react';


function AddItemContainer() {

    const info = useContext(MyContext);

    let darkMode = info.darkMode;

    return (
        <div className={`hidden md:flex col-span-3 h-full flex-col items-center border-r-2 ${darkMode ? "bg-slate-800" : "bg-white"}`}>
            <h1 className='text-center font-bold text-fuchsia-600 text-2xl pt-5'>ToDooooo!!!</h1>
            <AddItemForm/>
        </div>
    )
}

export default AddItemContainer;