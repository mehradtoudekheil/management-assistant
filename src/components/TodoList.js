import React, { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { FaCircleExclamation, FaCircleInfo, FaCircleCheck, FaRegTrashCan, FaClock } from "react-icons/fa6";

function TodoList() {

    const info = useContext(MyContext);
    const [showExplane, setShowExplane] = useState(false);

    const checkItemHandler = (e) => {
        // console.log(10);
        let id = e.target.dataset.id;
        // console.log(id);
        let checkedItemIndex = info.todos.filter(item => item.id == id);
        console.log(checkedItemIndex);

        let myChekedItems = info.checkedItems;

        myChekedItems.push(checkedItemIndex);

        info.setCheckedItems(myChekedItems);
        // info.setCheckedItems(myChekedItems =>[info.checkedItemIndex , ...myChekedItems])

        // console.log(info.checkedItems);

        let newTodoList = info.todos.filter(item => item.id != id);
        info.setTodos(newTodoList);
    }



    return (
        <div className='h-full w-4/5 bg-fuchsia-100 rounded-xl shadow shadow-xl shadow-fuchsia-900'>
           
       <div className='h-14 w-full rounded-tl-xl rounded-tr-xl bg-zinc-400'>
       <h6 className='text-zinc-900 font-bold text-center py-4'>Tasks To Do</h6>
       </div>
          
            <div className='w-full overflow-y-scroll'>
                {
                    info.todos.length < 1 ? <div className='flex flex-col items-center'>
                        <p className='text-center mt-10 text-rose-500 font-bold'>There is no task to do!!!</p>
                        <FaCircleExclamation className='text-8xl mt-10 text-rose-500' />
                    </div> : <ul className='w-full flex flex-col items-center py-5'>
                        {
                            info.todos.map((item) => {
                                return <li key={item.id} className='w-11/12 bg-white py-2 rounded-xl shadow-md shadow shadow-slate-300  px-3 my-1'>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='flex items-center h-full'>
                                            <p className='px-3  border-r-2 text-slate-500'>{item.id}</p>
                                            <p className='font-bold px-3'>{item.title}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='h-3 w-3 mx-5 rounded-full' style={{ backgroundColor: item.color }}>
                                            </div>
                                            <FaClock className='mx-1 text-gray-200' />
                                            <p data-id={item.id} onClick={(e) => { checkItemHandler(e) }} className='mx-1 text-lime-500' >d</p>
                                            <FaRegTrashCan className='mx-1 text-rose-400' />
                                            <FaCircleInfo className='text-gray-400' onClick={() => setShowExplane(!showExplane)} />
                                        </div>
                                    </div>
                                    {
                                        showExplane ? <div>
                                            <p className='text-center text-slate-700 py-1'>{item.explane}</p>
                                        </div> : <></>
                                    }
                                </li>
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default TodoList