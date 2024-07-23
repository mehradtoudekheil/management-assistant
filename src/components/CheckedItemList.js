import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { FaCircleExclamation, FaCircleInfo, FaCircleCheck, FaRegTrashCan, FaClock } from "react-icons/fa6";



function CheckedItemList() {

    const info = useContext(MyContext)

    const reDoHandler = (e)=>{
        let id = e.target.dataset.id;
        let reDoItemArray =  info.checkedItems.filter(item => item[0].id == id);
        let reDoItem = reDoItemArray[0][0];
        console.log(reDoItem);

        let myTodos = info.todos;
        myTodos.push(reDoItem)
        info.setTodos(myTodos)

        let newCheckedItems = info.checkedItems.filter(item => item[0].id != id);
        // console.log(newCheckedItems);
        info.setCheckedItems(newCheckedItems)
    }



  return (
    <div className='w-4/5 h-64  bg-fuchsia-100 rounded-xl shadow shadow-xl shadow-fuchsia-900'>
       
       <div className='h-14 w-full rounded-tl-xl rounded-tr-xl bg-emerald-400'>
       <h6 className='text-emerald-800 font-bold text-center py-4'>Checked Items</h6>
       </div>
       <div className='w-full h-48 overflow-y-scroll'>
        {
             info.checkedItems.length < 1 ? <div className='flex flex-col items-center'>
             <p className='text-center mt-10 text-rose-500 font-bold'>There is no task to do!!!</p>
             <FaCircleExclamation className='text-8xl mt-10 text-rose-500' />
         </div> : <ul className='w-full flex flex-col items-center py-5'>
             {
                 info.checkedItems.map((item) => {
                     return <li key={item.id} className='w-11/12 bg-white py-2 rounded-xl shadow-md shadow shadow-slate-300  px-3 my-1'>
                         <div className='flex justify-between items-center w-full'>
                             <div className='flex items-center h-full'>
                                 <p className='px-3  border-r-2 text-slate-500'>{item[0].id}</p>
                                 <p className='font-bold px-3'>{item[0].title}</p>
                             </div>
                             <div className='flex items-center'>
                                 <div className='h-3 w-3 mx-5 rounded-full'>
                                 </div>
                                
                                 <p  className='mx-1 text-sky-500' data-id={item[0].id} onClick={(e)=>reDoHandler(e)}>d</p>
                                 <FaRegTrashCan className='mx-1 text-rose-400' />
                               
                             </div>
                         </div>
                        
                     </li>
                 })
             }
         </ul>
     }
       </div>
        
    </div>

  )
}

export default CheckedItemList