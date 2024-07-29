import React from 'react'
import { MyContext } from '../context/MyContext'
import { useContext } from 'react'
import TodoList from './TodoList';
import CheckedItemList from './CheckedItemList';
import RecycleBin from './RecycleBin';

function ListContainerResp() {

    const info = useContext(MyContext);

    let boxContainer;

    switch(info.showBoxes){
        case  "TODO" :
            boxContainer = <TodoList/>
            break;
            case "CHECKED" : 
            boxContainer = <CheckedItemList/>
            break;
            case "BIN" : 
            boxContainer = <RecycleBin/>
            break;
            default : 
            boxContainer = <TodoList/>
    }

    const filterHandler = (e)=>{
        info.setShowBoxes(e.target.dataset.box)
    }



  return (
    <div className='block md:hidden lists-container bg-fuchsia-600 col-span-11 h-screen'>
      <div className='flex w-full h-full flex-col py-4 items-center'>
        <div className='h-14 bg-fuchsia-100 w-11/12 rounded-xl mb-3 flex items-center justify-around'>
        <button className='w-32 py-1 rounded-md bg-sky-400 text-white font-bold' data-box="TODO" onClick={(e)=>filterHandler(e)}>Todo List</button>
        <button className='w-32 py-1 rounded-md bg-green-400 text-white font-bold' data-box="CHECKED" onClick={(e)=>filterHandler(e)}>Checked Item</button>
        <button className='w-32 py-1 rounded-md bg-red-400 text-white font-bold' data-box="BIN" onClick={(e)=>filterHandler(e)}>Recycle Bin</button>
        </div>
        {boxContainer}
      </div>
    </div>
  )
}

export default ListContainerResp