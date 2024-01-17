import React, { useEffect, useState } from "react";
import "./index.css";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  // const [checked, setChecked] = useState(false)
  const [value, setValue] = useState("")
  const [edite, setEdite] = useState(null)
  // ! =============== CREATE ===============
  function TodoInp(e) {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        name: todoTitle,
        id: Date.now(),
      },
    ]);
    setTodoTitle("");
  }

  // ! ================== READ ================

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todo"));
    setTodo(data);
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  // ! ================== DELETE ===============

  const deleteItem = (id) => {
   const deleted =  todo.filter((elem) => {
      if(elem.id !== id){
        return elem
      }
    })
    setTimeout(() => {
      setTodo(deleted)
    }, 500);
  }

  // ! ================= EDIT =================
  function edit(id,name) {
    setEdite(id)
    setValue(name)

  }
  function editSubmit(id) {
    const editted = todo.map((elem) => {
      if(elem.id == id){
        elem.name = value
        console.log(elem);
      }
      return elem
    })
    setEdite(null)
  }
  console.log(value);
  return (
    <div className="container">
      <div className="todoForm">
        <form onSubmit={TodoInp}>
          <input
            placeholder="Write your ToDo here"
            onChange={(e) => setTodoTitle(e.target.value)}
            value={todoTitle}
            type="text"
          />
        </form>
      </div>
      <div className="todoList">
        <TodoList todo={todo} edite={edite} deleteItem={deleteItem} edit={edit} setValue={setValue} editSubmit={editSubmit} value={value} />
      </div>
    </div>
  );
};

export default App;
