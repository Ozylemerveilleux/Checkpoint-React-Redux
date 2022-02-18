import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTask, doneTask, editTask} from "../JS/Actions/actions";

const Task = ({description, id, isDone}) => {
  const dispatch = useDispatch();
  const [open_edit, setopen_verif_edit] = useState(false);
  
  const [edit_desc, setedit_desc] = useState("");

  return (
    <div className="Task">
      {!open_edit ? (
        <textarea
          className={isDone ? "done desc" : "undone desc"}
          rows="20"
          cols="40"
          value={description}
          readOnly={true}
        ></textarea>
      ) : (
        <input
          className="desc"
          defaultValue={description}
          type="text"
          onChange={(e) => {
            setedit_desc(e.target.value);
          }}
          autoFocus
        />
      )}
      <button
        onClick={() => {
          if (!open_edit) {
            setopen_verif_edit(!open_edit);

            setedit_desc(description);
          } else {
            if (!edit_desc) {
              alert("Warning !! Empty modification");
              setopen_verif_edit(!open_edit);
            } else {
              dispatch(editTask({id, description: edit_desc}));
              setedit_desc("");
              setopen_verif_edit(!open_edit);
            }
          }
        }}
      >
        Edit
      </button>
      <button onClick={() => dispatch(deleteTask(id))}>DELETE</button>
      <button onClick={() => dispatch(doneTask(id))}>
        {isDone ? "DONE" : "UNDONE"}
      </button>
    </div>
  );
};

export default Task;