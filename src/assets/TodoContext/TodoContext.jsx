import React from "react"
import { useLocalStorage } from "../../localStorage/localStorageItem.jsx"

const TodoContext = React.createContext()

function TodoProvider({ children }) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('Todos.v1', [])
  const [searchValue, setSearchValue] = React.useState('')

  const completados = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) =>
    todo.texto.toLowerCase().includes(searchValue.toLowerCase())
  )

  const completeTodo = (texto) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.texto === texto)
    if (todoIndex === -1) return
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (texto) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.texto === texto)
    if (todoIndex === -1) return
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completados,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }