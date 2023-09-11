export default function reducer(state, action) {
  if (action.type === "addTodo" ) {
    return [newTodo(action.payload.title), ...state]
  } else if (action.type === "deleteTodo") {
        return state.filter(t => {
          return t.id !== action.payload.id
        })
  } else if (action.type === "editTodo") {
    return state.map(t => {
      if (t.id === action.payload.obj.id) {
        return action.payload.obj
      } else {
        return t
      }
    })
  }
}

function newTodo(title) {
    return {id: Date.now(), title: title, completed: false}
}