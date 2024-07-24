import React from 'react'
import { MyContext } from '../../context/MyContext'
import { useContext , useRef } from 'react'


function SortOptions() {

    const info = useContext(MyContext);
    let sortType = useRef();

    const closeModal = () => {
        info.setShowModal(false)
    }

    const sortTypeHandler = ()=>{
        info.setSortOption(sortType.current.value);
        closeModal()
    }




    return (
        <div className='w-96 h-72 absolute left-1/3 bg-white rounded-xl shadow shadow-md shadow-slate-400 top-20'>
            <div className='w-full rounded-tl-xl px-4 flex justify-between items-center rounded-tr-xl h-16 bg-fuchsia-500'>
                <h6 className='text-fuchsia-900 text-center font-bold w-full'>Set Sort By </h6>
            </div>
            <div className='w-full h-40 border-b-2'>
                <form className='flex flex-col justify-start items-center h-full'>

                        <p className='text-gray-700 font-bold mt-7'>Please Choose Type Of Sort :</p>
                        <select name="sortType" id="sortType" className='shadow shadow-slate-400 w-40 py-2 px-3 rounded-lg mt-5 outline-fuchsia-500' ref={sortType}>
                            <option value="">Choose</option>
                            <option value="ATZ">A to Z</option>
                            <option value="ZTA">Z to A</option>
                            <option value="LTF">Last to First</option>
                            <option value="FTL">First to Last</option>
                            <option value="IMPORTANCE">Importance</option>
                        </select>

                </form>
            </div>
            <div className='w-full h-16 flex items-center justify-end'>
            <button className='bg-red-600 px-5 py-1 rounded-lg mx-5 text-white font-bold' onClick={closeModal}>Cancle</button>
                <button className='bg-green-600 px-5 mr-5 py-1 text-white font-bold rounded-lg' onClick={sortTypeHandler}>Confirm</button>
            </div>
        </div>
    )
}

export default SortOptions