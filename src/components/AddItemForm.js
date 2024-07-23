import React from 'react'
import { useRef, useEffect, useState, useContext } from 'react'
import { MyContext } from '../context/MyContext';
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";

function AddItemForm() {

  let info = useContext(MyContext);
  // let idMaker = 0;
  const myCircle = document.getElementById("circle");
  const myRange = useRef();
  const [importanceValue, setImoportanceValue] = useState(0);
  const [showReminder, setShowReminder] = useState(false);
  // let importanceColor = null;
  const [importanceColor , setImoportanceColor] = useState("");
  const rangeChangeHandler = () => {
    setImoportanceValue(myRange.current.value)
  }

  useEffect(() => {

    switch (true) {
      case importanceValue > 90:
        myCircle.style.borderColor = "#f70505";
        // importanceColor = "#f70505";
        setImoportanceColor("#f70505")
        break;
      case importanceValue > 80:
        myCircle.style.borderColor = "#f73d05";
        // importanceColor = "#f73d05";
        setImoportanceColor("#f73d05")
        break;
      case importanceValue > 70:
        myCircle.style.borderColor = "#f75e05";
        // importanceColor = "#f75e05";
        setImoportanceColor("#f75e05")
        break;
      case importanceValue > 60:
        myCircle.style.borderColor = "#f78205";
        // importanceColor = "#f78205";
        setImoportanceColor("#f78205")
        break;
      case importanceValue > 50:
        myCircle.style.borderColor = "#f7bf05";
        // importanceColor = "#f7bf05";
        setImoportanceColor("#f7bf05")
        break;
      case importanceValue > 40:
        myCircle.style.borderColor = "#ebfc03";
        // importanceColor = "#ebfc03";
        setImoportanceColor("#ebfc03")
        break;
      case importanceValue > 30:
        myCircle.style.borderColor = "#6ffc03";
        // importanceColor = "#6ffc03";
        setImoportanceColor("#6ffc03")
        break;
      case importanceValue > 20:
        myCircle.style.borderColor = "#03fc41";
        // importanceColor = "#03fc41";
        setImoportanceColor("#03fc41")
        break;
      case importanceValue > 10:
        myCircle.style.borderColor = "#0380fc";
        // importanceColor = "#0380fc";
        setImoportanceColor("#0380fc")
        break;
      case importanceValue > 0:
        myCircle.style.borderColor = "#03fcf0";
        // importanceColor = "#03fcf0";
        setImoportanceColor("#03fcf0")
        break;

    }

  }, [importanceValue])



  let myTodos = info.todos;


  let todoTitle = useRef();
  let todoExplane = useRef();
  let todoDate  = useRef();
  let todoTime = useRef();
  let todoNotif = useRef();
  let todoRing = useRef();


  const addTodoHandler = ()=>{

    info.setItemId(e=>e+1)

    let reminderType;
    let notifCheck = todoNotif.current.checked;
    notifCheck ? reminderType = "notification" : reminderType = "ring"
    info.todo = {
      id : info.itemId ,
      title : todoTitle.current.value , 
      explane : todoExplane.current.value , 
      importance : myRange.current.value , 
      reminder : showReminder , 
      time : todoTime.current.value , 
      date : todoDate.current.value , 
      reminderType : reminderType , 
      color : importanceColor , 
    }
   
    info.setTodos(myTodos =>[info.todo , ...myTodos])
  }


  return (
    <div className='mt-5 w-10/12'>
      <form action="" className='w-full'>
        <div className='w-full'>
          <input ref={todoTitle} type="text" placeholder='Title : ' className='h-10 w-full  rounded-xl p-3 shadow-md shadow-slate-200 outline-fuchsia-600' />
        </div>
        <div className='w-full my-5'>
          <p className='ml-3 text-indigo-800'>
            Explain your task here:
          </p>
          <textarea ref={todoExplane} className='h-24 mt-3 w-full  rounded-xl p-3 shadow-md shadow-slate-200 outline-fuchsia-600' name="" id="" placeholder='Write here.'></textarea>
        </div>
        <div className='w-full my-5'>
          <p className='ml-3 text-indigo-800'>
            Task Importance Level :
          </p>

          <div className="w-full">
            <input ref={myRange} type="range" min="1" max="100" className='w-full mt-3' id="myRange" onChange={rangeChangeHandler} />
          </div>
          <div className='w-full flex justify-between'>
            <p className='text-xs text-slate-400'>Not Important</p>
            <div className='w-10 h-10 border-8 rounded-full flex justify-center items-center mt-3' id='circle'>
              <p className='text-xs text-slate-600'>
                {importanceValue}
              </p>
            </div>
            <p className='text-xs text-slate-400'>Very Important</p>
          </div>

          <div className='w-full mt-3'>
            <div className='w-full flex justify-between'>
              <p className='ml-3 text-indigo-800'>
                Reminder :
              </p>
              <div>
                {showReminder ? <FaToggleOn className='text-xl mt-1 text-fuchsia-600 cursor-pointer' onClick={() => { setShowReminder(!showReminder) }} /> : <FaToggleOff className='text-xl text-fuchsia-600 cursor-pointer mt-1' onClick={() => { setShowReminder(!showReminder) }} />}
              </div>
            </div>

            {
              showReminder ? <div className='flex justify-around mt-4'>
                <input ref={todoDate} type="date" className='shadow shadow-md shadow-slate-200 p-1 rounded-xl text-fuchsia-600 outline-fuchsia-600' />
                <input ref={todoTime} type="time" className='shadow shadow-md shadow-slate-200 p-1 rounded-xl text-fuchsia-600 outline-fuchsia-600' />
              </div> : <div className='flex justify-around mt-4'>
                <input disabled type="date" className='shadow shadow-md shadow-slate-200 p-1 rounded-xl text-slate-300 outline-fuchsia-600' />
                <input disabled type="time" className='shadow shadow-md shadow-slate-200 p-1 rounded-xl text-slate-300 outline-fuchsia-600' />
              </div>
            }
            <div className='w-full'>
              <p className={`${showReminder}  ? "ml-3 text-indigo-800 mt-4" : "ml-3 text-slate-200 mt-4 " `}>How remind you?</p>
              <div className='w-full flex justify-around mt-3'>
                <div>
                  <input ref={todoRing} type="radio" id='ring' className='mr-1' name='reminderOption' />
                  <label htmlFor="ring" className={`${showReminder ? "text-fuchsia-600" : "text-slate-200"}`} >Ring</label>
                </div>
                <div>
                  <input ref={todoNotif} type="radio" id='notification' className='mr-1' name='reminderOption' />
                  <label htmlFor="notification" className={`${showReminder ? "text-fuchsia-600" : "text-slate-200"}`}  >Notification</label>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <button onClick={addTodoHandler} type='button' className='w-full bg-fuchsia-600 text-white font-bold mt-3 p-2 rounded-md'>Add</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default AddItemForm