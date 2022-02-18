import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskLisk";


const TodoApp = () => {
  return (
    <div>
      <div className="header">
        <h1>ToDoApp</h1>
      </div>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TodoApp;