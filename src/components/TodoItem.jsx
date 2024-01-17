import React from "react";

const TodoItem = ({ name, id, deleteItem, edit, setValue, edite, value, editSubmit }) => {
  return (
    <div className="itemLi">
      <input onChange={() => deleteItem(id)} id={id} type="checkbox" />
      {edite == id ? (
        <form onSubmit={editSubmit} id={id}>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          value={value}
        />
      </form>
      ):(
        <li>{name}</li>
      ) }
      <button onClick={() => edit(id,name)} id={id}>
        Edit
      </button>
    </div>
  );
};

export default TodoItem;
