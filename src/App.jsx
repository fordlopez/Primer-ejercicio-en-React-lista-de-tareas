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
  const [searchValue, setSearchValue] = React.
    useState('');

  const completados = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length;
  console.log('los usuaro   ' + searchValue)

  const searchedTodos = todos.filter((todos) => {

    return todos.texto.toLowerCase().includes(searchValue.toLocaleLowerCase())
  })

  const completeTodo = (texto) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.texto == texto)

    newTodos[todoIndex].completed = true
    setTodos(newTodos)


  }


  const TodoDilit = (texto) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.texto == texto)

    newTodos.splice(todoIndex,1)
    setTodos(newTodos)

  }





  return (


    <React.Fragment>
      <div className='center'>

        <TodoCounter completed={completados} total={totalTodos} />

        <TodoSearch searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem key={todo.texto} texto={todo.texto} completed={todo.completed}
              onComplete={() => completeTodo(todo.texto)}
              onDilit={() => TodoDilit(todo.texto)}
            />
          ))}
        </TodoList>


        <TodoButton />

      </div>
    </React.Fragment>
  )
}

export default App
