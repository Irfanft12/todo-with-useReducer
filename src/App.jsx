import { useState, useReducer } from 'react'
import AddTodo from './components/AddTodo'
import reducer from './reducer'
import TodoItem from './components/TodoItem'

function App() {
  const [todo, setTodo] = useState("")
  const [emptyError, setEmptyError] = useState(false)
  const [todos, dispatch] = useReducer(reducer, [])

  function handleTodoChange(e) {
    setTodo(e.target.value)
    setEmptyError(false)
  }

  function handleTodoSubmit(e) {
    e.preventDefault()
    const trimmed = todo.trim()
    if (trimmed) {
      dispatch({type: "addTodo", payload: {title: trimmed}})
      setTodo("")
    } else {
      setEmptyError(true)
    }
  }

  return (
    <>
      <main>
        <AddTodo todo={todo} onTodoChange={handleTodoChange} onTodoSubmit={handleTodoSubmit} emptyError={emptyError} />
        <ul>
          {todos?.length === 0 && <p>There is no item in the list</p>}
          {todos?.map(item => {
            return <TodoItem key={item.id} item={item} dispatch={dispatch} />
          })}
        </ul>
      </main>
    </>
  )
}

export default App
