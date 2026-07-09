import React from 'react'

import './app1.css'
import { TodoItem } from './TodoItem/TodoItem'
import { TodoCounter } from './TodoCounter/TodoCounter'
import { TodoSearch } from './TodoSearch/TodoSearch'
import { TodoList } from './TodoList/CompleteIcon/TodoList/TodoList'
import { TodoButton } from './TodoButton/TodoButton'
import { useLocalStorage } from './localStorage/localStorageItem.jsx' 

/* 
const defaultTodos = [
  { texto: 'cortar Cebolla', completed: false },
  { texto: 'Pasar el curso', completed: true },
  { texto: 'Llorrar con la llorona', completed: false },
  { texto: 'Limpiar', completed: false } 
]
 localStorage.setItem('Todos.v1',JSON.stringify (defaultTodos)) 

 localStorage.removeItem('ToDos-2')  */


function App() {

  const [todos, saveTodos] = useLocalStorage('Todos.v1', [])
  const [searchValue, setSearchValue] = React.useState('')

  const completados = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    return todo.texto.toLowerCase().includes(searchValue.toLowerCase())
  })

  const completeTodo = (texto) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.texto === texto)

    if (todoIndex === -1) return

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (texto) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.texto === texto)

    if (todoIndex === -1) return

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <React.Fragment>
      <div className='center' translate='no'>

        <TodoCounter completed={completados} total={totalTodos} />

        <TodoSearch searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>

          {searchedTodos.map(todo => (
            <TodoItem key={todo.texto} texto={todo.texto} completed={todo.completed}
              onComplete={() => completeTodo(todo.texto)}
              onDelete={() => deleteTodo(todo.texto)}
            />
          ))}
        </TodoList>

        <TodoButton />

      </div>
    </React.Fragment>
  )
}

export default App