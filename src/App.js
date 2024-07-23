import "./index.css"
import "./assets/styles/custom.css"
import Content from "./components/Content"
import { MyContext } from "./context/MyContext";
import { useState } from "react";


function App() {

  const [todos , setTodos] = useState([]);
  const [checkedItems , setCheckedItems] = useState([]);

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

// console.log(todos);


  return (
    <MyContext.Provider value={{todos , setTodos , todoItem , itemId , setItemId , checkedItems , setCheckedItems }}>
      <Content/>
    </MyContext.Provider>
  );
}

export default App;
