import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  return (
    <div>
      <h1>Todo list</h1>
      <div>
        <input type="text" name="" id="" placeholder="Enter you task" />
        <button>Add</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoList