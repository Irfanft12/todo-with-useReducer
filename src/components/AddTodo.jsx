import { useRef, useEffect } from "react"

export default function AddTodo({todo, onTodoChange, onTodoSubmit, emptyError }) {

  const addTodoRef = useRef()

  useEffect(() => {
    addTodoRef.current.focus()
  }, [])
    return (
      <>
        <form onSubmit={onTodoSubmit} className="add-todo-form">
          <div className="form-group">
            <input ref={addTodoRef} type="text" onChange={onTodoChange} value={todo} className="add-todo-input" />
            <button className="add-todo-btn">Add</button>
          </div>
          {emptyError && <p className="error">Type something in the above box</p>}
        </form>
      </>
        
    )
}

