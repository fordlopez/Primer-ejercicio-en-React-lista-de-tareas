import React from 'react'

import './app1.css'
import { TodoItem } from './TodoItem'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoButton } from './TodoButton'


const defaultTodos = [
  { texto: 'cortar Cebolla', completed: false },
  { texto: 'Pasar el curso', completed: false },
  { texto: 'Llorrar con la llorona', completed: false },
  { texto: 'Limpiar', completed: false }
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completados = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    return todo.texto.toLowerCase().includes(searchValue.toLowerCase())
  })
  const noHayTodos = todos.length === 0
  const noHayResultados = searchedTodos.length === 0 && !noHayTodos

  const completeTodo = (texto) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.texto === texto)

    if (todoIndex === -1) return

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)


  }


  const deleteTodo = (texto) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.texto === texto)

    if (todoIndex === -1) return

    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)

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
