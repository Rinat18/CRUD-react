import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todo, deleteItem, edit, setValue, edite, value, editSubmit}) => {
  return (
    <ul>
      {todo.map((elem) => (
        <TodoItem key={elem.id} deleteItem={deleteItem} edit={edit} setValue={setValue} value={value} edite={edite} editSubmit={editSubmit}  {...elem} />
      ))}
    </ul>
  );
};

export default TodoList;
