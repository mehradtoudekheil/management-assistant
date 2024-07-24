import React from 'react'
import { MyContext } from '../context/MyContext'
import { useContext } from 'react'
import { FaCircleExclamation, FaCircleInfo, FaCircleCheck, FaRegTrashCan, FaClock } from "react-icons/fa6";

// import images
import trashImg from "./../assets/img/icons/trash.png"
import undoImg from "./../assets/img/icons/undo.png"
import binImg from "./../assets/img/bin.png"

function RecycleBin() {

    const info = useContext(MyContext)

    const undoItemHandler = (e) => {
        let id = e.target.dataset.id;
        let undoItemArray = info.deletedItems.filter(item => item.id == id);
        let undoItem = undoItemArray[0];

        let myTodos = info.todos;
        myTodos.push(undoItem)
        info.setTodos(myTodos)

        let newDeletedItems = info.deletedItems.filter(item => item.id != id);
        info.setDeletedItems(newDeletedItems)

    }

    const removeHandler = (e)=>{
        info.setShowModal(true);
        info.setModalData({  
            modalType : "DELETE",
            Mname : "DELETE" , 
            title : "Do You Want Delete This Item?",
            id : e.target.dataset.id
        }
        )
    }


    return (
        <div className={`w-4/5 h-64 rounded-xl shadow shadow-xl  ${info.darkMode ? "bg-gray-800 sahdow-gray-800" : "shadow-fuchsia-900 bg-fuchsia-100"}`}>

            <div className='h-14 w-full rounded-tl-xl rounded-tr-xl bg-rose-400'>
                <h6 className='text-rose-800 font-bold text-center py-4'>Recycle Bin</h6>
            </div>
            {/* overflow scroll here */}
            <div className='w-full h-48'>
                {
                    info.deletedItems.length < 1 ? <div className='flex flex-col items-center'>
                        <p className='text-center mt-10 text-rose-500 font-bold'>Your bin is empty!!!</p>
                      <img src={binImg} className='w-16 h-16 mt-3' alt="" />
                    </div> : <ul className='w-full flex flex-col items-center py-5'>
                        {
                            info.deletedItems.map((item) => {
                                return <li key={item.id} className='w-11/12 bg-white py-2 rounded-xl shadow-md shadow shadow-slate-300  px-3 my-1'>
                                    <div className='flex justify-between items-center w-full'>

                                        <div className='flex items-center h-full'>
                                            <p className='px-3  border-r-2 text-slate-500'>{item.id}</p>
                                            <p className='font-bold px-3'>{item.title}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <div className='h-3 w-3 mx-5 rounded-full' style={{ backgroundColor: item.color }}>
                                            </div>
                                            <div className='h-3 w-3 mx-5 rounded-full'>
                                            </div>

                                           
                                            
                                            <img src={undoImg} className='w-5 h-5 mx-0.5' data-id={item.id} onClick={(e) => undoItemHandler(e)} alt="" />

                                            <img src={trashImg} className='mx-0.5 w-5 h-5'  data-id={item.id} onClick={(e)=>removeHandler(e)} alt="" />

                                            

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

export default RecycleBin