import React from 'react'
import AddItemForm from './AddItemForm';

function AddItemContainer() {



    return (
        <div className='col-span-3 h-full flex flex-col items-center border-r-2'>
            <h1 className='text-center font-bold text-fuchsia-600 text-2xl pt-5'>ToDooooo!!!</h1>
            <AddItemForm/>
        </div>
    )
}

export default AddItemContainer;