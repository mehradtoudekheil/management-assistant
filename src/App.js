import "./index.css"
import "./assets/styles/custom.css"
import Content from "./components/Content"
import { MyContext } from "./context/MyContext";
import { useState } from "react";


function App() {

  const [todos , setTodos] = useState([]);
  const [checkedItems , setCheckedItems] = useState([]);
  const [deletedItems , setDeletedItems] = useState([]);
  const [modalData , setModalData] = useState({
    modalType : null ,
    Mname : null,
    title : null , 
    id : null 
  });
  const [showModal , setShowModal] = useState(false);
  const [showFormAlert , setShowFormAlert ] = useState(false);
  const [formAlertData , setFormAlertData] = useState(
    {
      typeError : null ,
      message : null
    }
  );

  const todoItem = {
    id: null,
    title: null,
    explane: null,
    importance: null,
    reminder: null,
    time: null,
    date: null,
    reminderType: null,
    color: null,
    deleteStatus : null
  }

  const [itemId , setItemId] = useState(1);



  return (
    <MyContext.Provider value={{todos , setTodos , todoItem , itemId , setItemId , checkedItems , setCheckedItems , deletedItems , setDeletedItems , showModal , setShowModal , modalData , setModalData , showFormAlert , setShowFormAlert ,formAlertData , setFormAlertData}}>
      <Content/>
    </MyContext.Provider>
  );
}

export default App;
