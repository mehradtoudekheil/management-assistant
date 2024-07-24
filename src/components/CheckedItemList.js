import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import { FaCircleExclamation, FaCircleInfo, FaCircleCheck, FaRegTrashCan, FaClock } from "react-icons/fa6";

// import images
import trashImg from "./../assets/img/icons/trash.png"
import undoImg from "./../assets/img/icons/undo.png"
import checkedItemsImg from "./../assets/img/checkedItems.png"

function CheckedItemList() {

    const info = useContext(MyContext)

    const reDoHandler = (e) => {
        let id = e.target.dataset.id;
        let reDoItemArray = info.checkedItems.filter(item => item[0].id == id);
        let reDoItem = reDoItemArray[0][0];

        let myTodos = info.todos;
        myTodos.push(reDoItem)
        info.setTodos(myTodos)

        let newCheckedItems = info.checkedItems.filter(item => item[0].id != id);
        info.setCheckedItems(newCheckedItems)
    }

    const deleteItemHandler = (e) => {
        let id = e.target.dataset.id;
        let deletedItemArray = info.checkedItems.filter(item => item[0].id == id);
        let deletedItem = deletedItemArray[0][0];
        // console.log(deletedItem);
        let myDeletedItems = info.deletedItems;
        myDeletedItems.push(deletedItem);
        info.setDeletedItems(myDeletedItems);

        let newCheckedItems = info.checkedItems.filter(item => item[0].id != id);
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
                        <p className='text-center mt-10 text-emerald-500 font-bold'>There is no task you did it!!!</p>
                        <img src={checkedItemsImg} className='w-20 h-20' alt="" />
                    </div> : <ul className='w-full flex flex-col items-center py-5'>
                        {
                            info.checkedItems.map((item) => {
                                return <li key={item[0].id} className='w-11/12 bg-white py-2 rounded-xl shadow-md shadow shadow-slate-300  px-3 my-1'>
                                    <div className='flex justify-between items-center w-full'>

                                        <div className='flex items-center h-full'>
                                            <p className='px-3  border-r-2 text-slate-500'>{item[0].id}</p>
                                            <p className='font-bold px-3'>{item[0].title}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='h-3 w-3 mx-5 rounded-full' style={{ backgroundColor: item[0].color }}>
                                            </div>
                                            <div className='h-3 w-3 mx-5 rounded-full'>
                                            </div>

                                         
                                            <img src={undoImg} className='w-5 h-5 mx-0.5' alt=""  data-id={item[0].id} onClick={(e) => reDoHandler(e)} />

                                            <img src={trashImg} className='w-5 h-5 mx-0.5' alt=""  data-id={item[0].id} onClick={(e) => deleteItemHandler(e)}/>

                                          

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