import React, { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { FaCircleExclamation, FaCircleInfo, FaRegTrashCan, FaClock } from "react-icons/fa6";

// import images
import trashImg from "./../assets/img/icons/trash.png"
import checkImg from "./../assets/img/icons/check.png"
import infoImg from "./../assets/img/icons/info.png"
import clockImg from "./../assets/img/icons/clock.png"
import listImg from "./../assets/img/list.png"

function TodoList() {

    const info = useContext(MyContext);

    const checkItemHandler = (e) => {
        let id = e.target.dataset.id;
        let checkedItemIndex = info.todos.filter(item => item.id == id);
        // console.log(checkedItemIndex);

        let myChekedItems = info.checkedItems;

        myChekedItems.push(checkedItemIndex);

        info.setCheckedItems(myChekedItems);


        let newTodoList = info.todos.filter(item => item.id != id);
        info.setTodos(newTodoList);
    }

    const deleteHandler = (e) => {
        let id = e.target.dataset.id;
        let deletedItem = info.todos.filter(item => item.id == id);

        let myDeletedItems = info.deletedItems;
        myDeletedItems.push(deletedItem[0]);
        info.setDeletedItems(myDeletedItems);


        let newTodoList = info.todos.filter(item => item.id != id);
        info.setTodos(newTodoList);

    }

    const showInformation = (e)=>{
        info.setShowModal(true);
        info.setModalData({  
            modalType : "INFO",
            Mname : "What Item You have" , 
            title : null,
            id : e.target.dataset.id
        }
        )
        
    }


    return (
        <div className={`h-full w-4/5  rounded-xl shadow shadow-xl  ${info.darkMode ? "bg-gray-800 sahdow-gray-800" : "shadow-fuchsia-900 bg-fuchsia-100"}`}>

            <div className='h-14 w-full rounded-tl-xl rounded-tr-xl bg-sky-400'>
                <h6 className='text-sky-800 font-bold text-center py-4'>Tasks To Do</h6>
            </div>
            {/* overflow scroll here */}
            <div className='w-full'>
                {
                    info.todos.length < 1 ? <div className='flex flex-col items-center'>
                        <p className='text-center mt-10 text-sky-800 font-bold'>There is no task to do!!!</p>
                      <img src={listImg} className='w-24 h-24' alt="" />
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

                                            {
                                            item.reminder ? <img src={clockImg} className='w-5 h-5 mx-0.5 cursor-pointer' alt="" /> : <div className='w-5 h-5 mx-0.5'></div>
                                            }

                                            

                                            <img src={checkImg} data-id={item.id} onClick={(e) => { checkItemHandler(e) }} className='w-5 h-5 mx-0.5 cursor-pointer' alt="" />

                                            <img src={trashImg} alt="" data-id={item.id} onClick={(e) => deleteHandler(e)} className='w-5 h-5 mx-0.5 cursor-pointer' />

                                            <img src={infoImg} className='w-5 h-5 mx-0.5 cursor-pointer' alt="" data-id={item.id}  onClick={(e)=>showInformation(e)}/>

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

export default TodoList