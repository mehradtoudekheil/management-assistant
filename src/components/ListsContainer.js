import React from 'react'
import TodoList from './TodoList'
import CheckedItemList from './CheckedItemList'
import RecycleBin from './RecycleBin'
function ListsContainer() {
    return (
        <div className='col-span-8 h-full bg-fuchsia-600 lists-container' >
            <div className='w-full h-10 '>

            </div>
            <div className='w-full grid grid-cols-10 box-container'>
                <div className='col-span-5 h-full flex justify-center'>
                    <TodoList/>
                </div>
                <div className='col-span-5 h-full flex flex-col justify-between'>
                    <CheckedItemList/>  
                    <RecycleBin/>
                    
                </div>
            </div>
        </div>

    )
}

export default ListsContainer