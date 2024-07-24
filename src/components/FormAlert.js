import React from 'react'
import { MyContext } from '../context/MyContext'
import { useContext , useEffect } from 'react'
import { TiWarningOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";

function FormAlert() {

    const info = useContext(MyContext)
    let data = info.formAlertData;

    const closeAlert = ()=>{
        info.setShowFormAlert(false)
    }
    useEffect(() => {
        //Runs on every render
        setTimeout(() => {
            closeAlert()
        }, 2000);
      });



  return (
    <div className='w-96 h-12 bg-red-600 absolute top-2 left-2 rounded-lg'>
        <div className='w-full h-full flex justify-between items-center px-2'>
            <div>
                <TiWarningOutline className='text-white w-5 h-5'/>
            </div>
            <div>
                <p className='text-left font-bold text-slate-200'>{data.message}</p>
            </div>
            <div>
            <FaTimes className='text-white w-5 h-5 cursor-pointer' onClick={closeAlert}/>
            </div>
        </div>
    </div>
  )
}

export default FormAlert