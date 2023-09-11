import { useState, useRef, useEffect } from "react";

export default function TodoItem({ item, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);

  const editTodoRef = useRef()

  function handleEditClick() {
    setIsEditing(true)
  }

  useEffect(() => {
    if (isEditing) {
      editTodoRef.current.focus()
    }
  }, [isEditing])


  return (
    <li>
      {!isEditing ? (
        <div>
          <label className={item.completed ? "title completed" : "title"}>
            {item.title}{" "}
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={item.completed}
              onChange={(e) => dispatch({type: "editTodo", payload: {obj: {...item, completed: e.target.checked}}})}
            />
          </label>
          <div className="btns-wrapper">
            <button onClick={handleEditClick} className="edit-btn">
              Edit
            </button>
            <button
              onClick={() =>
                dispatch({ type: "deleteTodo", payload: { id: item.id } })
              }
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div>
          <input
            ref={editTodoRef}
            type="text"
            name=""
            id=""
            className="edit-todo-input"
            value={item.title}
            onChange={(e) => {
              dispatch({
                type: "editTodo",
                payload: { obj: { ...item, title: e.target.value } },
              });
            }}
          />
          <button onClick={() => setIsEditing(false)} className="save-btn">Save</button>
        </div>
      )}
    </li>
  );
}
