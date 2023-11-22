import "./App.css";
import AppName from "./components/AppName";
import Addt from "./components/Addt";
import Items from "./components/Items";
import { useState } from "react";

function App() {
  
  const todoItems = [
    {
      name: "ash",
      date: "16/10/23",
      key: "7418",
    },
    {
      name: "kar",
      date: "16/10/23",
      key: "74585",
    },
  ];
  const [todo, setTodo] = useState(todoItems);
  const handleClick = (itemName, itemDate) => {
    console.log(`${itemName} ${itemDate}`);

    const newTodoItems = [
      ...todo,
      { name: itemName, date: itemDate},
    ];
    setTodo(newTodoItems);
  };
  const handleDelete =(todoItemName)=>{
	const newTodoItem = todo.filter((item)=>item.name !== todoItemName);
	setTodo(newTodoItem);
  };

  return (
    <>
      <AppName />
      <Addt onNewItem={handleClick}></Addt>
      <Items myItems={todo} onDeleteClick={handleDelete}> </Items>
    </>
  );
}

export default App;
